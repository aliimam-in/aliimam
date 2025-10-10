import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Pause: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Pause(
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
          d="M18 3H15C14.448 3 14 3.448 14 4V20C14 20.552 14.448 21 15 21H18C18.552 21 19 20.552 19 20V4C19 3.448 18.552 3 18 3ZM9 3H6C5.448 3 5 3.448 5 4V20C5 20.552 5.448 21 6 21H9C9.552 21 10 20.552 10 20V4C10 3.448 9.552 3 9 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Pause.displayName = "Pause";

Pause.metadata = {
  name: "Pause",
  category: "stroke/multimedia",
  tags: ["pause", "icon"],
  description: "Pause icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pause;
