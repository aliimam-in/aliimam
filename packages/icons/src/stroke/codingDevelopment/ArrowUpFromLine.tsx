import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpFromLineProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpFromLine: IconComponent<ArrowUpFromLineProps> =
  React.forwardRef<SVGSVGElement, ArrowUpFromLineProps>(
    function ArrowUpFromLine(
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
              d="M18 9 12 3 6 9M12 3V17M5 21H19"
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
              d="M18 9 12 3 6 9M12 3V17M5 21H19"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowUpFromLine doesn't support ${type}`);
      return null;
    },
  );

ArrowUpFromLine.displayName = "ArrowUpFromLine";

ArrowUpFromLine.metadata = {
  name: "ArrowUpFromLine",
  category: "stroke/codingDevelopment",
  tags: ["arrow", "up", "from", "line", "icon"],
  description: "ArrowUpFromLine icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpFromLine;
