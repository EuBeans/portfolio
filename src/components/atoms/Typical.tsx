import React, { useEffect, useMemo, useState } from 'react';

type Step = number | string;

type WrapperTag = keyof JSX.IntrinsicElements;

export interface TypicalProps extends React.HTMLAttributes<HTMLElement> {
  steps: Step[];
  loop?: number;
  wrapper?: WrapperTag;
  typeSpeedMs?: number;
}

const toDelay = (value: Step): number =>
  typeof value === 'number' && Number.isFinite(value) ? value : 0;

const toText = (value: Step): string =>
  typeof value === 'string' ? value : String(value);

const parseSteps = (steps: Step[]) => {
  const pairs: Array<{ delay: number; text: string }> = [];
  for (let i = 0; i < steps.length - 1; i += 2) {
    const delay = toDelay(steps[i]);
    const text = toText(steps[i + 1]);
    pairs.push({ delay, text });
  }
  return pairs;
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
      if (!loop || parsedSteps.length === 0) {
        setDisplay('');
        return;
      }

      let loopCount = 0;
      while (!cancelled && (loop === Infinity || loopCount < loop)) {
        for (const step of parsedSteps) {
          if (cancelled) return;
          await sleep(step.delay);
          if (cancelled) return;
          await typeText(step.text);
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
