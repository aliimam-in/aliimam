import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ExpandProps extends IconProps {
  type?: "stroke";
}

export const Expand: IconComponent<ExpandProps> = React.forwardRef<
  SVGSVGElement,
  ExpandProps
>(function Expand(
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
          d="M15 15 21 21M15 9 21 3M21 16V21H16M21 8V3H16M3 16V21H8M3 21 9 15M3 8V3H8M9 9 3 3"
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
          d="M15 15 21 21M15 9 21 3M21 16V21H16M21 8V3H16M3 16V21H8M3 21 9 15M3 8V3H8M9 9 3 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Expand doesn't support ${type}`);
  return null;
});

Expand.displayName = "Expand";

Expand.metadata = {
  name: "Expand",
  category: "stroke/textFormatting",
  tags: ["expand", "icon"],
  description: "Expand icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Expand;
