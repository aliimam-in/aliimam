import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Sanity: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Sanity(
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
          d="M20.0096 14.0871L19.3581 12.9536L16.2074 14.8726L19.7069 10.4171L20.236 10.1066L20.1051 9.91L20.3455 9.60287L19.2411 8.68375L18.7358 9.32788L8.53325 15.2969L12.3054 10.7606L19.3314 6.90938L18.6639 5.61912L14.837 7.716L16.7214 5.45125L15.6418 4.5L11.4008 9.59962L7.1885 11.9096L10.4134 7.64638L12.4341 6.59462L11.7924 5.28988L5.905 8.3545L7.5105 6.23012L6.389 5.33187L3 9.81725L3.0525 9.85925L3.68575 11.1485L7.44287 9.19188L4.01837 13.7181L4.57963 14.1678L4.91337 14.813L8.86913 12.6442L4.51312 17.8831L5.59275 18.8342L5.8095 18.5735L16.3179 12.4056L12.829 16.849L12.886 16.8965L12.8806 16.8999L13.6039 18.1581L18.2442 15.3311L16.4574 18.2145L17.655 19L20.5 14.4097L20.0096 14.0871Z"
          fill="#0d0e12"
        />
      </svg>
    );
  },
);

Sanity.displayName = "Sanity";

Sanity.metadata = {
  name: "Sanity",
  category: "icon/cms",
  tags: ["sanity", "icon"],
  description: "Sanity icon from icon/cms category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sanity;
