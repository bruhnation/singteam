"use client";

function LogoText({ mask = false }) {
  const textFill = mask ? "white" : "currentColor";
  const lineStroke = mask ? "white" : "currentColor";

  return (
    <>
      <text
        x="488.5"
        y="198"
        textAnchor="middle"
        className="hero__logo-sing"
        fill={textFill}
      >
        Sing
      </text>
      <text
        x="488.5"
        y="292"
        textAnchor="middle"
        className="hero__logo-sub"
        fill={textFill}
      >
        REAL ESTATE
      </text>
      <g className="hero__logo-team-row" transform="translate(488.5 368)">
        <line
          className="hero__logo-team-line"
          x1="-214"
          y1="0"
          x2="-72"
          y2="0"
          stroke={lineStroke}
        />
        <text
          x="0"
          y="5"
          textAnchor="middle"
          className="hero__logo-team"
          fill={textFill}
        >
          TEAM
        </text>
        <line
          className="hero__logo-team-line"
          x1="72"
          y1="0"
          x2="214"
          y2="0"
          stroke={lineStroke}
        />
      </g>
    </>
  );
}

export default function HeroLogo() {
  return (
    <svg
      className="hero__logo-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 977 440"
      aria-hidden="true"
    >
      <LogoText />
    </svg>
  );
}

export function HeroLogoImageFill({ maskId, src = "/hero-house.webp" }) {
  return (
    <svg
      className="hero__logo-svg hero__logo-svg--image"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 977 440"
      aria-hidden="true"
    >
      <defs>
        <mask id={maskId}>
          <rect width="977" height="440" fill="black" />
          <LogoText mask />
        </mask>
      </defs>
      <image
        href={src}
        x="-40"
        y="-150"
        width="1060"
        height="760"
        preserveAspectRatio="xMidYMid slice"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
}
