import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowDownToDotProps extends IconProps {
  type?: "stroke";
}

export const ArrowDownToDot: IconComponent<ArrowDownToDotProps> =
  React.forwardRef<SVGSVGElement, ArrowDownToDotProps>(function ArrowDownToDot(
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
            d="M12 2V16M19 9 12 16 5 9M12 22C12.552 22 13 21.552 13 21 13 20.448 12.552 20 12 20 11.448 20 11 20.448 11 21 11 21.552 11.448 22 12 22Z"
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
            d="M12 2V16M19 9 12 16 5 9M12 22C12.552 22 13 21.552 13 21 13 20.448 12.552 20 12 20 11.448 20 11 20.448 11 21 11 21.552 11.448 22 12 22Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowDownToDot doesn't support ${type}`);
    return null;
  });

ArrowDownToDot.displayName = "ArrowDownToDot";

ArrowDownToDot.metadata = {
  name: "ArrowDownToDot",
  category: "stroke/navigation",
  tags: ["arrow", "down", "to", "dot", "icon"],
  description: "ArrowDownToDot icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownToDot;
