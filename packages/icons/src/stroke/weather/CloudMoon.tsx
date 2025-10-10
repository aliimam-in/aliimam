import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CloudMoon: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CloudMoon(
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
        d="M13 16C13.796 16 14.559 16.316 15.121 16.879 15.684 17.441 16 18.204 16 19 16 19.796 15.684 20.559 15.121 21.121 14.559 21.684 13.796 22 13 22H7C6.054 22 5.127 21.731 4.328 21.226 3.528 20.72 2.889 19.998 2.483 19.143 2.078 18.288 1.923 17.336 2.038 16.397 2.152 15.458 2.53 14.57 3.128 13.837 3.727 13.105 4.521 12.557 5.418 12.257 6.315 11.958 7.279 11.919 8.198 12.145 9.116 12.372 9.952 12.854 10.607 13.537 11.263 14.219 11.711 15.073 11.9 16H13ZM18.376 14.512C19.235 14.142 19.995 13.575 20.596 12.859 21.197 12.142 21.622 11.295 21.837 10.385 21.985 9.76 21.178 9.415 20.589 9.671 19.853 9.989 19.039 10.079 18.251 9.929 17.463 9.779 16.739 9.395 16.172 8.828 15.605 8.261 15.222 7.537 15.072 6.749 14.922 5.961 15.012 5.147 15.33 4.411 15.585 3.822 15.24 3.016 14.614 3.163 13.38 3.456 12.271 4.133 11.445 5.096 10.62 6.059 10.121 7.259 10.02 8.523"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CloudMoon.displayName = "CloudMoon";

CloudMoon.metadata = {
  name: "CloudMoon",
  category: "stroke/weather",
  tags: ["cloud", "moon", "icon"],
  description: "CloudMoon icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudMoon;
