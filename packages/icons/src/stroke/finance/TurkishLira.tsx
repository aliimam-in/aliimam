import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TurkishLira: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TurkishLira(
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
        d="M15 4 5 9M15 8.5 5 13.5M18 12C18 14.387 17.052 16.676 15.364 18.364 13.676 20.052 11.387 21 9 21V3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TurkishLira.displayName = "TurkishLira";

TurkishLira.metadata = {
  name: "TurkishLira",
  category: "stroke/finance",
  tags: ["turkish", "lira", "icon"],
  description: "TurkishLira icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TurkishLira;
