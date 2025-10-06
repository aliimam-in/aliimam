import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Delete: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Delete(
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
          d="M10 5C9.503 5 9.024 5.185 8.656 5.519L2.328 11.259C2.225 11.353 2.142 11.467 2.086 11.595 2.029 11.722 2 11.86 2 12 2 12.139 2.029 12.277 2.086 12.404 2.142 12.532 2.225 12.646 2.328 12.74L8.656 18.481C9.024 18.815 9.503 19 10 19H20C20.53 19 21.039 18.789 21.414 18.414 21.789 18.039 22 17.53 22 17V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5H10ZM12 9 18 15M18 9 12 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Delete.displayName = "Delete";

Delete.metadata = {
  name: "Delete",
  category: "stroke/arrows",
  tags: ["delete", "icon"],
  description: "Delete icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Delete;
