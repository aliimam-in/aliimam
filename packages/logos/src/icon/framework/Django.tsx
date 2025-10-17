import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Django: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Django(
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
          d="M10.6013 3H13.575V16.6268C12.3057 16.8873 11.0136 17.0217 9.71779 17.028C6.08629 17.0243 4.19629 15.402 4.19629 12.2865C4.19629 9.2865 6.20104 7.3365 9.30829 7.3365C9.74408 7.328 10.179 7.37846 10.6013 7.4865V3ZM10.6013 9.8565C10.278 9.74986 9.93889 9.69913 9.59854 9.7065C8.09854 9.7065 7.22629 10.6238 7.22629 12.231C7.22629 13.7963 8.05654 14.6603 9.57979 14.6603C9.92166 14.6602 10.2631 14.6351 10.6013 14.5853V9.86025V9.8565Z"
          fill="#44b78b"
        />
        <path
          d="M18.2999 7.54427V14.3693C18.2999 16.719 18.1237 17.8485 17.6077 18.8228C17.0811 19.8134 16.22 20.5849 15.1777 21L12.4192 19.7003C13.4213 19.3571 14.2607 18.6546 14.7749 17.7285C15.1994 16.8878 15.3337 15.9135 15.3337 13.3508V7.54427H18.2999ZM15.3307 3.01501H18.3037V6.03602H15.3307V3.01501Z"
          fill="#44b78b"
        />
      </svg>
    );
  },
);

Django.displayName = "Django";

Django.metadata = {
  name: "Django",
  category: "icon/framework",
  tags: ["django", "icon"],
  description: "Django icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Django;
