import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Malta: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Malta(
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
        viewBox="0 0 32 32"
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
          d="M27 28L15 28L15 4L27 4C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28Z"
          fill="#bf2c30"
        />
        <path
          d="M5 4H16V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z"
          fill="#fff"
        />
        <path
          d="M8.367 9.06798C8.366 9.05898 8.364 9.04998 8.363 9.04198C8.316 8.80098 8.109 8.61098 7.875 8.57698V7.00098H6.014V8.57698C6.005 8.57798 5.996 8.57998 5.988 8.58098C5.747 8.62798 5.557 8.83498 5.523 9.06898H3.947V10.93H5.523C5.524 10.939 5.526 10.948 5.527 10.956C5.574 11.197 5.781 11.387 6.015 11.421V12.997H7.876V11.421C7.885 11.42 7.894 11.418 7.902 11.417C8.143 11.37 8.333 11.163 8.367 10.929H9.943V9.06798H8.367Z"
          fill="#fff"
        />
        <path
          d="M8.125 13.247H5.764V11.606C5.576 11.521 5.422 11.368 5.337 11.179H3.696V8.818H5.338C5.422 8.63 5.575 8.476 5.764 8.391V6.75H8.125V8.391C8.313 8.476 8.467 8.629 8.552 8.818H10.193V11.179H8.552C8.468 11.367 8.314 11.522 8.125 11.606V13.247ZM6.264 12.747H7.625V11.209L7.834 11.174C7.986 11.145 8.101 11.025 8.12 10.892L8.151 10.678H9.692V9.317H8.143L8.119 9.099C8.09 8.955 7.971 8.842 7.838 8.822L7.625 8.791V7.249H6.264V8.787L6.055 8.822C5.904 8.851 5.789 8.971 5.77 9.104L5.739 9.318H4.197V10.679H5.722L5.766 10.875C5.798 11.04 5.917 11.154 6.051 11.174L6.264 11.205V12.747Z"
          fill="#bf2c30"
        />
      </svg>
    );
  },
);

Malta.displayName = "Malta";

Malta.metadata = {
  name: "Malta",
  category: "symbols/flags",
  tags: ["malta", "icon"],
  description: "Malta icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Malta;
