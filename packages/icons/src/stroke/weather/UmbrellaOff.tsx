import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UmbrellaOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UmbrellaOff(
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
        d="M12 13V20C12 20.53 12.211 21.039 12.586 21.414 12.961 21.789 13.47 22 14 22 14.53 22 15.039 21.789 15.414 21.414 15.789 21.039 16 20.53 16 20M12 2V4M18.656 13H20.992C21.148 13.001 21.301 12.966 21.441 12.898 21.58 12.829 21.702 12.729 21.796 12.606 21.89 12.482 21.954 12.338 21.983 12.186 22.012 12.033 22.005 11.875 21.962 11.726 21.304 9.161 19.682 6.949 17.434 5.55 15.185 4.151 12.484 3.673 9.892 4.216M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.96076 5.95703C4.02098 7.36412 2.63372 9.40468 2.03876 11.726C1.99638 11.8748 1.98908 12.0313 2.01743 12.1833C2.04578 12.3354 2.10901 12.4788 2.20215 12.6022C2.29528 12.7257 2.41578 12.8259 2.55418 12.8949C2.69258 12.9639 2.8451 12.9999 2.99976 13H12.9998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UmbrellaOff.displayName = "UmbrellaOff";

UmbrellaOff.metadata = {
  name: "UmbrellaOff",
  category: "stroke/weather",
  tags: ["umbrella", "off", "icon"],
  description: "UmbrellaOff icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UmbrellaOff;
