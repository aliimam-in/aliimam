import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Auth0: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Auth0(
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
          d="M21.98 7.448L19.62 0H4.347L2.02 7.448C0.667999 11.76 2.05 16.654 5.835 19.463L12.007 24L18.164 19.448C21.919 16.638 23.346 11.76 21.979 7.433L15.819 12.013L18.162 19.463L12.005 14.866L5.847 19.446L8.205 12.013L2.017 7.463L9.647 7.418L12.008 0L14.364 7.404L21.98 7.448Z"
          fill="#eb5424"
        />
      </svg>
    );
  },
);

Auth0.displayName = "Auth0";

Auth0.metadata = {
  name: "Auth0",
  category: "icon/authentication",
  tags: ["auth", "icon"],
  description: "Auth0 icon from icon/authentication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Auth0;
