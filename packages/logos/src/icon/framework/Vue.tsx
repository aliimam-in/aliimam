import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Vue: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Vue(
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
        <g clipPath="url(#undefined-clip0_2066_388)">
          <path
            d="M19.2 1H24L12 21.981L0 1H9.18L12 5.86516L14.76 1H19.2Z"
            fill="#41b883"
          />
          <path
            d="M0 1L12 21.981L24 1H19.2L12 13.5886L4.74 1H0Z"
            fill="#41b883"
          />
          <path
            d="M4.73999 1L12 13.6494L19.2 1H14.76L12 5.86516L9.17999 1H4.73999Z"
            fill="#35495e"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_388">
            <path fill="#fff" transform="translate(0 1)" d="M0 0H24V21H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Vue.displayName = "Vue";

Vue.metadata = {
  name: "Vue",
  category: "icon/framework",
  tags: ["vue", "icon"],
  description: "Vue icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Vue;
