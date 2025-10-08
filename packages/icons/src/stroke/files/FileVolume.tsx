import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileVolume: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileVolume(
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
        d="M11 11C11.649 11.866 12 12.918 12 14 12 15.082 11.649 16.135 11 17M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6.765V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H15L20 7V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.67594 21.9998 5.35679 21.9209 5.07 21.77"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.51C7.00017 10.4142 6.97284 10.3204 6.92124 10.2397C6.86965 10.1591 6.79597 10.0949 6.70897 10.0549C6.62197 10.0148 6.5253 10.0006 6.43047 10.014C6.33563 10.0273 6.24661 10.0675 6.174 10.13L4.281 11.758C4.09988 11.9138 3.86894 11.9997 3.63 12H2.5C2.36739 12 2.24021 12.0527 2.14645 12.1464C2.05268 12.2402 2 12.3674 2 12.5V15.5C2 15.6326 2.05268 15.7598 2.14645 15.8535C2.24021 15.9473 2.36739 16 2.5 16H3.629C3.86829 16 4.09962 16.0859 4.281 16.242L6.174 17.872C6.24661 17.9344 6.33563 17.9747 6.43047 17.988C6.5253 18.0013 6.62197 17.9871 6.70897 17.9471C6.79597 17.9071 6.86965 17.8429 6.92124 17.7622C6.97284 17.6816 7.00017 17.5878 7 17.492V10.51Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileVolume.displayName = "FileVolume";

FileVolume.metadata = {
  name: "FileVolume",
  category: "stroke/files",
  tags: ["file", "volume", "icon"],
  description: "FileVolume icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileVolume;
