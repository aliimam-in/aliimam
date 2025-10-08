import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileHeart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileHeart(
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
        d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M2.62 13.8C2.41 13.581 2.246 13.321 2.139 13.037 2.031 12.752 1.983 12.449 1.996 12.146 2.009 11.842 2.084 11.544 2.215 11.27 2.346 10.996 2.532 10.751 2.76 10.551 2.989 10.351 3.256 10.199 3.544 10.104 3.833 10.01 4.138 9.975 4.441 10.001 4.744 10.028 5.038 10.116 5.306 10.259 5.574 10.403 5.81 10.599 6 10.836 6.191 10.601 6.427 10.408 6.695 10.266 6.962 10.125 7.256 10.039 7.557 10.014 7.859 9.988 8.162 10.024 8.45 10.119 8.737 10.213 9.002 10.365 9.23 10.565 9.457 10.764 9.642 11.007 9.773 11.28 9.904 11.553 9.979 11.849 9.993 12.151 10.007 12.454 9.96 12.756 9.855 13.039 9.749 13.323 9.588 13.582 9.38 13.802L6.754 16.658C6.66 16.766 6.545 16.852 6.415 16.912 6.285 16.971 6.143 17.002 6 17.002 5.858 17.002 5.716 16.971 5.586 16.912 5.456 16.852 5.341 16.766 5.247 16.658L2.62 13.8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6.005V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H15L20 7V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.57874 22 5.16825 21.8669 4.82707 21.6198C4.48588 21.3727 4.23143 21.0242 4.1 20.624"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileHeart.displayName = "FileHeart";

FileHeart.metadata = {
  name: "FileHeart",
  category: "stroke/files",
  tags: ["file", "heart", "icon"],
  description: "FileHeart icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileHeart;
