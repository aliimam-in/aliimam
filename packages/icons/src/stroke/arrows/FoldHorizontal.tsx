import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FoldHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FoldHorizontal(
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
    ...props
  },
  forwardedRef,
) {
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
});

FoldHorizontal.displayName = "FoldHorizontal";

FoldHorizontal.metadata = {
  name: "FoldHorizontal",
  category: "stroke/arrows",
  tags: ["fold", "horizontal", "icon"],
  description: "FoldHorizontal icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FoldHorizontal;
