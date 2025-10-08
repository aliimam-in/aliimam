import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileSymlink: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileSymlink(
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
        d="M10 18 13 15 10 12M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H15L20 7V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V17C4 16.4696 4.21071 15.9609 4.58579 15.5858C4.96086 15.2107 5.46957 15 6 15H13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileSymlink.displayName = "FileSymlink";

FileSymlink.metadata = {
  name: "FileSymlink",
  category: "stroke/files",
  tags: ["file", "symlink", "icon"],
  description: "FileSymlink icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileSymlink;
