import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowRightLeftProps extends IconProps {
  type?: "stroke";
}

export const ArrowRightLeft: IconComponent<ArrowRightLeftProps> =
  React.forwardRef<SVGSVGElement, ArrowRightLeftProps>(function ArrowRightLeft(
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
            d="M16 3 20 7 16 11M20 7H4M8 21 4 17 8 13M4 17H20"
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
            d="M16 3 20 7 16 11M20 7H4M8 21 4 17 8 13M4 17H20"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowRightLeft doesn't support ${type}`);
    return null;
  });

ArrowRightLeft.displayName = "ArrowRightLeft";

ArrowRightLeft.metadata = {
  name: "ArrowRightLeft",
  category: "stroke/navigation",
  tags: ["arrow", "right", "left", "icon"],
  description: "ArrowRightLeft icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowRightLeft;
