import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Atom: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Atom(
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
          d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.1999 20.1999C22.2399 18.1699 20.2199 12.8399 15.6999 8.29989C11.1599 3.77989 5.82989 1.75989 3.79989 3.79989C1.75989 5.82989 3.77989 11.1599 8.29989 15.6999C12.8399 20.2199 18.1699 22.2399 20.1999 20.1999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6999 15.6999C20.2199 11.1599 22.2399 5.82989 20.1999 3.79989C18.1699 1.75989 12.8399 3.77989 8.29989 8.29989C3.77989 12.8399 1.75989 18.1699 3.79989 20.1999C5.82989 22.2399 11.1599 20.2199 15.6999 15.6999Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Atom.displayName = "Atom";

Atom.metadata = {
  name: "Atom",
  category: "stroke/science",
  tags: ["atom", "icon"],
  description: "Atom icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Atom;
