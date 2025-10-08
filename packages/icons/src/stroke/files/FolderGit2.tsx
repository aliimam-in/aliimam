import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderGit2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderGit2(
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
        d="M9 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V4.99997C2 4.46954 2.21071 3.96083 2.58579 3.58576C2.96086 3.21069 3.46957 2.99997 4 2.99997H7.9C8.23449 2.99669 8.56445 3.07736 8.8597 3.23459C9.15495 3.39183 9.40604 3.6206 9.59 3.89997L10.4 5.09997C10.5821 5.3765 10.83 5.60349 11.1215 5.76058C11.413 5.91766 11.7389 5.99992 12.07 5.99997H20C20.5304 5.99997 21.0391 6.21069 21.4142 6.58576C21.7893 6.96083 22 7.46954 22 7.99997V13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 14C14.105 14 15 13.105 15 12 15 10.895 14.105 10 13 10 11.895 10 11 10.895 11 12 11 13.105 11.895 14 13 14ZM18 19C15.2 19 13 16.8 13 14V22M20 21C21.105 21 22 20.105 22 19 22 17.895 21.105 17 20 17 18.895 17 18 17.895 18 19 18 20.105 18.895 21 20 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderGit2.displayName = "FolderGit2";

FolderGit2.metadata = {
  name: "FolderGit2",
  category: "stroke/files",
  tags: ["folder", "git", "icon"],
  description: "FolderGit2 icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderGit2;
