import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BaseUi: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function BaseUi(
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
        <g clipPath="url(#undefined-clip0_2066_914)">
          <path
            d="M13.5 7.015C13.4348 7.01184 13.3696 7.02211 13.3085 7.04517C13.2474 7.06823 13.1917 7.10359 13.1448 7.14906C13.0979 7.19452 13.0609 7.24913 13.036 7.3095C13.0111 7.36987 12.9988 7.43471 13 7.5V23C15.0802 23.0027 17.0797 22.195 18.5744 20.7482C20.0691 19.3014 20.9415 17.3293 21.0065 15.2501C21.0716 13.1709 20.3242 11.1481 18.9228 9.61074C17.5214 8.07336 15.5763 7.1423 13.5 7.015ZM12 9.8V23C7.582 23 4 19.06 4 14.2V1C8.418 1 12 4.94 12 9.8Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_914">
            <path fill="#fff" transform="translate(4)" d="M0 0H17V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

BaseUi.displayName = "BaseUi";

BaseUi.metadata = {
  name: "BaseUi",
  category: "icon/library",
  tags: ["base", "ui", "icon"],
  description: "BaseUi icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BaseUi;
