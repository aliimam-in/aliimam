import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FlipHorizontal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FlipHorizontal(
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
        d="M8 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 20.1 3.9 21 5 21H8M16 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H16M12 20V22M12 14V16M12 8V10M12 2V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FlipHorizontal.displayName = "FlipHorizontal";

FlipHorizontal.metadata = {
  name: "FlipHorizontal",
  category: "stroke/design",
  tags: ["flip", "horizontal", "icon"],
  description: "FlipHorizontal icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlipHorizontal;
