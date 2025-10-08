import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UnfoldHorizontalProps extends IconProps {
  type?: "stroke";
}

export const UnfoldHorizontal: IconComponent<UnfoldHorizontalProps> =
  React.forwardRef<SVGSVGElement, UnfoldHorizontalProps>(
    function UnfoldHorizontal(
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
              d="M16 12H22M8 12H2M12 2V4M12 8V10M12 14V16M12 20V22M19 15 22 12 19 9M5 9 2 12 5 15"
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
              d="M16 12H22M8 12H2M12 2V4M12 8V10M12 14V16M12 20V22M19 15 22 12 19 9M5 9 2 12 5 15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`UnfoldHorizontal doesn't support ${type}`);
      return null;
    },
  );

UnfoldHorizontal.displayName = "UnfoldHorizontal";

UnfoldHorizontal.metadata = {
  name: "UnfoldHorizontal",
  category: "stroke/layout",
  tags: ["unfold", "horizontal", "icon"],
  description: "UnfoldHorizontal icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UnfoldHorizontal;
