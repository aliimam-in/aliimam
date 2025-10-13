import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lesotho: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Lesotho(
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
        fill="#030a85"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#45994d"
      />
      <path
        d="M16 12.4651C16.101 12.4651 16.193 12.5211 16.239 12.6111C16.809 12.6791 17.108 13.0911 17.212 13.5711C17.334 14.1321 17.205 14.8941 16.809 15.6941L18.329 17.7101C18.41 17.6721 18.489 17.6331 18.568 17.5911L19.127 18.7731C17.166 19.7881 14.834 19.7881 12.873 18.7731L13.432 17.5911C13.511 17.6331 13.59 17.6721 13.671 17.7101L15.191 15.6941C14.795 14.8941 14.666 14.1311 14.788 13.5711C14.892 13.0911 15.192 12.6791 15.761 12.6111C15.807 12.5211 15.9 12.4651 16 12.4651ZM16.602 15.4181C16.91 14.7301 17.01 14.0781 16.913 13.6471C16.827 13.2651 16.634 12.9821 16.25 12.9221V13.9071L16.73 14.3871H16.346V15.0791L16.602 15.4181ZM15.75 12.9211C15.366 12.9811 15.173 13.2651 15.087 13.6461C14.99 14.0771 15.09 14.7291 15.398 15.4171L15.654 15.0771V14.3851H15.27L15.75 13.9051V12.9211Z"
        fill="currentColor"
      />
    </svg>
  );
});

Lesotho.displayName = "Lesotho";

Lesotho.metadata = {
  name: "Lesotho",
  category: "flags/flags",
  tags: ["lesotho", "icon"],
  description: "Lesotho icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lesotho;
