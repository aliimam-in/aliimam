import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Play: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Play(
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
          d="M5 5C4.9999 4.64809 5.09265 4.30239 5.26888 3.99779C5.44512 3.69319 5.69861 3.44049 6.00375 3.2652C6.30889 3.0899 6.65488 2.99822 7.00679 2.99942C7.3587 3.00061 7.70406 3.09464 8.008 3.272L20.005 10.27C20.3078 10.4457 20.5591 10.6977 20.7339 11.001C20.9088 11.3043 21.0009 11.6481 21.0012 11.9981C21.0015 12.3482 20.91 12.6922 20.7357 12.9957C20.5614 13.2993 20.3105 13.5518 20.008 13.728L8.008 20.728C7.70406 20.9054 7.3587 20.9994 7.00679 21.0006C6.65488 21.0018 6.30889 20.9101 6.00375 20.7348C5.69861 20.5595 5.44512 20.3068 5.26888 20.0022C5.09265 19.6976 4.9999 19.3519 5 19V5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Play.displayName = "Play";

Play.metadata = {
  name: "Play",
  category: "stroke/arrows",
  tags: ["play", "icon"],
  description: "Play icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Play;
