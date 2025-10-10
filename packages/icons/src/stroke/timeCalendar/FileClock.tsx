import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileClockProps extends IconProps {
  type?: "stroke";
}

export const FileClock: IconComponent<FileClockProps> = React.forwardRef<
  SVGSVGElement,
  FileClockProps
>(function FileClock(
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
          d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22H18C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V7L15 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V7M8 14V16.2L9.6 17.2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 22C11.3137 22 14 19.3137 14 16C14 12.6863 11.3137 10 8 10C4.68629 10 2 12.6863 2 16C2 19.3137 4.68629 22 8 22Z"
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
          d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 22H18C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V7L15 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V7M8 14V16.2L9.6 17.2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 22C11.3137 22 14 19.3137 14 16C14 12.6863 11.3137 10 8 10C4.68629 10 2 12.6863 2 16C2 19.3137 4.68629 22 8 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileClock doesn't support ${type}`);
  return null;
});

FileClock.displayName = "FileClock";

FileClock.metadata = {
  name: "FileClock",
  category: "stroke/timeCalendar",
  tags: ["file", "clock", "icon"],
  description: "FileClock icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileClock;
