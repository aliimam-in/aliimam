import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Grip: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Grip(
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
          d="M12 6C12.552 6 13 5.552 13 5 13 4.448 12.552 4 12 4 11.448 4 11 4.448 11 5 11 5.552 11.448 6 12 6ZM19 6C19.552 6 20 5.552 20 5 20 4.448 19.552 4 19 4 18.448 4 18 4.448 18 5 18 5.552 18.448 6 19 6ZM5 6C5.552 6 6 5.552 6 5 6 4.448 5.552 4 5 4 4.448 4 4 4.448 4 5 4 5.552 4.448 6 5 6ZM12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13ZM19 13C19.552 13 20 12.552 20 12 20 11.448 19.552 11 19 11 18.448 11 18 11.448 18 12 18 12.552 18.448 13 19 13ZM5 13C5.552 13 6 12.552 6 12 6 11.448 5.552 11 5 11 4.448 11 4 11.448 4 12 4 12.552 4.448 13 5 13ZM12 20C12.552 20 13 19.552 13 19 13 18.448 12.552 18 12 18 11.448 18 11 18.448 11 19 11 19.552 11.448 20 12 20ZM19 20C19.552 20 20 19.552 20 19 20 18.448 19.552 18 19 18 18.448 18 18 18.448 18 19 18 19.552 18.448 20 19 20ZM5 20C5.552 20 6 19.552 6 19 6 18.448 5.552 18 5 18 4.448 18 4 18.448 4 19 4 19.552 4.448 20 5 20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Grip.displayName = "Grip";

Grip.metadata = {
  name: "Grip",
  category: "stroke/layout",
  tags: ["grip", "icon"],
  description: "Grip icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Grip;
