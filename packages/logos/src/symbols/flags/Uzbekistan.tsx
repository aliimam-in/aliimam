import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Uzbekistan: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Uzbekistan(
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
        fill="#4498b3"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#55b44b"
      />
      <path d="M1 12H31V13H1V12ZM1 19H31V20H1V19Z" fill="#be2a2c" />
      <path
        d="M7.417 6.51C7.29 6.489 7.16 6.477 7.027 6.477 5.736 6.477 4.689 7.524 4.689 8.815 4.689 10.106 5.736 11.153 7.027 11.153 7.16 11.153 7.29 11.141 7.417 11.12 6.312 10.934 5.469 9.974 5.469 8.815 5.469 7.656 6.312 6.696 7.417 6.51ZM9.741 10.181 9.564 9.635 9.387 10.181H8.813L9.277 10.518 9.1 11.063 9.564 10.726 10.028 11.063 9.851 10.518 10.315 10.181H9.741ZM12.899 10.181 12.722 9.635 12.544 10.181H11.971L12.435 10.518 12.258 11.063 12.722 10.726 13.186 11.063 13.009 10.518 13.473 10.181H12.899ZM12.722 6.477 12.544 7.023H11.971L12.435 7.36 12.258 7.905 12.722 7.568 13.186 7.905 13.009 7.36 13.473 7.023H12.899L12.722 6.477Z"
        fill="#fff"
      />
    </svg>
  );
});

Uzbekistan.displayName = "Uzbekistan";

Uzbekistan.metadata = {
  name: "Uzbekistan",
  category: "symbols/flags",
  tags: ["uzbekistan", "icon"],
  description: "Uzbekistan icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Uzbekistan;
