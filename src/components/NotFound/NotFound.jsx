import FuzzyText from "../../TextAnimations/FuzzyText/FuzzyText.jsx";
import "./NotFound.css";

export default function NotFound() {
  const hoverIntensity = 0.5;
  const enableHover = true;

  return (
    <div className="not-found-container">
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
