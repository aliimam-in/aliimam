import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LocateOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LocateOff(
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
        d="M12 19V22M12 2V5M18.89 13.24C19.09 12.128 19.019 10.985 18.681 9.906 18.343 8.828 17.749 7.848 16.951 7.049 16.152 6.251 15.172 5.657 14.094 5.319 13.016 4.982 11.872 4.91 10.76 5.11M19 12H22M2 12H5M2 2 22 22M7.05 7.05C5.737 8.363 5 10.143 5 12 5 13.857 5.737 15.637 7.05 16.95 8.363 18.263 10.144 19 12 19 13.857 19 15.637 18.263 16.95 16.95"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LocateOff.displayName = "LocateOff";

LocateOff.metadata = {
  name: "LocateOff",
  category: "stroke/navigation",
  tags: ["locate", "off", "icon"],
  description: "LocateOff icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LocateOff;
