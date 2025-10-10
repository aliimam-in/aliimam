import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpFromDotProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpFromDot: IconComponent<ArrowUpFromDotProps> =
  React.forwardRef<SVGSVGElement, ArrowUpFromDotProps>(function ArrowUpFromDot(
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
            d="M5 9 12 2 19 9M12 16V2M12 22C12.552 22 13 21.552 13 21 13 20.448 12.552 20 12 20 11.448 20 11 20.448 11 21 11 21.552 11.448 22 12 22Z"
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
            d="M5 9 12 2 19 9M12 16V2M12 22C12.552 22 13 21.552 13 21 13 20.448 12.552 20 12 20 11.448 20 11 20.448 11 21 11 21.552 11.448 22 12 22Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowUpFromDot doesn't support ${type}`);
    return null;
  });

ArrowUpFromDot.displayName = "ArrowUpFromDot";

ArrowUpFromDot.metadata = {
  name: "ArrowUpFromDot",
  category: "stroke/navigation",
  tags: ["arrow", "up", "from", "dot", "icon"],
  description: "ArrowUpFromDot icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpFromDot;
