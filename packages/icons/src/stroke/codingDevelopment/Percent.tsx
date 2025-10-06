import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Percent: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Percent(
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
        d="M19 5 5 19M6.5 9C7.881 9 9 7.881 9 6.5 9 5.119 7.881 4 6.5 4 5.119 4 4 5.119 4 6.5 4 7.881 5.119 9 6.5 9ZM17.5 20C18.881 20 20 18.881 20 17.5 20 16.119 18.881 15 17.5 15 16.119 15 15 16.119 15 17.5 15 18.881 16.119 20 17.5 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Percent.displayName = "Percent";

Percent.metadata = {
  name: "Percent",
  category: "stroke/codingDevelopment",
  tags: ["percent", "icon"],
  description: "Percent icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Percent;
