import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileLockProps extends IconProps {
  type?: "stroke";
}

export const FileLock: IconComponent<FileLockProps> = React.forwardRef<
  SVGSVGElement,
  FileLockProps
>(function FileLock(
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
          d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12H9C8.448 12 8 12.448 8 13V17C8 17.552 8.448 18 9 18H15C15.552 18 16 17.552 16 17V13C16 12.448 15.552 12 15 12ZM10 12V10C10 9.47 10.211 8.961 10.586 8.586 10.961 8.211 11.47 8 12 8 12.53 8 13.039 8.211 13.414 8.586 13.789 8.961 14 9.47 14 10V12"
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
          d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12H9C8.448 12 8 12.448 8 13V17C8 17.552 8.448 18 9 18H15C15.552 18 16 17.552 16 17V13C16 12.448 15.552 12 15 12ZM10 12V10C10 9.47 10.211 8.961 10.586 8.586 10.961 8.211 11.47 8 12 8 12.53 8 13.039 8.211 13.414 8.586 13.789 8.961 14 9.47 14 10V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileLock doesn't support ${type}`);
  return null;
});

FileLock.displayName = "FileLock";

FileLock.metadata = {
  name: "FileLock",
  category: "stroke/security",
  tags: ["file", "lock", "icon"],
  description: "FileLock icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileLock;
