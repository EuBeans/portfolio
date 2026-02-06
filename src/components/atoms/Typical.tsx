import React, { useEffect, useMemo, useState } from 'react';

type Step = number | string;

type WrapperTag = keyof JSX.IntrinsicElements;

export interface TypicalProps extends React.HTMLAttributes<HTMLElement> {
  steps: Step[];
  loop?: number;
  wrapper?: WrapperTag;
  typeSpeedMs?: number;
}

const toDelay = (value?: Step): number =>
  typeof value === 'number' && Number.isFinite(value) ? value : 0;

const toText = (value?: Step): string =>
  typeof value === 'string' ? value : '';

const parseSteps = (steps: Step[]) => {
  let initialDelay = 0;
  let startIndex = 0;

  if (typeof steps[0] === 'number') {
    initialDelay = toDelay(steps[0]);
    startIndex = 1;
  }

  const pairs: Array<{ delay: number; text: string }> = [];
  for (let i = startIndex; i < steps.length; i += 2) {
    const text = toText(steps[i]);
    const delay = toDelay(steps[i + 1]);
    pairs.push({ delay, text });
  }
  return { initialDelay, pairs };
};

const Typical: React.FC<TypicalProps> = ({
  steps,
  loop = 1,
  wrapper = 'span',
  typeSpeedMs = 45,
  ...rest
}) => {
  const [display, setDisplay] = useState('');
  const parsedSteps = useMemo(() => parseSteps(steps), [steps]);

  useEffect(() => {
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutId = setTimeout(resolve, Math.max(0, ms));
      });

    const typeText = async (text: string) => {
      setDisplay('');
      if (!text) return;
      for (let i = 1; i <= text.length; i += 1) {
        if (cancelled) return;
        setDisplay(text.slice(0, i));
        await sleep(typeSpeedMs);
      }
    };

    const run = async () => {
      if (!loop || parsedSteps.pairs.length === 0) {
        setDisplay('');
        return;
      }

      let loopCount = 0;
      while (!cancelled && (loop === Infinity || loopCount < loop)) {
        if (parsedSteps.initialDelay > 0) {
          await sleep(parsedSteps.initialDelay);
        }
        for (const step of parsedSteps.pairs) {
          if (cancelled) return;
          await typeText(step.text);
          if (cancelled) return;
          await sleep(step.delay);
        }
        loopCount += 1;
      }
    };

    run();

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [loop, parsedSteps, typeSpeedMs]);

  return React.createElement(wrapper, rest, display);
};

export default Typical;
