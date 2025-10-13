import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NorthMacedonia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NorthMacedonia(
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
      <path
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#c8342d"
      />
      <path
        d="M11.847 17.909 1 23.424V24C1 24.835 1.257 25.609 1.695 26.251L12.371 18.767C12.168 18.501 11.989 18.216 11.847 17.909ZM11.417 16C11.417 15.845 11.448 15.698 11.463 15.546L1 14.5V17.5L11.463 16.454C11.448 16.303 11.417 16.156 11.417 16ZM16 11.417C16.171 11.417 16.333 11.449 16.499 11.467L18.4 4H13.6L15.501 11.467C15.667 11.449 15.829 11.417 16 11.417ZM16 19.75C18.071 19.75 19.75 18.071 19.75 16 19.75 13.929 18.071 12.25 16 12.25 13.929 12.25 12.25 13.929 12.25 16 12.25 18.071 13.929 19.75 16 19.75ZM12.371 13.233 1.695 5.749C1.257 6.39 1 7.165 1 8V8.576L11.847 14.091C11.989 13.784 12.167 13.5 12.371 13.234V13.233ZM20.583 16C20.583 16.155 20.552 16.302 20.537 16.454L31 17.5V14.5L20.537 15.546C20.552 15.697 20.583 15.844 20.583 16ZM30.305 5.749 19.629 13.233C19.832 13.499 20.011 13.783 20.153 14.09L31 8.575V7.999C31 7.164 30.743 6.391 30.305 5.749ZM16 20.583C15.829 20.583 15.667 20.551 15.501 20.533L13.6 28H18.4L16.499 20.533C16.333 20.551 16.171 20.583 16 20.583ZM19.629 18.767 30.305 26.251C30.743 25.61 31 24.835 31 24V23.424L20.153 17.909C20.011 18.216 19.833 18.501 19.629 18.767Z"
        fill="#f4e959"
      />
    </svg>
  );
});

NorthMacedonia.displayName = "NorthMacedonia";

NorthMacedonia.metadata = {
  name: "NorthMacedonia",
  category: "flags/flags",
  tags: ["north", "macedonia", "icon"],
  description: "NorthMacedonia icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NorthMacedonia;
