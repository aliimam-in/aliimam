import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Drone: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Drone(
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
          d="M10 10 7 7M10 14 7 17M14 10 17 7M14 14 17 17M14.205 4.139C14.587 3.766 15.04 3.473 15.537 3.278 16.034 3.082 16.565 2.988 17.099 3.002 17.632 3.015 18.158 3.135 18.645 3.354 19.132 3.574 19.57 3.889 19.933 4.28 20.296 4.671 20.577 5.132 20.759 5.633 20.942 6.135 21.022 6.669 20.995 7.202 20.968 7.735 20.835 8.258 20.603 8.739 20.371 9.219 20.045 9.649 19.644 10.002M19.637 14C20.041 14.352 20.37 14.781 20.605 15.262 20.84 15.743 20.976 16.267 21.005 16.802 21.034 17.337 20.955 17.872 20.773 18.376 20.591 18.879 20.31 19.341 19.946 19.734 19.583 20.128 19.143 20.444 18.655 20.664 18.167 20.884 17.639 21.004 17.104 21.016 16.569 21.029 16.036 20.933 15.538 20.736 15.04 20.539 14.587 20.244 14.205 19.868M4.367 10C3.963 9.648 3.633 9.219 3.398 8.737 3.163 8.255 3.027 7.731 2.998 7.196 2.97 6.661 3.049 6.125 3.231 5.621 3.414 5.117 3.695 4.655 4.06 4.262 4.424 3.869 4.864 3.553 5.353 3.333 5.842 3.114 6.37 2.995 6.906 2.983 7.442 2.972 7.975 3.068 8.473 3.266 8.971 3.465 9.424 3.761 9.805 4.138M9.795 19.862C9.412 20.233 8.959 20.523 8.462 20.716 7.965 20.909 7.435 21.001 6.902 20.986 6.369 20.972 5.845 20.851 5.359 20.63 4.874 20.41 4.437 20.095 4.076 19.703 3.714 19.312 3.434 18.852 3.252 18.351 3.071 17.85 2.991 17.317 3.018 16.785 3.045 16.253 3.178 15.731 3.41 15.251 3.641 14.771 3.966 14.342 4.366 13.989M13 8H11C10.448 8 10 8.448 10 9V15C10 15.552 10.448 16 11 16H13C13.552 16 14 15.552 14 15V9C14 8.448 13.552 8 13 8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Drone.displayName = "Drone";

Drone.metadata = {
  name: "Drone",
  category: "stroke/devices",
  tags: ["drone", "icon"],
  description: "Drone icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Drone;
