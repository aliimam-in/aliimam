import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star2: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star2(
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
        viewBox="0 0 64 64"
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
        <g clipPath="url(#undefined-clip0_2051_94)">
          <path
            d="M47.9747 16C39.1475 16.0275 32 23.1808 32 32C32 23.1805 24.8525 16.0272 16.0253 16C24.8525 15.9728 32 8.81984 32 0C32 8.81984 39.1475 15.9728 47.9747 16ZM31.9494 32C23.1222 32.0275 15.9747 39.1805 15.9747 48C15.9747 39.1805 8.8272 32.0272 0 32C8.8272 31.9728 15.9747 24.8198 15.9747 16C15.9747 24.8198 23.1222 31.9728 31.9494 32ZM64 32C55.1728 32.0275 48.0253 39.1805 48.0253 48C48.0253 39.1805 40.8778 32.0272 32.0506 32C40.8778 31.9728 48.0253 24.8198 48.0253 16C48.0253 24.8198 55.1728 31.9728 64 32ZM47.9747 48C39.1475 48.0275 32 55.1805 32 64C32 55.1805 24.8525 48.0272 16.0253 48C24.8525 47.9728 32 40.8198 32 32C32 40.8198 39.1475 47.9728 47.9747 48Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2051_94">
            <path fill="#fff" d="M0 0H64V64H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star2.displayName = "Star2";

Star2.metadata = {
  name: "Star2",
  category: "shapes/shapes",
  tags: ["star", "icon"],
  description: "Star2 icon from shapes/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star2;
