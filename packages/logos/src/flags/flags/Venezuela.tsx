import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Venezuela: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Venezuela(
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
      <path d="M1 11H31V21H1V11Z" fill="#091e79" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
        fill="#f7cf46"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#bf2c30"
      />
      <path
        d="M10.207 17.715 10.022 17.068 9.792 17.701 9.119 17.677 9.649 18.092 9.419 18.724 9.977 18.348 10.508 18.762 10.322 18.115 10.88 17.739 10.207 17.715ZM11.463 16.039 11.557 15.373 11.089 15.857 10.484 15.561 10.8 16.156 10.331 16.639 10.994 16.523 11.31 17.118 11.404 16.451 12.068 16.335 11.463 16.039ZM13.195 14.795 13.469 14.18 12.886 14.517 12.386 14.066 12.526 14.725 11.943 15.061 12.612 15.132 12.752 15.79 13.026 15.175 13.696 15.245 13.195 14.795ZM15.034 13.832 14.718 13.238 14.624 13.904 13.961 14.021 14.566 14.316 14.472 14.983 14.94 14.499 15.545 14.794 15.229 14.199 15.697 13.715 15.034 13.832ZM22.351 18.092 22.881 17.677 22.208 17.701 21.978 17.068 21.793 17.715 21.12 17.739 21.678 18.115 21.492 18.762 22.023 18.348 22.581 18.724 22.351 18.092ZM21.006 16.523 21.669 16.639 21.2 16.156 21.516 15.561 20.911 15.857 20.443 15.373 20.537 16.039 19.932 16.335 20.596 16.451 20.69 17.118 21.006 16.523ZM19.388 15.132 20.057 15.061 19.474 14.725 19.614 14.066 19.114 14.517 18.531 14.18 18.805 14.795 18.304 15.245 18.974 15.175 19.248 15.79 19.388 15.132ZM17.376 13.904 17.282 13.238 16.966 13.832 16.303 13.715 16.771 14.199 16.455 14.794 17.06 14.499 17.528 14.983 17.434 14.316 18.039 14.021 17.376 13.904Z"
        fill="#fff"
      />
    </svg>
  );
});

Venezuela.displayName = "Venezuela";

Venezuela.metadata = {
  name: "Venezuela",
  category: "flags/flags",
  tags: ["venezuela", "icon"],
  description: "Venezuela icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Venezuela;
