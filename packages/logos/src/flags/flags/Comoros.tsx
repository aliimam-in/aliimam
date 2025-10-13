import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Comoros: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Comoros(
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
      <path d="M1 15H31V22H1V15Z" fill="#dd4446" />
      <path d="M1 9H31V16H1V9Z" fill="#fff" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V10H1V8C1 5.792 2.792 4 5 4Z"
        fill="#f8d448"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V22L31 22V24C31 26.208 29.208 28 27 28Z"
        fill="#163aa0"
      />
      <path
        d="M2.316 26.947L16 16L2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 25.172 1.513 26.216 2.316 26.947Z"
        fill="#439543"
      />
      <path
        d="M4.95697 16.5351C4.66097 14.0731 6.41697 11.8371 8.87897 11.5401C8.06997 11.3161 7.21597 11.3161 6.40697 11.5401C3.94497 12.2231 2.50197 14.7721 3.18497 17.2351C3.86797 19.6971 6.41697 21.1401 8.87997 20.4571C6.82497 20.2101 5.20497 18.5901 4.95797 16.5351H4.95697Z"
        fill="#fff"
      />
      <path
        d="M9.094 12.711 8.88 12.053 8.666 12.711H7.974L8.534 13.118 8.32 13.776 8.88 13.37 9.44 13.776 9.226 13.118 9.786 12.711H9.094ZM8.88 14.094 8.666 14.752H7.974L8.534 15.159 8.32 15.818 8.88 15.411 9.44 15.818 9.226 15.159 9.786 14.752H9.094L8.88 14.094ZM8.88 16.135 8.666 16.794H7.974L8.534 17.2 8.32 17.859 8.88 17.452 9.44 17.859 9.226 17.201 9.786 16.794H9.093L8.88 16.135ZM9.093 18.835 8.88 18.177 8.666 18.835H7.974L8.534 19.242 8.32 19.9 8.88 19.493 9.44 19.9 9.226 19.242 9.786 18.835H9.093Z"
        fill="#fff"
      />
    </svg>
  );
});

Comoros.displayName = "Comoros";

Comoros.metadata = {
  name: "Comoros",
  category: "flags/flags",
  tags: ["comoros", "icon"],
  description: "Comoros icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Comoros;
