import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bitcoin: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Bitcoin(
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
      <path
        d="M11.7671 19.089C16.6911 19.957 17.9071 13.064 12.9831 12.195M11.7671 19.089L5.86011 18.047M11.7671 19.089L11.4211 21.059M9.04411 11.501L12.9841 12.195C17.9081 13.064 19.1241 6.17002 14.1991 5.30202L8.29011 4.26002M14.1981 5.30202L14.5461 3.33202M7.48011 20.364L10.6061 2.63702"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Bitcoin.displayName = "Bitcoin";

Bitcoin.metadata = {
  name: "Bitcoin",
  category: "stroke/codingDevelopment",
  tags: ["bitcoin", "icon"],
  description: "Bitcoin icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bitcoin;
