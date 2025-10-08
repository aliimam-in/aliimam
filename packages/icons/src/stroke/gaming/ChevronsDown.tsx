import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ChevronsDownProps extends IconProps {
  type?: "stroke";
}

export const ChevronsDown: IconComponent<ChevronsDownProps> = React.forwardRef<
  SVGSVGElement,
  ChevronsDownProps
>(function ChevronsDown(
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
          d="M7 6 12 11 17 6M7 13 12 18 17 13"
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
          d="M7 6 12 11 17 6M7 13 12 18 17 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ChevronsDown doesn't support ${type}`);
  return null;
});

ChevronsDown.displayName = "ChevronsDown";

ChevronsDown.metadata = {
  name: "ChevronsDown",
  category: "stroke/gaming",
  tags: ["chevrons", "down", "icon"],
  description: "ChevronsDown icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsDown;
