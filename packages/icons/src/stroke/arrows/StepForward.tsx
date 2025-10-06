import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const StepForward: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function StepForward(
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
        d="M10.029 4.285C9.726 4.103 9.379 4.005 9.025 4 8.671 3.996 8.323 4.085 8.015 4.26 7.707 4.434 7.45 4.687 7.272 4.993 7.094 5.298 7 5.646 7 6V18C7 18.354 7.094 18.702 7.272 19.007 7.45 19.313 7.707 19.566 8.015 19.74 8.323 19.915 8.671 20.004 9.025 20 9.379 19.995 9.726 19.897 10.029 19.715L20.026 13.717C20.323 13.54 20.569 13.289 20.739 12.988 20.91 12.687 21 12.348 21 12.002 21.001 11.656 20.911 11.316 20.741 11.015 20.571 10.715 20.326 10.463 20.029 10.285L10.029 4.285ZM3 4V20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

StepForward.displayName = "StepForward";

StepForward.metadata = {
  name: "StepForward",
  category: "stroke/arrows",
  tags: ["step", "forward", "icon"],
  description: "StepForward icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default StepForward;
