import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleParkingOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleParkingOff(
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
        d="M12.656 7H13C13.42 7 13.835 7.088 14.219 7.259 14.602 7.429 14.946 7.679 15.227 7.99 15.508 8.302 15.721 8.669 15.851 9.068 15.982 9.467 16.027 9.889 15.984 10.307M13 13H9M19.071 19.071C17.196 20.946 14.652 22 12 22 9.348 22 6.805 20.946 4.93 19.071 3.055 17.196 2.001 14.652 2.001 12.001 2.001 9.349 3.055 6.805 4.93 4.93M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.357 2.687C10.167 1.979 12.145 1.814 14.048 2.212 15.951 2.61 17.697 3.554 19.071 4.929 20.446 6.303 21.39 8.049 21.788 9.952 22.186 11.855 22.021 13.833 21.313 15.643M9 17V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleParkingOff.displayName = "CircleParkingOff";

CircleParkingOff.metadata = {
  name: "CircleParkingOff",
  category: "stroke/navigation",
  tags: ["circle", "parking", "off", "icon"],
  description: "CircleParkingOff icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleParkingOff;
