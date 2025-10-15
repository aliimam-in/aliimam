import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cvc: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cvc(
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
          d="M20.25 5.25H3.75C2.50736 5.25 1.5 6.25736 1.5 7.5V16.5C1.5 17.7426 2.50736 18.75 3.75 18.75H20.25C21.4926 18.75 22.5 17.7426 22.5 16.5V7.5C22.5 6.25736 21.4926 5.25 20.25 5.25Z"
          fill="#e6e6e6"
        />
        <path d="M4.5 13.5H14.25V15.75H4.5V13.5Z" fill="#fff" />
        <path
          d="M18.375 10.125C19.5142 10.125 20.5515 10.5517 21.345 11.25H22.5V8.25H1.5V11.25H15.4058C16.1985 10.5517 17.2358 10.125 18.375 10.125Z"
          fill="#1a1a1a"
        />
        <path
          d="M18.375 19.125C20.8603 19.125 22.875 17.1103 22.875 14.625C22.875 12.1397 20.8603 10.125 18.375 10.125C15.8897 10.125 13.875 12.1397 13.875 14.625C13.875 17.1103 15.8897 19.125 18.375 19.125Z"
          fill="#e6e6e6"
        />
        <path d="M14.25 12.75H21.75V16.5H14.25V12.75Z" fill="#fff" />
        <path
          d="M18.375 19.125C20.8603 19.125 22.875 17.1103 22.875 14.625C22.875 12.1397 20.8603 10.125 18.375 10.125C15.8897 10.125 13.875 12.1397 13.875 14.625C13.875 17.1103 15.8897 19.125 18.375 19.125Z"
          stroke="#ed1c24"
          strokeMiterlimit="10"
        />
        <path
          d="M16.313 15.188C16.623 15.188 16.875 14.936 16.875 14.625 16.875 14.314 16.623 14.063 16.313 14.063 16.002 14.063 15.75 14.314 15.75 14.625 15.75 14.936 16.002 15.188 16.313 15.188ZM18.188 15.188C18.498 15.188 18.75 14.936 18.75 14.625 18.75 14.314 18.498 14.063 18.188 14.063 17.877 14.063 17.625 14.314 17.625 14.625 17.625 14.936 17.877 15.188 18.188 15.188ZM20.063 15.188C20.373 15.188 20.625 14.936 20.625 14.625 20.625 14.314 20.373 14.063 20.063 14.063 19.752 14.063 19.5 14.314 19.5 14.625 19.5 14.936 19.752 15.188 20.063 15.188Z"
          fill="#1a1a1a"
        />
      </svg>
    );
  },
);

Cvc.displayName = "Cvc";

Cvc.metadata = {
  name: "Cvc",
  category: "symbols/cards",
  tags: ["cvc", "icon"],
  description: "Cvc icon from symbols/cards category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cvc;
