import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Front: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Front(
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
          d="M20.25 5.25H3.75C2.50736 5.25 1.5 6.25736 1.5 7.5V16.5C1.5 17.7426 2.50736 18.75 3.75 18.75H20.25C21.4926 18.75 22.5 17.7426 22.5 16.5V7.5C22.5 6.25736 21.4926 5.25 20.25 5.25Z"
          fill="#e6e6e6"
        />
        <path
          d="M7.125 8.25H4.875C4.25368 8.25 3.75 8.75368 3.75 9.375V10.875C3.75 11.4963 4.25368 12 4.875 12H7.125C7.74632 12 8.25 11.4963 8.25 10.875V9.375C8.25 8.75368 7.74632 8.25 7.125 8.25Z"
          fill="#edab40"
        />
        <path
          opacity=".15"
          d="M6.75 15H4.313C4.002 15 3.75 14.748 3.75 14.438 3.75 14.127 4.002 13.875 4.313 13.875H6.75C7.061 13.875 7.313 14.127 7.313 14.438 7.313 14.748 7.061 15 6.75 15ZM11.063 15H8.625C8.314 15 8.063 14.748 8.063 14.438 8.063 14.127 8.314 13.875 8.625 13.875H11.063C11.373 13.875 11.625 14.127 11.625 14.438 11.625 14.748 11.373 15 11.063 15ZM15.375 15H12.938C12.627 15 12.375 14.748 12.375 14.438 12.375 14.127 12.627 13.875 12.938 13.875H15.375C15.686 13.875 15.938 14.127 15.938 14.438 15.938 14.748 15.686 15 15.375 15ZM19.688 15H17.25C16.939 15 16.688 14.748 16.688 14.438 16.688 14.127 16.939 13.875 17.25 13.875H19.688C19.998 13.875 20.25 14.127 20.25 14.438 20.25 14.748 19.998 15 19.688 15Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Front.displayName = "Front";

Front.metadata = {
  name: "Front",
  category: "symbols/cards",
  tags: ["front", "icon"],
  description: "Front icon from symbols/cards category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Front;
