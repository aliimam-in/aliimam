import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileScan: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileScan(
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
        d="M20 10V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M16 14C15.47 14 14.961 14.211 14.586 14.586 14.211 14.961 14 15.47 14 16M20 14C20.53 14 21.039 14.211 21.414 14.586 21.789 14.961 22 15.47 22 16M20 22C20.53 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.53 22 20M16 22C15.47 22 14.961 21.789 14.586 21.414 14.211 21.039 14 20.53 14 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileScan.displayName = "FileScan";

FileScan.metadata = {
  name: "FileScan",
  category: "stroke/files",
  tags: ["file", "scan", "icon"],
  description: "FileScan icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileScan;
