import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Auth0Props extends IconProps {
  type?: "icon";
}

export const Auth0: IconComponent<Auth0Props> = React.forwardRef<
  SVGSVGElement,
  Auth0Props
>(function Auth0(
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
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "icon") {
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
          d="M21.98 7.448L19.62 0H4.34698L2.01998 7.448C0.667984 11.76 2.04998 16.654 5.83498 19.463L12.007 24L18.164 19.448C21.919 16.638 23.346 11.76 21.979 7.433L15.819 12.013L18.162 19.463L12.005 14.866L5.84698 19.446L8.20498 12.013L2.01698 7.463L9.64698 7.418L12.008 0L14.364 7.404L21.98 7.448Z"
          fill="#eb5424"
        />
      </svg>
    );
  }

  if (type === "icon") {
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
  }

  console.error(`Auth0 doesn't support ${type}`);
  return null;
});

Auth0.displayName = "Auth0";

Auth0.metadata = {
  name: "Auth0",
  category: "icon/library",
  tags: ["auth", "icon"],
  description: "Auth0 icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Auth0;
