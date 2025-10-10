import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Drama: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Drama(
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
          d="M10 11H10.01M14 6H14.01M18 6H18.01M6.5 13.1H6.51M22 5C22 14 18 17 16 17 14 17 10 14 10 5 10 3 12 2 16 2 20 2 22 3 22 5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.4 9.9C16.6 10.7 15.4 10.7 14.6 9.9M10.1 7.1C9 7.2 7.7 7.7 6 8.6 2.5 10.6 1.3 12.5 2.3 14.2 6.8 22 11.8 22.6 13.5 21.6 14.4 21.1 15.4 19.5 15.4 16.9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.1001 16.5C9.4001 15.4 10.5001 14.8 11.5001 15.1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Drama.displayName = "Drama";

Drama.metadata = {
  name: "Drama",
  category: "stroke/multimedia",
  tags: ["drama", "icon"],
  description: "Drama icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Drama;
