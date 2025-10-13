import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Iraq: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Iraq(
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
        <path d="M1 11H31V21H1V11Z" fill="#fff" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
          fill="#bd2a2b"
        />
        <path
          d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
          fill="currentColor"
        />
        <path
          d="M15.216 17.884H8.651C8.6 18.347 8.122 18.686 7.585 18.641 7.527 18.636 7.469 18.627 7.413 18.613 8.332 18.162 8.275 17.704 7.695 16.686 8.017 16.571 8.068 16.54 8.394 16.32 8.163 17.019 8.991 16.934 9.602 16.934 9.602 16.69 9.626 16.412 9.443 16.374 9.68 16.289 9.701 16.262 10.077 15.943V16.883H14.606V16.238C14.606 16.163 14.545 16.102 14.47 16.102 14.395 16.102 14.334 16.163 14.334 16.238V16.611C14.334 16.667 14.288 16.713 14.232 16.713H10.771V16.102L13.37 13.591C13.353 13.72 13.621 14.066 13.733 14.124 13.648 14.138 13.553 14.121 13.492 14.182L11.365 16.238H13.723C13.723 15.692 14.232 15.692 14.469 15.498 14.706 15.691 15.215 15.691 15.215 16.238V17.883L15.216 17.884ZM15.708 17.884V13.592C15.949 13.724 16.135 13.877 16.434 13.952 16.42 14.122 16.268 14.176 16.268 14.295V16.935C16.6 17.01 16.675 16.816 16.835 16.718 16.876 17.139 17.144 17.553 17.134 17.885H15.709L15.708 17.884ZM20.193 15.017 20.719 14.576V16.883H21.092V14.26C21.275 14.107 21.513 13.941 21.618 13.748V17.884H18.31C18.263 17.029 18.263 16.15 19.26 16.34V15.991C19.26 15.91 19.138 15.974 19.138 15.899L19.82 15.329V16.883H20.193V15.017ZM22.11 17.884V13.592C22.351 13.724 22.537 13.877 22.836 13.952 22.822 14.122 22.67 14.176 22.67 14.295V16.935C23.002 17.01 23.077 16.816 23.237 16.718 23.278 17.139 23.546 17.553 23.536 17.885H22.111L22.11 17.884Z"
          fill="#357a42"
        />
      </svg>
    );
  },
);

Iraq.displayName = "Iraq";

Iraq.metadata = {
  name: "Iraq",
  category: "flags/flags",
  tags: ["iraq", "icon"],
  description: "Iraq icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Iraq;
