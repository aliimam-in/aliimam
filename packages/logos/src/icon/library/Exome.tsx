import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Exome: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Exome(
    {
      color = "currentColor",
      fill,
      size = 24,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <g
          fill="#f5841b"
          clipPath="url(#undefined-clip0_2066_915)"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M3.00011 22.6304L3.01315 22.5391V22.6304H3.00011ZM7.9175 17.0739C6.79471 17.9823 5.61871 18.8229 4.39576 19.5912C6.37533 16.566 8.68039 13.7667 11.2697 11.2434C13.7929 8.65793 16.5922 6.35719 19.6175 4.38255C18.8429 5.61179 17.9934 6.79227 17.074 7.91734C17.7447 8.76783 18.1929 9.77196 18.3784 10.8391C22.5262 5.94777 24.7566 1.66951 23.5436 0.456467C22.0045 -1.06962 15.6132 2.85647 9.24793 9.22168C2.86967 15.5869 -1.05641 21.9913 0.482716 23.5173C1.69576 24.7304 5.96098 22.513 10.8392 18.3913C9.77212 18.2058 8.76799 17.7576 7.9175 17.0869V17.0739ZM22.6566 2.9869H22.5653H22.6436H22.6566ZM21.0001 1.34342L20.9871 1.43473V1.34342H21.0001ZM1.43489 20.9739H1.35663H1.44793H1.43489Z" />
          <path d="M1.4348 3.01296H1.51306C1.48286 3.01833 1.45195 3.01833 1.42176 3.01296H1.4348ZM11.3218 12.7564C8.73634 10.2332 6.43561 7.4338 4.46089 4.40861C5.64717 5.1582 6.78828 5.97701 7.87828 6.86079C8.71597 6.17533 9.7111 5.70914 10.7739 5.50426C5.94784 1.44774 1.7348 -0.717475 0.521757 0.482525C-0.991287 2.00861 2.9348 8.41296 9.30002 14.7782C15.6652 21.1434 22.0696 25.0825 23.5957 23.5434C24.8087 22.3304 22.5783 18.026 18.4044 13.1086C18.2072 14.169 17.75 15.1639 17.0739 16.0043C18.0105 17.1588 18.8815 18.365 19.6826 19.6173C16.6574 17.6426 13.8581 15.3419 11.3348 12.7564H11.3218Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_915">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Exome.displayName = "Exome";

Exome.metadata = {
  name: "Exome",
  category: "icon/library",
  tags: ["exome", "icon"],
  description: "Exome icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Exome;
