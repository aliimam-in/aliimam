import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Jwt: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Jwt(
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
        <g clipPath="url(#undefined-clip0_2062_2079)">
          <path
            d="M13.8174 6.45021L13.7933 0H10.1826L10.2067 6.45021L12.012 8.92006L13.8174 6.45021ZM10.2067 17.5043V23.9785H13.8174V17.5043L12.012 15.0346L10.2067 17.5043Z"
            fill="#fff"
          />
          <path
            d="M13.8174 17.5043L17.6209 22.7317L20.5336 20.6215L16.7302 15.3943L13.8174 14.459V17.5043ZM10.2067 6.45023L6.37913 1.2229L3.46641 3.33303L7.26985 8.56036L10.2067 9.49552V6.45023Z"
            fill="#00f2e6"
          />
          <path
            d="M7.26984 8.56029L1.10728 6.57007L0 9.97499L6.16247 11.9892L9.07519 11.0301L7.26984 8.56029ZM14.9248 12.9244L16.7302 15.3942L22.8927 17.3844L24 13.9794L17.8375 11.9892L14.9248 12.9244Z"
            fill="#00b9f1"
          />
          <path
            d="M17.8375 11.9892L24 9.97499L22.8927 6.57007L16.7302 8.56029L14.9248 11.0301L17.8375 11.9892ZM6.16247 11.9892L0 13.9794L1.10728 17.3844L7.26984 15.3942L9.07519 12.9244L6.16247 11.9892Z"
            fill="#d63aff"
          />
          <path
            d="M7.26985 15.3943L3.46641 20.6215L6.37913 22.7317L10.2067 17.5043V14.459L7.26985 15.3943ZM16.7302 8.56036L20.5336 3.33303L17.6209 1.2229L13.8174 6.45023V9.49552L16.7302 8.56036Z"
            fill="#fb015b"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2079">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Jwt.displayName = "Jwt";

Jwt.metadata = {
  name: "Jwt",
  category: "icon/authentication",
  tags: ["jwt", "icon"],
  description: "Jwt icon from icon/authentication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Jwt;
