import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HardDriveDownload: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HardDriveDownload(
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
        d="M12 2V10M16 6 12 10 8 6M20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 18H6.01M10 18H10.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HardDriveDownload.displayName = "HardDriveDownload";

HardDriveDownload.metadata = {
  name: "HardDriveDownload",
  category: "stroke/arrows",
  tags: ["hard", "drive", "download", "icon"],
  description: "HardDriveDownload icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HardDriveDownload;
