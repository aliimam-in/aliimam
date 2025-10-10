import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ChevronsRightProps extends IconProps {
  type?: "stroke";
}

export const ChevronsRight: IconComponent<ChevronsRightProps> =
  React.forwardRef<SVGSVGElement, ChevronsRightProps>(function ChevronsRight(
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
            d="M6 17 11 12 6 7M13 17 18 12 13 7"
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
            d="M6 17 11 12 6 7M13 17 18 12 13 7"
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
            d="M6 17 11 12 6 7M13 17 18 12 13 7"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ChevronsRight doesn't support ${type}`);
    return null;
  });

ChevronsRight.displayName = "ChevronsRight";

ChevronsRight.metadata = {
  name: "ChevronsRight",
  category: "stroke/navigation",
  tags: ["chevrons", "right", "icon"],
  description: "ChevronsRight icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsRight;
