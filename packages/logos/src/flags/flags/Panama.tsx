import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Panama: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Panama(
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
        viewBox="0 0 32 32"
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
        <path d="M5 4C2.791 4 1 5.791 1 8V16H16V4H5Z" fill="#fff" />
        <path d="M31 8C31 5.791 29.209 4 27 4H16V16H31V8Z" fill="#c92d25" />
        <path d="M5 28C2.791 28 1 26.209 1 24V16H16V28H5Z" fill="#081d53" />
        <path d="M31 24C31 26.209 29.209 28 27 28H16V16H31V24Z" fill="#fff" />
        <path
          d="M8.812 6.6709L7.986 9.2139H5.312L7.476 10.7859L6.649 13.3289L8.812 11.7569L10.976 13.3289L10.149 10.7859L12.312 9.2139H9.639L8.812 6.6709Z"
          fill="#081d53"
        />
        <path
          d="M22.937 17.9839L22.111 20.5269H19.437L21.601 22.0979L20.774 24.6409L22.937 23.0699L25.101 24.6409L24.274 22.0979L26.437 20.5269H23.764L22.937 17.9839Z"
          fill="#c92d25"
        />
      </svg>
    );
  },
);

Panama.displayName = "Panama";

Panama.metadata = {
  name: "Panama",
  category: "flags/flags",
  tags: ["panama", "icon"],
  description: "Panama icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Panama;
