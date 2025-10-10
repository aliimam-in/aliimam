import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileLock2Props extends IconProps {
  type?: "stroke";
}

export const FileLock2: IconComponent<FileLock2Props> = React.forwardRef<
  SVGSVGElement,
  FileLock2Props
>(function FileLock2(
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
          d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M9 13H3C2.448 13 2 13.448 2 14V17C2 17.552 2.448 18 3 18H9C9.552 18 10 17.552 10 17V14C10 13.448 9.552 13 9 13ZM8 13V11C8 10.47 7.789 9.961 7.414 9.586 7.039 9.211 6.53 9 6 9 5.47 9 4.961 9.211 4.586 9.586 4.211 9.961 4 10.47 4 11V13"
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
          d="M4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M9 13H3C2.448 13 2 13.448 2 14V17C2 17.552 2.448 18 3 18H9C9.552 18 10 17.552 10 17V14C10 13.448 9.552 13 9 13ZM8 13V11C8 10.47 7.789 9.961 7.414 9.586 7.039 9.211 6.53 9 6 9 5.47 9 4.961 9.211 4.586 9.586 4.211 9.961 4 10.47 4 11V13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileLock2 doesn't support ${type}`);
  return null;
});

FileLock2.displayName = "FileLock2";

FileLock2.metadata = {
  name: "FileLock2",
  category: "stroke/security",
  tags: ["file", "lock", "icon"],
  description: "FileLock2 icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileLock2;
