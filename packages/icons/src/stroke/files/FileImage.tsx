import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileImage: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileImage(
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
        d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M10 14C11.105 14 12 13.105 12 12 12 10.895 11.105 10 10 10 8.895 10 8 10.895 8 12 8 13.105 8.895 14 10 14ZM20 17 18.704 15.704C18.252 15.252 17.639 14.998 17 14.998 16.361 14.998 15.748 15.252 15.296 15.704L9 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileImage.displayName = "FileImage";

FileImage.metadata = {
  name: "FileImage",
  category: "stroke/files",
  tags: ["file", "image", "icon"],
  description: "FileImage icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileImage;
