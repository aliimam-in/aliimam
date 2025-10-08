import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderClock: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderClock(
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
        d="M16 14V16.2L17.6 17.2M7 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H7.9C8.234 2.997 8.564 3.077 8.86 3.235 9.155 3.392 9.406 3.621 9.59 3.9L10.4 5.1C10.582 5.377 10.83 5.603 11.122 5.761 11.413 5.918 11.739 6 12.07 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderClock.displayName = "FolderClock";

FolderClock.metadata = {
  name: "FolderClock",
  category: "stroke/files",
  tags: ["folder", "clock", "icon"],
  description: "FolderClock icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderClock;
