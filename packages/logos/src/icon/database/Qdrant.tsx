import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Qdrant: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Qdrant(
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
        <g clipPath="url(#undefined-clip0_2062_3096)">
          <path
            d="M11.4392 0L1.22839 6V18L11.4388 24L15.2674 21.75V17.25L11.4388 19.5L5.05776 15.75V8.25L11.4388 4.5L17.8199 8.25V23.25L21.6489 21V6L11.4392 0Z"
            fill="#dc244c"
          />
          <path
            d="M7.6106 9.75V14.25L11.4392 16.5L15.2679 14.25V9.75L11.4392 7.5L7.6106 9.75Z"
            fill="#dc244c"
          />
          <path
            d="M15.2678 17.25V21.75L11.4392 24V19.5L15.2678 17.25ZM21.6493 6V21L17.8203 23.25V8.25L21.6493 6Z"
            fill="#bd0c3e"
          />
          <path
            d="M21.6492 6L17.8202 8.25L11.4392 4.5L5.05813 8.25L1.22839 6L11.4392 0L21.6492 6Z"
            fill="#ff516b"
          />
          <path
            d="M11.4392 19.5V24L1.22839 18V6L5.05776 8.25V15.75L11.4392 19.5Z"
            fill="#dc244c"
          />
          <path
            d="M15.2679 9.75L11.4392 12L7.6106 9.75L11.4392 7.5L15.2679 9.75Z"
            fill="#ff516b"
          />
          <path
            d="M11.4392 12V16.5L7.6106 14.25V9.75L11.4392 12Z"
            fill="#dc244c"
          />
          <path
            d="M15.2678 9.75V14.25L11.4392 16.5V12L15.2678 9.75Z"
            fill="#bd0c3e"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_3096">
            <path fill="#fff" transform="translate(1)" d="M0 0H21V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Qdrant.displayName = "Qdrant";

Qdrant.metadata = {
  name: "Qdrant",
  category: "icon/database",
  tags: ["qdrant", "icon"],
  description: "Qdrant icon from icon/database category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Qdrant;
