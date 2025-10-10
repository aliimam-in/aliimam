import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowDownFromLineProps extends IconProps {
  type?: "stroke";
}

export const ArrowDownFromLine: IconComponent<ArrowDownFromLineProps> =
  React.forwardRef<SVGSVGElement, ArrowDownFromLineProps>(
    function ArrowDownFromLine(
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
              d="M19 3H5M12 21V7M6 15 12 21 18 15"
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
              d="M19 3H5M12 21V7M6 15 12 21 18 15"
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
              d="M19 3H5M12 21V7M6 15 12 21 18 15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowDownFromLine doesn't support ${type}`);
      return null;
    },
  );

ArrowDownFromLine.displayName = "ArrowDownFromLine";

ArrowDownFromLine.metadata = {
  name: "ArrowDownFromLine",
  category: "stroke/navigation",
  tags: ["arrow", "down", "from", "line", "icon"],
  description: "ArrowDownFromLine icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownFromLine;
