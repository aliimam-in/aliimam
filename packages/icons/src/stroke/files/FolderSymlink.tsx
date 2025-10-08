import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderSymlink: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderSymlink(
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
        d="M2 9.34997V4.99997C2 4.46954 2.21071 3.96083 2.58579 3.58576C2.96086 3.21069 3.46957 2.99997 4 2.99997H7.9C8.23449 2.99669 8.56445 3.07736 8.8597 3.23459C9.15495 3.39183 9.40604 3.6206 9.59 3.89997L10.4 5.09997C10.5821 5.3765 10.83 5.60349 11.1215 5.76058C11.413 5.91766 11.7389 5.99992 12.07 5.99997H20C20.5304 5.99997 21.0391 6.21069 21.4142 6.58576C21.7893 6.96083 22 7.46954 22 7.99997V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V15C2 14.4695 2.21071 13.9608 2.58579 13.5858C2.96086 13.2107 3.46957 13 4 13H11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 16L11 13L8 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderSymlink.displayName = "FolderSymlink";

FolderSymlink.metadata = {
  name: "FolderSymlink",
  category: "stroke/files",
  tags: ["folder", "symlink", "icon"],
  description: "FolderSymlink icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderSymlink;
