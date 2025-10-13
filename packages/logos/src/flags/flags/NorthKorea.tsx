import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NorthKorea: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NorthKorea(
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
      <path d="M1 8H31V24H1V8Z" fill="#da3530" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V9H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V23L31 23V24C31 26.208 29.208 28 27 28Z"
        fill="#1f4d9e"
      />
      <path
        d="M1 9H31V10H1V9ZM1 22H31V23H1V22ZM10.312 12C8.275 12 6.625 13.651 6.625 15.688 6.625 17.725 8.276 19.376 10.312 19.376 12.348 19.376 14 17.725 14 15.688 14 13.651 12.349 12 10.312 12ZM12.412 18.578 10.312 17.052 8.212 18.578 9.014 16.11 6.914 14.584H9.509L10.311 12.116 11.113 14.584H13.708L11.608 16.11 12.41 18.578H12.412Z"
        fill="#fff"
      />
    </svg>
  );
});

NorthKorea.displayName = "NorthKorea";

NorthKorea.metadata = {
  name: "NorthKorea",
  category: "flags/flags",
  tags: ["north", "korea", "icon"],
  description: "NorthKorea icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NorthKorea;
