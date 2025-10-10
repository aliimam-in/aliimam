import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Thermometer: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Thermometer(
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
        d="M14 4V14.54C14.7626 14.9803 15.3586 15.6599 15.6955 16.4734C16.0325 17.2869 16.0916 18.1888 15.8637 19.0394C15.6358 19.8899 15.1336 20.6415 14.435 21.1775C13.7365 21.7136 12.8805 22.0041 12 22.0041C11.1195 22.0041 10.2635 21.7136 9.56496 21.1775C8.86638 20.6415 8.3642 19.8899 8.1363 19.0394C7.9084 18.1888 7.96752 17.2869 8.30448 16.4734C8.64145 15.6599 9.23743 14.9803 10 14.54V4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Thermometer.displayName = "Thermometer";

Thermometer.metadata = {
  name: "Thermometer",
  category: "stroke/weather",
  tags: ["thermometer", "icon"],
  description: "Thermometer icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Thermometer;
