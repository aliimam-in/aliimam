import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lightbulb: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Lightbulb(
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
        d="M15 14C15.2 13 15.7 12.3 16.5 11.5 17.5 10.6 18 9.3 18 8 18 6.409 17.368 4.883 16.243 3.757 15.117 2.632 13.591 2 12 2 10.409 2 8.883 2.632 7.757 3.757 6.632 4.883 6 6.409 6 8 6 9 6.2 10.2 7.5 11.5 8.2 12.2 8.8 13 9 14M9 18H15M10 22H14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Lightbulb.displayName = "Lightbulb";

Lightbulb.metadata = {
  name: "Lightbulb",
  category: "stroke/photography",
  tags: ["lightbulb", "icon"],
  description: "Lightbulb icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lightbulb;
