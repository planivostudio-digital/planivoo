import { usePointerParallax } from "../hooks/usePointerParallax";
import "./PlannerStack3D.css";

const CARDS = [
  { key: "today", label: "TODAY", title: "Focus", lines: [72, 44, 58] },
  { key: "priorities", label: "PRIORITIES", title: "Top 3", lines: [50, 66, 38] },
  { key: "reflect", label: "REFLECT", title: "Evening", lines: [60, 40, 52] },
];

export default function PlannerStack3D() {
  const zoneRef = usePointerParallax({ strength: 8 });

  return (
    <div className="stack3d" data-parallax-zone ref={zoneRef} aria-hidden="true">
      <div className="stack3d__scene">
        {CARDS.map((card, i) => (
          <div className={`stack3d__card stack3d__card--${i}`} key={card.key}>
            <div className="stack3d__card-top">
              <span className="stack3d__dot" />
              <span className="stack3d__label">{card.label}</span>
            </div>
            <div className="stack3d__card-title">{card.title}</div>
            <div className="stack3d__lines">
              {card.lines.map((w, li) => (
                <span key={li} className="stack3d__line" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        ))}
        <div className="stack3d__ring" />
      </div>
    </div>
  );
}
