import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Authy: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Authy(
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
        <g clipPath="url(#undefined-clip0_2062_2086)">
          <path
            d="M24 11.9998C24 18.6278 18.6276 24 11.9997 24C5.37228 24 0 18.6278 0 11.9998C0 5.37232 5.37228 0 11.9997 0C18.6276 0 24 5.37232 24 11.9998Z"
            fill="#f22e46"
          />
          <path
            d="M10.971 9.45845L13.8483 12.3348C14.2637 12.7506 14.9379 12.7506 15.3543 12.3348C15.7697 11.9189 15.7706 11.2452 15.3543 10.8293L12.4768 7.95187C10.4179 5.89259 7.09038 5.85945 4.9879 7.84727C4.96847 7.86361 4.94903 7.8808 4.93115 7.89868C4.92201 7.90789 4.91451 7.91765 4.90537 7.92585C4.89592 7.93484 4.88648 7.94296 4.8775 7.95194C4.85938 7.97006 4.84274 7.98903 4.82687 8.00792C2.83804 10.1114 2.87226 13.439 4.93123 15.4982L7.80867 18.3749C8.22488 18.7906 8.89827 18.7906 9.3144 18.3749C9.73092 17.959 9.73092 17.2844 9.31549 16.8694L6.43804 13.992C5.18191 12.7365 5.17347 10.6987 6.41195 9.43236C7.67814 8.19388 9.71482 8.20286 10.971 9.45845Z"
            fill="#fff"
          />
          <path
            d="M14.6847 5.62666C14.2689 6.04264 14.2689 6.71626 14.6858 7.13216L17.5621 10.0096C18.8175 11.2652 18.8256 13.3026 17.5872 14.5693C16.3206 15.8067 14.2846 15.7986 13.0288 14.5428L10.1515 11.6658C9.73533 11.2498 9.06085 11.2498 8.64527 11.6658C8.22875 12.0813 8.22875 12.7571 8.64527 13.1719L11.5217 16.0494C13.5812 18.1086 16.9084 18.1421 19.0113 16.154C19.0308 16.1368 19.0492 16.1208 19.0685 16.1026C19.0773 16.0937 19.0855 16.0845 19.0941 16.0754C19.1034 16.0665 19.1125 16.0582 19.1213 16.0483C19.1397 16.0311 19.1555 16.0122 19.1719 15.9926C21.1608 13.8899 21.1276 10.5634 19.0685 8.50303L16.1912 5.62659C15.7754 5.21007 15.1001 5.21007 14.6847 5.62666Z"
            fill="#f5b1b2"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2086">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Authy.displayName = "Authy";

Authy.metadata = {
  name: "Authy",
  category: "icon/authentication",
  tags: ["authy", "icon"],
  description: "Authy icon from icon/authentication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Authy;
