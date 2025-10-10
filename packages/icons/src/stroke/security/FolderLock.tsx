import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FolderLockProps extends IconProps {
  type?: "stroke";
}

export const FolderLock: IconComponent<FolderLockProps> = React.forwardRef<
  SVGSVGElement,
  FolderLockProps
>(function FolderLock(
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
          d="M21 17H15C14.448 17 14 17.448 14 18V21C14 21.552 14.448 22 15 22H21C21.552 22 22 21.552 22 21V18C22 17.448 21.552 17 21 17ZM10 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H7.9C8.234 2.997 8.564 3.077 8.86 3.235 9.155 3.392 9.406 3.621 9.59 3.9L10.4 5.1C10.582 5.377 10.83 5.603 11.122 5.761 11.413 5.918 11.739 6 12.07 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V10.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 17V15C20 14.4696 19.7893 13.9609 19.4142 13.5858C19.0391 13.2107 18.5304 13 18 13C17.4696 13 16.9609 13.2107 16.5858 13.5858C16.2107 13.9609 16 14.4696 16 15V17"
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
          d="M21 17H15C14.448 17 14 17.448 14 18V21C14 21.552 14.448 22 15 22H21C21.552 22 22 21.552 22 21V18C22 17.448 21.552 17 21 17ZM10 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H7.9C8.234 2.997 8.564 3.077 8.86 3.235 9.155 3.392 9.406 3.621 9.59 3.9L10.4 5.1C10.582 5.377 10.83 5.603 11.122 5.761 11.413 5.918 11.739 6 12.07 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V10.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 17V15C20 14.4696 19.7893 13.9609 19.4142 13.5858C19.0391 13.2107 18.5304 13 18 13C17.4696 13 16.9609 13.2107 16.5858 13.5858C16.2107 13.9609 16 14.4696 16 15V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FolderLock doesn't support ${type}`);
  return null;
});

FolderLock.displayName = "FolderLock";

FolderLock.metadata = {
  name: "FolderLock",
  category: "stroke/security",
  tags: ["folder", "lock", "icon"],
  description: "FolderLock icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderLock;
