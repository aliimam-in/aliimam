import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface VariableProps extends IconProps {
  type?: "stroke";
}

export const Variable: IconComponent<VariableProps> = React.forwardRef<
  SVGSVGElement,
  VariableProps
>(function Variable(
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
          d="M8 21C8 21 4 18 4 12 4 6 8 3 8 3M16 3C16 3 20 6 20 12 20 18 16 21 16 21M15 9 9 15M9 9 15 15"
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
          d="M8 21C8 21 4 18 4 12 4 6 8 3 8 3M16 3C16 3 20 6 20 12 20 18 16 21 16 21M15 9 9 15M9 9 15 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Variable doesn't support ${type}`);
  return null;
});

Variable.displayName = "Variable";

Variable.metadata = {
  name: "Variable",
  category: "stroke/mathematics",
  tags: ["variable", "icon"],
  description: "Variable icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Variable;
