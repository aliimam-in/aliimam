import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CentralAfricanRepu: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CentralAfricanRepu(
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
      <path d="M1 15H31V22H1V15Z" fill="#4b9638" />
      <path d="M1 9H31V16H1V9Z" fill="#fff" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V10H1V8C1 5.792 2.792 4 5 4Z"
        fill="#0f2c7e"
      />
      <path
        d="M27 28 5 28C2.792 28 1 26.208 1 24V22L31 22V24C31 26.208 29.208 28 27 28ZM7.575 7.472 8.875 6.528H7.269L6.772 5 6.276 6.528H4.669L5.969 7.472 5.472 9 6.772 8.056 8.072 9 7.575 7.472Z"
        fill="#f8d147"
      />
      <path d="M13 4H19V28H13V4Z" fill="#c22b38" />
    </svg>
  );
});

CentralAfricanRepu.displayName = "CentralAfricanRepu";

CentralAfricanRepu.metadata = {
  name: "CentralAfricanRepu",
  category: "symbols/flags",
  tags: ["central", "african", "repu", "icon"],
  description: "CentralAfricanRepu icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CentralAfricanRepu;
