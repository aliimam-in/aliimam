import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Tally5Props extends IconProps {
  type?: "stroke";
}

export const Tally5: IconComponent<Tally5Props> = React.forwardRef<
  SVGSVGElement,
  Tally5Props
>(function Tally5(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M4 4V20M9 4V20M14 4V20M19 4V20M22 6 2 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M4 4V20M9 4V20M14 4V20M19 4V20M22 6 2 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Tally5 doesn't support ${type}`);
  return null;
});

Tally5.displayName = "Tally5";

Tally5.metadata = {
  name: "Tally5",
  category: "stroke/mathematics",
  tags: ["tally", "icon"],
  description: "Tally5 icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tally5;
