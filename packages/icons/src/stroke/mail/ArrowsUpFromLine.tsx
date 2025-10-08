import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowsUpFromLineProps extends IconProps {
  type?: "stroke";
}

export const ArrowsUpFromLine: IconComponent<ArrowsUpFromLineProps> =
  React.forwardRef<SVGSVGElement, ArrowsUpFromLineProps>(
    function ArrowsUpFromLine(
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
              d="M4 6 7 3 10 6M7 17V3M14 6 17 3 20 6M17 17V3M4 21H20"
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
              d="M4 6 7 3 10 6M7 17V3M14 6 17 3 20 6M17 17V3M4 21H20"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowsUpFromLine doesn't support ${type}`);
      return null;
    },
  );

ArrowsUpFromLine.displayName = "ArrowsUpFromLine";

ArrowsUpFromLine.metadata = {
  name: "ArrowsUpFromLine",
  category: "stroke/mail",
  tags: ["arrows", "up", "from", "line", "icon"],
  description: "ArrowsUpFromLine icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowsUpFromLine;
