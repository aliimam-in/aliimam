import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TrainFront: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TrainFront(
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
        d="M8 3.1V7C8 8.061 8.421 9.078 9.172 9.828 9.922 10.579 10.939 11 12 11 13.061 11 14.078 10.579 14.828 9.828 15.579 9.078 16 8.061 16 7V3.1M9 15 8 14M15 15 16 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 19C6.2 19 4 16.8 4 14V10C4 7.878 4.843 5.843 6.343 4.343 7.843 2.843 9.878 2 12 2 14.122 2 16.157 2.843 17.657 4.343 19.157 5.843 20 7.878 20 10V14C20 16.8 17.8 19 15 19H9ZM8 19 6 22M16 19 18 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TrainFront.displayName = "TrainFront";

TrainFront.metadata = {
  name: "TrainFront",
  category: "stroke/transportation",
  tags: ["train", "front", "icon"],
  description: "TrainFront icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrainFront;
