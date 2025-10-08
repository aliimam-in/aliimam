import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Group: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Group(
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
          d="M3 7V5C3 3.9 3.9 3 5 3H7M17 3H19C20.1 3 21 3.9 21 5V7M21 17V19C21 20.1 20.1 21 19 21H17M7 21H5C3.9 21 3 20.1 3 19V17M13 7H8C7.448 7 7 7.448 7 8V11C7 11.552 7.448 12 8 12H13C13.552 12 14 11.552 14 11V8C14 7.448 13.552 7 13 7ZM16 12H11C10.448 12 10 12.448 10 13V16C10 16.552 10.448 17 11 17H16C16.552 17 17 16.552 17 16V13C17 12.448 16.552 12 16 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Group.displayName = "Group";

Group.metadata = {
  name: "Group",
  category: "stroke/files",
  tags: ["group", "icon"],
  description: "Group icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Group;
