import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowLeft(
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
        d="M12 19 5 12 12 5M19 12H5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowLeft.displayName = "ArrowLeft";

ArrowLeft.metadata = {
  name: "ArrowLeft",
  category: "stroke/arrows",
  tags: ["arrow", "left", "icon"],
  description: "ArrowLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowLeft;
