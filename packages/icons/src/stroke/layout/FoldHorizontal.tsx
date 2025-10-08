import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FoldHorizontalProps extends IconProps {
  type?: "stroke";
}

export const FoldHorizontal: IconComponent<FoldHorizontalProps> =
  React.forwardRef<SVGSVGElement, FoldHorizontalProps>(function FoldHorizontal(
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
            d="M2 12H8M22 12H16M12 2V4M12 8V10M12 14V16M12 20V22M19 9 16 12 19 15M5 15 8 12 5 9"
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
            d="M2 12H8M22 12H16M12 2V4M12 8V10M12 14V16M12 20V22M19 9 16 12 19 15M5 15 8 12 5 9"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`FoldHorizontal doesn't support ${type}`);
    return null;
  });

FoldHorizontal.displayName = "FoldHorizontal";

FoldHorizontal.metadata = {
  name: "FoldHorizontal",
  category: "stroke/layout",
  tags: ["fold", "horizontal", "icon"],
  description: "FoldHorizontal icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FoldHorizontal;
