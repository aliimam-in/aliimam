import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PartyPopper: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PartyPopper(
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
        d="M5.8 11.3 2 22 12.7 18.21M4 3H4.01M22 8H22.01M15 2H15.01M22 20H22.01M22 2 19.76 2.75C19.122 2.962 18.578 3.39 18.221 3.959 17.863 4.528 17.715 5.203 17.8 5.87 17.9 6.73 17.23 7.5 16.35 7.5H15.97C15.11 7.5 14.37 8.1 14.21 8.94L14 10M22 13 21.18 12.67C20.32 12.33 19.36 12.87 19.2 13.78 19.09 14.48 18.48 15 17.77 15H17M11 2 11.33 2.82C11.67 3.68 11.13 4.64 10.22 4.8 9.52 4.9 9 5.52 9 6.23V7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13C12.93 14.93 13.83 17.17 13 18C12.17 18.83 9.93 17.93 8 16C6.07 14.07 5.17 11.83 6 11C6.83 10.17 9.07 11.07 11 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PartyPopper.displayName = "PartyPopper";

PartyPopper.metadata = {
  name: "PartyPopper",
  category: "stroke/emoji",
  tags: ["party", "popper", "icon"],
  description: "PartyPopper icon from stroke/emoji category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PartyPopper;
