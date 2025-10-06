import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ZapOff: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function ZapOff(
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
          d="M10.513 4.856 13.12 2.17C13.194 2.084 13.295 2.026 13.407 2.006 13.518 1.985 13.634 2.003 13.734 2.057 13.834 2.11 13.913 2.196 13.957 2.3 14.002 2.404 14.01 2.521 13.98 2.63L12.603 6.947M15.656 10H20C20.189 9.999 20.375 10.052 20.535 10.153 20.695 10.254 20.824 10.398 20.906 10.568 20.987 10.739 21.019 10.929 20.997 11.117 20.974 11.305 20.899 11.483 20.78 11.63L19.06 13.403M16.273 16.273 10.88 21.83C10.806 21.916 10.705 21.974 10.593 21.994 10.482 22.015 10.366 21.997 10.266 21.944 10.166 21.89 10.087 21.804 10.043 21.7 9.998 21.596 9.99 21.479 10.02 21.37L11.94 15.35C11.997 15.199 12.016 15.036 11.995 14.875 11.975 14.715 11.916 14.561 11.824 14.429 11.732 14.296 11.608 14.188 11.465 14.113 11.321 14.038 11.162 14 11 14H4C3.811 14.001 3.625 13.948 3.465 13.847 3.305 13.746 3.176 13.602 3.095 13.432 3.013 13.261 2.981 13.071 3.003 12.883 3.026 12.695 3.101 12.517 3.22 12.37L7.727 7.727M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

ZapOff.displayName = "ZapOff";

ZapOff.metadata = {
  name: "ZapOff",
  category: "stroke/connectivity",
  tags: ["zap", "off", "icon"],
  description: "ZapOff icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ZapOff;
