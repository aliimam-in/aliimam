import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileMusic: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileMusic(
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
        d="M10.5 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V12.4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18V10.3L16 9V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18C15.105 18 16 17.105 16 16 16 14.895 15.105 14 14 14 12.895 14 12 14.895 12 16 12 17.105 12.895 18 14 18ZM6 20C7.105 20 8 19.105 8 18 8 16.895 7.105 16 6 16 4.895 16 4 16.895 4 18 4 19.105 4.895 20 6 20Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileMusic.displayName = "FileMusic";

FileMusic.metadata = {
  name: "FileMusic",
  category: "stroke/files",
  tags: ["file", "music", "icon"],
  description: "FileMusic icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileMusic;
