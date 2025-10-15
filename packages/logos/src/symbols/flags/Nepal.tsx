import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Nepal: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Nepal(
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
          fill="#fff"
        />
        <path
          d="M23 19L2.419 4.96704C1.558 5.70104 1 6.78004 1 8.00004V24C1 26.209 2.791 28 5 28H23L9.8 19H23Z"
          fill="#13348f"
        />
        <path
          d="M5 26.9999C3.346 26.9999 2 25.6539 2 23.9999V7.9999C2 7.3799 2.2 6.7789 2.562 6.2749L19.758 17.9999H6.558L19.758 26.9999H5Z"
          fill="#cb2e3f"
        />
        <path
          d="M6.277 16.638C7.932 16.638 9.273 15.297 9.273 13.642 9.011 14.31 8.535 14.865 7.927 15.228L7.671 15.036 8.176 14.658 7.565 14.502 7.887 13.96 7.263 14.05 7.353 13.426 6.811 13.748 6.655 13.137 6.277 13.642 5.899 13.137 5.743 13.748 5.201 13.426 5.291 14.05 4.667 13.96 4.989 14.502 4.378 14.658 4.883 15.036 4.627 15.228C4.036 14.876 3.553 14.332 3.282 13.642 3.282 15.297 4.622 16.638 6.277 16.638ZM8.249 22.933V22.932L9.496 22.404 8.249 21.876 9.065 20.795 7.721 20.961 7.886 19.616 6.805 20.432 6.277 19.185 5.749 20.432 4.667 19.616 4.833 20.961 3.489 20.795 4.305 21.876 3.058 22.404 4.305 22.932V22.933L3.489 24.014 4.833 23.848 4.667 25.192 5.748 24.376 6.277 25.623 6.805 24.376 7.886 25.192 7.721 23.848 9.065 24.014 8.249 22.933Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Nepal.displayName = "Nepal";

Nepal.metadata = {
  name: "Nepal",
  category: "symbols/flags",
  tags: ["nepal", "icon"],
  description: "Nepal icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Nepal;
