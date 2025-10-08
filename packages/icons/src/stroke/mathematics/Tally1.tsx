import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Tally1Props extends IconProps {
  type?: "stroke";
}

export const Tally1: IconComponent<Tally1Props> = React.forwardRef<
  SVGSVGElement,
  Tally1Props
>(function Tally1(
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
          d="M4 4V20"
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
          d="M4 4V20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Tally1 doesn't support ${type}`);
  return null;
});

Tally1.displayName = "Tally1";

Tally1.metadata = {
  name: "Tally1",
  category: "stroke/mathematics",
  tags: ["tally", "icon"],
  description: "Tally1 icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tally1;
