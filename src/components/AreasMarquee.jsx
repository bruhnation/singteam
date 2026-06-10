import { AREAS } from "../data/siteData";

export default function AreasMarquee() {
  const items = [...AREAS, ...AREAS];

  return (
    <div className="areas-marquee" aria-label={`Serving ${AREAS.join(", ")}`}>
      <div className="areas-marquee__track" aria-hidden="true">
        {items.map((area, index) => (
          <span key={`${area}-${index}`} className="areas-marquee__item">
            {area}
            <span className="areas-marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
