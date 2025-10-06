import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Proportions: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Proportions(
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
        d="M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM12 9V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9H15C15.5304 9 16.0391 9.21071 16.4142 9.58579C16.7893 9.96086 17 10.4696 17 11V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Proportions.displayName = "Proportions";

Proportions.metadata = {
  name: "Proportions",
  category: "stroke/design",
  tags: ["proportions", "icon"],
  description: "Proportions icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Proportions;
