import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ParkingMeter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ParkingMeter(
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
        d="M11 15H13M12 12V15M12 19V22M15.282 19C15.491 19 15.695 18.935 15.865 18.813 16.035 18.691 16.163 18.518 16.23 18.32L18.6 11.332C18.973 10.276 19.088 9.146 18.934 8.037 18.78 6.928 18.362 5.872 17.715 4.958 17.069 4.044 16.212 3.298 15.218 2.783 14.223 2.268 13.12 2 12 2 10.88 2 9.777 2.268 8.782 2.783 7.788 3.298 6.931 4.044 6.285 4.958 5.638 5.872 5.22 6.928 5.066 8.037 4.913 9.146 5.027 10.276 5.4 11.332L7.77 18.32C7.837 18.518 7.964 18.691 8.135 18.813 8.305 18.935 8.509 19 8.718 19H15.282Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9C9 8.20435 9.31607 7.44129 9.87868 6.87868C10.4413 6.31607 11.2044 6 12 6C12.7956 6 13.5587 6.31607 14.1213 6.87868C14.6839 7.44129 15 8.20435 15 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ParkingMeter.displayName = "ParkingMeter";

ParkingMeter.metadata = {
  name: "ParkingMeter",
  category: "stroke/navigation",
  tags: ["parking", "meter", "icon"],
  description: "ParkingMeter icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ParkingMeter;
