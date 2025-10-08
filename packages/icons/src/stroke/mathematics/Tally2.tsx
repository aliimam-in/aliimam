import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Tally2Props extends IconProps {
  type?: "stroke";
}

export const Tally2: IconComponent<Tally2Props> = React.forwardRef<
  SVGSVGElement,
  Tally2Props
>(function Tally2(
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
          d="M4 4V20M9 4V20"
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
          d="M4 4V20M9 4V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Tally2 doesn't support ${type}`);
  return null;
});

Tally2.displayName = "Tally2";

Tally2.metadata = {
  name: "Tally2",
  category: "stroke/mathematics",
  tags: ["tally", "icon"],
  description: "Tally2 icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tally2;
