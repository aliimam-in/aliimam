import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RockingChair: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RockingChair(
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
        d="M3.5 2 6.5 12.5H18M9.5 12.5 5.5 20M15 12.5 18.5 20M2.75 18C3.959 19.225 5.4 20.197 6.987 20.86 8.575 21.524 10.279 21.866 12 21.866 13.721 21.866 15.425 21.524 17.013 20.86 18.601 20.197 20.041 19.225 21.25 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RockingChair.displayName = "RockingChair";

RockingChair.metadata = {
  name: "RockingChair",
  category: "stroke/home",
  tags: ["rocking", "chair", "icon"],
  description: "RockingChair icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RockingChair;
