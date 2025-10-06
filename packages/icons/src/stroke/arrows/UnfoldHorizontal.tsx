import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UnfoldHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UnfoldHorizontal(
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
        d="M16 12H22M8 12H2M12 2V4M12 8V10M12 14V16M12 20V22M19 15 22 12 19 9M5 9 2 12 5 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UnfoldHorizontal.displayName = "UnfoldHorizontal";

UnfoldHorizontal.metadata = {
  name: "UnfoldHorizontal",
  category: "stroke/arrows",
  tags: ["unfold", "horizontal", "icon"],
  description: "UnfoldHorizontal icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UnfoldHorizontal;
