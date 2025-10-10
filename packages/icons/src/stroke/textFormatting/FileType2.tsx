import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileType2Props extends IconProps {
  type?: "stroke";
}

export const FileType2: IconComponent<FileType2Props> = React.forwardRef<
  SVGSVGElement,
  FileType2Props
>(function FileType2(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M2 13V12H8V13M5 12V18M4 18H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M2 13V12H8V13M5 12V18M4 18H6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileType2 doesn't support ${type}`);
  return null;
});

FileType2.displayName = "FileType2";

FileType2.metadata = {
  name: "FileType2",
  category: "stroke/textFormatting",
  tags: ["file", "type", "icon"],
  description: "FileType2 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileType2;
