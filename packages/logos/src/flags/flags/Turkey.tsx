import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Turkey: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Turkey(
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
          fill="#d12d24"
        />
        <path
          d="M19.807 16L21 14.358L19.069 14.985L17.876 13.342V15.373L15.945 16L17.876 16.627V18.658L19.069 17.015L21 17.642L19.807 16Z"
          fill="#fff"
        />
        <path
          d="M15.953 19.325C14.116 20.975 11.29 20.825 9.63901 18.988C7.98801 17.151 8.13901 14.325 9.97601 12.674C11.813 11.024 14.639 11.174 16.29 13.011C15.848 12.312 15.255 11.719 14.556 11.277C11.948 9.62702 8.49601 10.403 6.84501 13.011C5.19501 15.619 5.97101 19.071 8.57901 20.722C11.187 22.372 14.639 21.596 16.29 18.988C16.184 19.106 16.071 19.219 15.953 19.325Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Turkey.displayName = "Turkey";

Turkey.metadata = {
  name: "Turkey",
  category: "flags/flags",
  tags: ["turkey", "icon"],
  description: "Turkey icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Turkey;
