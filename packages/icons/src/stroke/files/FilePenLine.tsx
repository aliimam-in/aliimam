import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FilePenLine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FilePenLine(
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
        d="M18 5L15.586 2.586C15.211 2.2109 14.7024 2.00011 14.172 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.378 12.626C21.776 12.228 22 11.687 22 11.124 22 10.561 21.776 10.02 21.378 9.622 20.98 9.224 20.439 9 19.876 9 19.313 9 18.772 9.224 18.374 9.622L14.364 13.634C14.126 13.872 13.952 14.165 13.858 14.488L13.021 17.358C12.996 17.444 12.994 17.535 13.017 17.622 13.039 17.709 13.084 17.788 13.148 17.852 13.211 17.915 13.29 17.96 13.377 17.982 13.464 18.005 13.555 18.003 13.641 17.978L16.511 17.141C16.834 17.047 17.127 16.873 17.365 16.635L21.378 12.626ZM8 18H9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FilePenLine.displayName = "FilePenLine";

FilePenLine.metadata = {
  name: "FilePenLine",
  category: "stroke/files",
  tags: ["file", "pen", "line", "icon"],
  description: "FilePenLine icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FilePenLine;
