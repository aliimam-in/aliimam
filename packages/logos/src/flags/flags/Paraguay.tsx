import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Paraguay: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Paraguay(
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
        fill="#c53a28"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#1334a3"
      />
      <path
        d="M16 19.25C14.208 19.25 12.75 17.792 12.75 16C12.75 14.208 14.208 12.75 16 12.75C17.792 12.75 19.25 14.208 19.25 16C19.25 17.792 17.792 19.25 16 19.25ZM16 13.25C14.483 13.25 13.25 14.483 13.25 16C13.25 17.517 14.483 18.75 16 18.75C17.517 18.75 18.75 17.517 18.75 16C18.75 14.483 17.517 13.25 16 13.25Z"
        fill="currentColor"
      />
    </svg>
  );
});

Paraguay.displayName = "Paraguay";

Paraguay.metadata = {
  name: "Paraguay",
  category: "flags/flags",
  tags: ["paraguay", "icon"],
  description: "Paraguay icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Paraguay;
