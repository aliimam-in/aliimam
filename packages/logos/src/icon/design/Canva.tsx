import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Canva: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Canva(
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
        <g clipPath="url(#undefined-clip0_2039_289)">
          <mask
            id="undefined-mask0_2039_289"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={size}
            height={size}
          >
            <path d="M24 0H0V24H24V0Z" fill="#fff" />
          </mask>
          <g mask="url(#undefined-mask0_2039_289)">
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#7d2ae7"
            />
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="url(#undefined-paint0_radial_2039_289)"
            />
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="url(#undefined-paint1_radial_2039_289)"
            />
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="url(#undefined-paint2_radial_2039_289)"
            />
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="url(#undefined-paint3_radial_2039_289)"
            />
            <path
              d="M17.1807 14.4616C17.0817 14.4616 16.9945 14.5452 16.9039 14.7279C15.8797 16.8046 14.1107 18.274 12.0637 18.274C9.69683 18.274 8.23109 16.1374 8.23109 13.1857C8.23109 8.18567 11.017 5.29475 13.4639 5.29475C14.6073 5.29475 15.3056 6.01331 15.3056 7.15679C15.3056 8.5139 14.5345 9.23246 14.5345 9.71108C14.5345 9.92594 14.6682 10.056 14.9332 10.056C15.9979 10.056 17.2475 8.83259 17.2475 7.10426C17.2475 5.42843 15.789 4.19666 13.3421 4.19666C9.29819 4.19666 5.70425 7.94576 5.70425 13.1331C5.70425 17.1484 7.99715 19.8018 11.535 19.8018C15.29 19.8018 17.4613 16.0658 17.4613 14.8532C17.4613 14.5846 17.324 14.4616 17.1807 14.4616Z"
              fill="#fff"
            />
          </g>
        </g>
        <defs>
          <radialGradient
            id="undefined-paint0_radial_2039_289"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-49.416 25.433 5.598)scale(18.562)"
          >
            <stop stopColor="#6420ff" />
            <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="undefined-paint1_radial_2039_289"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(54.703 .54 7.506)scale(20.9321)"
          >
            <stop stopColor="#00c4cc" />
            <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="undefined-paint2_radial_2039_289"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-45.195 27.872 5.067)scale(18.3373 8.43354)"
          >
            <stop stopColor="#6420ff" />
            <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="undefined-paint3_radial_2039_289"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(66.52 2.442 9.099)scale(18.8951 31.6536)"
          >
            <stop stopColor="#00c4cc" stopOpacity=".726" />
            <stop offset="0" stopColor="#00c4cc" />
            <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
          </radialGradient>
          <clipPath id="undefined-clip0_2039_289">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Canva.displayName = "Canva";

Canva.metadata = {
  name: "Canva",
  category: "icon/design",
  tags: ["canva", "icon"],
  description: "Canva icon from icon/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Canva;
