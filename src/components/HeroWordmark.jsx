"use client";

import { useId } from "react";

export default function HeroWordmark({
  skylineSrc,
  groupRef,
  strokeRef,
  fillRef,
  strokeSingRef,
  strokeSubRef,
}) {
  const maskId = `wordmark-mask-${useId().replace(/:/g, "")}`;

  return (
    <div ref={groupRef} className="cinematic-hero__wordmark" aria-hidden="true">
      <svg
        ref={strokeRef}
        className="wordmark-svg wordmark-svg--stroke"
        viewBox="0 0 800 240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          ref={strokeSingRef}
          x="400"
          y="98"
          textAnchor="middle"
          className="wordmark-svg__sing"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          Sing
        </text>
        <text
          ref={strokeSubRef}
          x="400"
          y="168"
          textAnchor="middle"
          className="wordmark-svg__sub"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        >
          Real Estate
        </text>
      </svg>
      <svg
        ref={fillRef}
        className="wordmark-svg wordmark-svg--fill"
        viewBox="0 0 800 240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id={maskId}>
            <rect width="800" height="240" fill="black" />
            <text x="400" y="98" textAnchor="middle" className="wordmark-svg__sing" fill="white">
              Sing
            </text>
            <text x="400" y="168" textAnchor="middle" className="wordmark-svg__sub" fill="white">
              Real Estate
            </text>
          </mask>
        </defs>
        <image
          href={skylineSrc}
          width="800"
          height="240"
          preserveAspectRatio="xMidYMid slice"
          mask={`url(#${maskId})`}
        />
      </svg>
      <p className="sr-only">Sing Real Estate</p>
    </div>
  );
}
