import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowBigLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowBigLeft(
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
        d="M13 9C12.7348 9 12.4804 8.89464 12.2929 8.7071C12.1053 8.51957 12 8.26521 12 8V5.061C12.0442 4.83453 12.0087 4.59975 11.8995 4.39646C11.7904 4.19316 11.6143 4.03387 11.4011 3.94559C11.1879 3.8573 10.9508 3.84545 10.7298 3.91205C10.5089 3.97865 10.3178 4.1196 10.189 4.311L3.35397 11.147C3.24188 11.2591 3.15297 11.3921 3.09231 11.5386C3.03165 11.685 3.00043 11.842 3.00043 12.0005C3.00043 12.159 3.03165 12.316 3.09231 12.4624C3.15297 12.6089 3.24188 12.7419 3.35397 12.854L10.189 19.689C10.3178 19.8804 10.5089 20.0213 10.7298 20.0879C10.9508 20.1545 11.1879 20.1427 11.4011 20.0544C11.6143 19.9661 11.7904 19.8068 11.8995 19.6035C12.0087 19.4002 12.0442 19.1655 12 18.939V16C12 15.7348 12.1053 15.4804 12.2929 15.2929C12.4804 15.1054 12.7348 15 13 15H19C19.2652 15 19.5195 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5195 9.10535 19.2652 9 19 9H13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowBigLeft.displayName = "ArrowBigLeft";

ArrowBigLeft.metadata = {
  name: "ArrowBigLeft",
  category: "stroke/arrows",
  tags: ["arrow", "big", "left", "icon"],
  description: "ArrowBigLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigLeft;
