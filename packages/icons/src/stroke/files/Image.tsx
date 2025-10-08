import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Image: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Image(
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
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.105 11 11 10.105 11 9 11 7.895 10.105 7 9 7 7.895 7 7 7.895 7 9 7 10.105 7.895 11 9 11ZM21 15 17.914 11.914C17.539 11.539 17.03 11.328 16.5 11.328 15.97 11.328 15.461 11.539 15.086 11.914L6 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Image.displayName = "Image";

Image.metadata = {
  name: "Image",
  category: "stroke/files",
  tags: ["image", "icon"],
  description: "Image icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Image;
