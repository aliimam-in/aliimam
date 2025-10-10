import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TrainTrackProps extends IconProps {
  type?: "stroke";
}

export const TrainTrack: IconComponent<TrainTrackProps> = React.forwardRef<
  SVGSVGElement,
  TrainTrackProps
>(function TrainTrack(
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
          d="M2 17 17 2M2 14 10 22M5 11 13 19M8 8 16 16M11 5 19 13M14 2 22 10M7 22 22 7"
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
          d="M2 17 17 2M2 14 10 22M5 11 13 19M8 8 16 16M11 5 19 13M14 2 22 10M7 22 22 7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`TrainTrack doesn't support ${type}`);
  return null;
});

TrainTrack.displayName = "TrainTrack";

TrainTrack.metadata = {
  name: "TrainTrack",
  category: "stroke/transportation",
  tags: ["train", "track", "icon"],
  description: "TrainTrack icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrainTrack;
