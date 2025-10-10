import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SwordProps extends IconProps {
  type?: "stroke";
}

export const Sword: IconComponent<SwordProps> = React.forwardRef<
  SVGSVGElement,
  SwordProps
>(function Sword(
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
          d="M14.5 17.5 3 6V3H6L17.5 14.5M13 19 19 13M16 16 20 20M19 21 21 19"
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
          d="M14.5 17.5 3 6V3H6L17.5 14.5M13 19 19 13M16 16 20 20M19 21 21 19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Sword doesn't support ${type}`);
  return null;
});

Sword.displayName = "Sword";

Sword.metadata = {
  name: "Sword",
  category: "stroke/tools",
  tags: ["sword", "icon"],
  description: "Sword icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sword;
