import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SpellCheckProps extends IconProps {
  type?: "stroke";
}

export const SpellCheck: IconComponent<SpellCheckProps> = React.forwardRef<
  SVGSVGElement,
  SpellCheckProps
>(function SpellCheck(
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
          d="M6 16 12 4 18 16M8 12H16M16 20 18 22 22 18"
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
          d="M6 16 12 4 18 16M8 12H16M16 20 18 22 22 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SpellCheck doesn't support ${type}`);
  return null;
});

SpellCheck.displayName = "SpellCheck";

SpellCheck.metadata = {
  name: "SpellCheck",
  category: "stroke/textFormatting",
  tags: ["spell", "check", "icon"],
  description: "SpellCheck icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SpellCheck;
