import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Kenya: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Kenya(
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
        <path d="M1 12H31V20H1V12Z" fill="#ad2317" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V13H1V8C1 5.792 2.792 4 5 4Z"
          fill="currentColor"
        />
        <path
          d="M27 28L5 28C2.792 28 1 26.208 1 24V19L31 19V24C31 26.208 29.208 28 27 28Z"
          fill="#2b6519"
        />
        <path d="M1 11H31V13H1V11ZM1 19H31V21H1V19Z" fill="#fff" />
        <path
          d="M19.345 11.096C19.88 10.169 20.115 9.339 20.218 8.807L20.253 8.625L20.113 8.746C19.703 9.101 19.102 9.719 18.567 10.646C18.376 10.978 18.178 11.32 18.263 11.687L16.002 15.604L13.741 11.687C13.826 11.32 13.628 10.978 13.437 10.646C12.902 9.719 12.301 9.101 11.891 8.746L11.751 8.625L11.786 8.807C11.889 9.339 12.123 10.169 12.659 11.096C12.85 11.428 13.048 11.77 13.408 11.88L15.781 15.989L12.244 22.115L12.578 22.308L16.004 16.374L19.43 22.308L19.764 22.115L16.227 15.989L18.6 11.88C18.96 11.77 19.158 11.428 19.349 11.096H19.345Z"
          fill="#fff"
        />
        <path
          d="M17.233 10.9529C16.899 10.5649 16.55 10.2449 16.212 9.98193C16.087 9.88493 15.912 9.88493 15.787 9.98193C15.449 10.2449 15.1 10.5649 14.766 10.9529C13.166 12.8089 12.947 15.0049 12.916 15.9889C12.937 16.8879 13.116 18.8929 14.526 20.7169C14.921 21.2279 15.341 21.6319 15.733 21.9499C15.888 22.0759 16.111 22.0759 16.266 21.9499C16.658 21.6329 17.078 21.2279 17.473 20.7169C18.883 18.8929 19.062 16.8879 19.083 15.9889C19.052 15.0049 18.833 12.8079 17.233 10.9529Z"
          fill="#ad2317"
        />
        <path
          d="M13.533 18.972C14.134 18.132 14.497 17.111 14.497 16 14.497 14.889 14.13 13.859 13.525 13.017 13.039 14.233 12.937 15.36 12.917 15.99 12.931 16.604 13.03 17.737 13.534 18.972H13.533ZM18.467 18.972C17.866 18.132 17.503 17.111 17.503 16 17.503 14.884 17.87 13.859 18.475 13.017 18.961 14.233 19.063 15.36 19.083 15.99 19.069 16.604 18.971 17.737 18.467 18.972Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Kenya.displayName = "Kenya";

Kenya.metadata = {
  name: "Kenya",
  category: "symbols/flags",
  tags: ["kenya", "icon"],
  description: "Kenya icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Kenya;
