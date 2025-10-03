import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Turtle: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Turtle(
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
          d="M12 10 14 14V17C14 17.265 14.105 17.52 14.293 17.707 14.48 17.895 14.735 18 15 18H17C17.265 18 17.52 17.895 17.707 17.707 17.895 17.52 18 17.265 18 17V14C18 11.878 17.157 9.843 15.657 8.343 14.157 6.843 12.122 6 10 6 7.878 6 5.843 6.843 4.343 8.343 2.843 9.843 2 11.878 2 14V17C2 17.265 2.105 17.52 2.293 17.707 2.48 17.895 2.735 18 3 18H5C5.265 18 5.52 17.895 5.707 17.707 5.895 17.52 6 17.265 6 17V14L8 10H12ZM4.82 7.9 8 10M15.18 7.9 12 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.93 10H20C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12C22 12.5304 21.7893 13.0391 21.4142 13.4142C21.0391 13.7893 20.5304 14 20 14H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Turtle.displayName = "Turtle";

Turtle.metadata = {
  name: "Turtle",
  category: "stroke/animals",
  tags: ["turtle", "icon"],
  description: "Turtle icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Turtle;
