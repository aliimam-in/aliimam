import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileKey2Props extends IconProps {
  type?: "stroke";
}

export const FileKey2: IconComponent<FileKey2Props> = React.forwardRef<
  SVGSVGElement,
  FileKey2Props
>(function FileKey2(
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
          d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M4 18C5.105 18 6 17.105 6 16 6 14.895 5.105 14 4 14 2.895 14 2 14.895 2 16 2 17.105 2.895 18 4 18ZM10 10 5.5 14.5M9 11 10 12"
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
          d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M4 18C5.105 18 6 17.105 6 16 6 14.895 5.105 14 4 14 2.895 14 2 14.895 2 16 2 17.105 2.895 18 4 18ZM10 10 5.5 14.5M9 11 10 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileKey2 doesn't support ${type}`);
  return null;
});

FileKey2.displayName = "FileKey2";

FileKey2.metadata = {
  name: "FileKey2",
  category: "stroke/security",
  tags: ["file", "key", "icon"],
  description: "FileKey2 icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileKey2;
