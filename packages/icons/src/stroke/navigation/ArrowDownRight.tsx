import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowDownRightProps extends IconProps {
  type?: "stroke";
}

export const ArrowDownRight: IconComponent<ArrowDownRightProps> =
  React.forwardRef<SVGSVGElement, ArrowDownRightProps>(function ArrowDownRight(
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
            d="M7 7 17 17M17 7V17H7"
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
            d="M7 7 17 17M17 7V17H7"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowDownRight doesn't support ${type}`);
    return null;
  });

ArrowDownRight.displayName = "ArrowDownRight";

ArrowDownRight.metadata = {
  name: "ArrowDownRight",
  category: "stroke/navigation",
  tags: ["arrow", "down", "right", "icon"],
  description: "ArrowDownRight icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownRight;
