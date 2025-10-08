import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderArchive: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderArchive(
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
        d="M15 21C16.1046 21 17 20.1046 17 19C17 17.8954 16.1046 17 15 17C13.8954 17 13 17.8954 13 19C13 20.1046 13.8954 21 15 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9 19.8C21.233 19.632 21.512 19.375 21.707 19.057 21.901 18.739 22.003 18.373 22 18V8C22 7.47 21.789 6.961 21.414 6.586 21.039 6.211 20.53 6 20 6H12.1C11.766 6.003 11.436 5.923 11.14 5.765 10.845 5.608 10.594 5.379 10.41 5.1L9.6 3.9C9.418 3.623 9.17 3.396 8.879 3.239 8.587 3.082 8.261 3 7.93 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V18C2 18.53 2.211 19.039 2.586 19.414 2.961 19.789 3.47 20 4 20H9.1M15 11V10M15 17V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderArchive.displayName = "FolderArchive";

FolderArchive.metadata = {
  name: "FolderArchive",
  category: "stroke/files",
  tags: ["folder", "archive", "icon"],
  description: "FolderArchive icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderArchive;
