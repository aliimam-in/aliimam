import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Tally3Props extends IconProps {
  type?: "stroke";
}

export const Tally3: IconComponent<Tally3Props> = React.forwardRef<
  SVGSVGElement,
  Tally3Props
>(function Tally3(
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
          d="M4 4V20M9 4V20M14 4V20"
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
          d="M4 4V20M9 4V20M14 4V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Tally3 doesn't support ${type}`);
  return null;
});

Tally3.displayName = "Tally3";

Tally3.metadata = {
  name: "Tally3",
  category: "stroke/mathematics",
  tags: ["tally", "icon"],
  description: "Tally3 icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tally3;
