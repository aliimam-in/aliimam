import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SpellCheck2Props extends IconProps {
  type?: "stroke";
}

export const SpellCheck2: IconComponent<SpellCheck2Props> = React.forwardRef<
  SVGSVGElement,
  SpellCheck2Props
>(function SpellCheck2(
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
          d="M6 16 12 4 18 16M8 12H16M4 21C5.1 21 5.1 20 6.3 20 7.5 20 7.4 21 8.6 21 9.7 21 9.7 20 10.9 20 12 20 12 21 13.2 21 14.3 21 14.3 20 15.5 20 16.6 20 16.6 21 17.8 21 18.9 21 18.9 20 20.1 20"
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
          d="M6 16 12 4 18 16M8 12H16M4 21C5.1 21 5.1 20 6.3 20 7.5 20 7.4 21 8.6 21 9.7 21 9.7 20 10.9 20 12 20 12 21 13.2 21 14.3 21 14.3 20 15.5 20 16.6 20 16.6 21 17.8 21 18.9 21 18.9 20 20.1 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SpellCheck2 doesn't support ${type}`);
  return null;
});

SpellCheck2.displayName = "SpellCheck2";

SpellCheck2.metadata = {
  name: "SpellCheck2",
  category: "stroke/textFormatting",
  tags: ["spell", "check", "icon"],
  description: "SpellCheck2 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SpellCheck2;
