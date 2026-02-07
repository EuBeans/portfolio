const steps = "/-\\|";
const FPS = 2;
const frameInterval = 1000 / FPS;

export default function startTitleAnimation(pathName) {
    if (typeof window === "undefined") {
        return () => {};
    }

    let step = 0;
    let lastTimestep = 0;
    let frameId = 0;

    const animation = (timestamp) => {
        if (lastTimestep + frameInterval < timestamp) {
            document.title = `${steps[step]} JP | ${pathName}`;
            step = (step + 1) % steps.length;
            lastTimestep = timestamp;
        }

        frameId = window.requestAnimationFrame(animation);
    };

    frameId = window.requestAnimationFrame(animation);

    return () => window.cancelAnimationFrame(frameId);
}
