import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ParenthesesProps extends IconProps {
  type?: "stroke";
}

export const Parentheses: IconComponent<ParenthesesProps> = React.forwardRef<
  SVGSVGElement,
  ParenthesesProps
>(function Parentheses(
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
          d="M8 21C8 21 4 18 4 12 4 6 8 3 8 3M16 3C16 3 20 6 20 12 20 18 16 21 16 21"
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
          d="M8 21C8 21 4 18 4 12 4 6 8 3 8 3M16 3C16 3 20 6 20 12 20 18 16 21 16 21"
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
          d="M8 21C8 21 4 18 4 12 4 6 8 3 8 3M16 3C16 3 20 6 20 12 20 18 16 21 16 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Parentheses doesn't support ${type}`);
  return null;
});

Parentheses.displayName = "Parentheses";

Parentheses.metadata = {
  name: "Parentheses",
  category: "stroke/mathematics",
  tags: ["parentheses", "icon"],
  description: "Parentheses icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Parentheses;
