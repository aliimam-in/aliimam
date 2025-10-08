import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FilePen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FilePen(
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
        d="M12.5 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V13.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M13.378 15.626C13.575 15.429 13.732 15.195 13.839 14.937 13.945 14.679 14 14.403 14 14.124 14 13.845 13.945 13.569 13.839 13.311 13.732 13.053 13.575 12.819 13.378 12.622 13.181 12.425 12.947 12.268 12.689 12.162 12.431 12.055 12.155 12 11.876 12 11.597 12 11.321 12.055 11.063 12.162 10.805 12.268 10.571 12.425 10.374 12.622L5.364 17.634C5.126 17.872 4.952 18.165 4.858 18.488L4.021 21.358C3.996 21.444 3.994 21.535 4.017 21.622 4.039 21.709 4.084 21.788 4.147 21.852 4.211 21.915 4.29 21.96 4.377 21.982 4.464 22.005 4.555 22.003 4.641 21.978L7.511 21.141C7.834 21.047 8.127 20.873 8.365 20.635L13.378 15.626Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FilePen.displayName = "FilePen";

FilePen.metadata = {
  name: "FilePen",
  category: "stroke/files",
  tags: ["file", "pen", "icon"],
  description: "FilePen icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FilePen;
