import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UserStar: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UserStar(
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
        d="M16.051 12.616C16.117 12.413 16.246 12.237 16.42 12.113 16.593 11.989 16.801 11.923 17.014 11.926 17.228 11.929 17.434 11.999 17.604 12.128 17.774 12.256 17.899 12.436 17.96 12.64L18.697 14.092C18.769 14.233 18.873 14.355 19.001 14.448 19.129 14.541 19.278 14.603 19.434 14.627L21.068 14.883C21.278 14.884 21.483 14.951 21.653 15.075 21.823 15.199 21.95 15.373 22.015 15.573 22.08 15.774 22.081 15.989 22.016 16.189 21.952 16.39 21.826 16.564 21.656 16.689L20.484 17.857C20.372 17.969 20.288 18.106 20.239 18.256 20.19 18.407 20.177 18.567 20.202 18.723L20.461 20.336C20.532 20.538 20.537 20.758 20.474 20.963 20.411 21.168 20.283 21.347 20.111 21.474 19.938 21.601 19.729 21.669 19.515 21.668 19.3 21.668 19.092 21.598 18.92 21.47L17.455 20.72C17.314 20.648 17.158 20.61 16.999 20.61 16.84 20.61 16.684 20.648 16.543 20.72L15.078 21.47C14.906 21.597 14.698 21.666 14.485 21.666 14.271 21.666 14.063 21.598 13.891 21.471 13.718 21.345 13.591 21.166 13.528 20.962 13.465 20.758 13.469 20.539 13.539 20.337L13.797 18.724C13.822 18.568 13.809 18.408 13.76 18.257 13.711 18.107 13.627 17.97 13.515 17.858L12.359 16.705C12.184 16.584 12.052 16.409 11.983 16.207 11.913 16.006 11.911 15.787 11.974 15.584 12.038 15.38 12.166 15.202 12.338 15.076 12.51 14.95 12.718 14.883 12.931 14.883L14.564 14.627C14.72 14.603 14.869 14.541 14.997 14.448 15.125 14.355 15.229 14.233 15.301 14.092L16.051 12.616ZM8 15H7C5.939 15 4.922 15.421 4.172 16.172 3.421 16.922 3 17.939 3 19V21M10 11C12.209 11 14 9.209 14 7 14 4.791 12.209 3 10 3 7.791 3 6 4.791 6 7 6 9.209 7.791 11 10 11Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

UserStar.displayName = "UserStar";

UserStar.metadata = {
  name: "UserStar",
  category: "stroke/accountsAccess",
  tags: ["user", "star", "icon"],
  description: "UserStar icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UserStar;
