import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CloudRainWind: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CloudRainWind(
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
        d="M4 14.899C3.257 14.14 2.696 13.222 2.361 12.214 2.025 11.206 1.924 10.135 2.063 9.082 2.203 8.029 2.58 7.022 3.167 6.137 3.754 5.251 4.534 4.511 5.449 3.972 6.364 3.432 7.39 3.109 8.449 3.025 9.508 2.941 10.572 3.099 11.561 3.487 12.549 3.875 13.437 4.483 14.156 5.265 14.875 6.047 15.406 6.982 15.71 8H17.5C18.465 8 19.405 8.31 20.181 8.885 20.956 9.461 21.526 10.27 21.807 11.194 22.087 12.118 22.063 13.107 21.737 14.016 21.412 14.925 20.803 15.706 20 16.242M9.2 22 12.2 15M9 13 6 20M17 13 14 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CloudRainWind.displayName = "CloudRainWind";

CloudRainWind.metadata = {
  name: "CloudRainWind",
  category: "stroke/weather",
  tags: ["cloud", "rain", "wind", "icon"],
  description: "CloudRainWind icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudRainWind;
