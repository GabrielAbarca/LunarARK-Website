import FuzzyText from "../../TextAnimations/FuzzyText/FuzzyText.jsx";

export default function NotFound() {
  const hoverIntensity = 0.5;
  const enableHover = true;

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-dark-bg text-white">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
        fontSize='9rem'
      >
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        Not Found..
      </FuzzyText>
    </div>
  );
}
