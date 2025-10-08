import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CircleEllipsisProps extends IconProps {
  type?: "stroke";
}

export const CircleEllipsis: IconComponent<CircleEllipsisProps> =
  React.forwardRef<SVGSVGElement, CircleEllipsisProps>(function CircleEllipsis(
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
            d="M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22ZM17 12H17.01M12 12H12.01M7 12H7.01"
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
            d="M12 22C17.523 22 22 17.523 22 12 22 6.477 17.523 2 12 2 6.477 2 2 6.477 2 12 2 17.523 6.477 22 12 22ZM17 12H17.01M12 12H12.01M7 12H7.01"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`CircleEllipsis doesn't support ${type}`);
    return null;
  });

CircleEllipsis.displayName = "CircleEllipsis";

CircleEllipsis.metadata = {
  name: "CircleEllipsis",
  category: "stroke/layout",
  tags: ["circle", "ellipsis", "icon"],
  description: "CircleEllipsis icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleEllipsis;
