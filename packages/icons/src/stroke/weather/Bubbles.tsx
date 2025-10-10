import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bubbles: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Bubbles(
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
        d="M7.2 14.8C7.731 14.8 8.239 15.011 8.614 15.386 8.989 15.761 9.2 16.27 9.2 16.8M18.5 12C20.433 12 22 10.433 22 8.5 22 6.567 20.433 5 18.5 5 16.567 5 15 6.567 15 8.5 15 10.433 16.567 12 18.5 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 22C10.538 22 13 19.538 13 16.5 13 13.462 10.538 11 7.5 11 4.462 11 2 13.462 2 16.5 2 19.538 4.462 22 7.5 22ZM7.5 7C8.881 7 10 5.881 10 4.5 10 3.119 8.881 2 7.5 2 6.119 2 5 3.119 5 4.5 5 5.881 6.119 7 7.5 7Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Bubbles.displayName = "Bubbles";

Bubbles.metadata = {
  name: "Bubbles",
  category: "stroke/weather",
  tags: ["bubbles", "icon"],
  description: "Bubbles icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bubbles;
