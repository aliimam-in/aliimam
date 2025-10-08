import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UtilityPoleProps extends IconProps {
  type?: "stroke";
}

export const UtilityPole: IconComponent<UtilityPoleProps> = React.forwardRef<
  SVGSVGElement,
  UtilityPoleProps
>(function UtilityPole(
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
          d="M12 2V22M2 5H22M3 3V5M7 3V5M17 3V5M21 3V5M19 5 12 12 5 5"
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
          d="M12 2V22M2 5H22M3 3V5M7 3V5M17 3V5M21 3V5M19 5 12 12 5 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`UtilityPole doesn't support ${type}`);
  return null;
});

UtilityPole.displayName = "UtilityPole";

UtilityPole.metadata = {
  name: "UtilityPole",
  category: "stroke/home",
  tags: ["utility", "pole", "icon"],
  description: "UtilityPole icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UtilityPole;
