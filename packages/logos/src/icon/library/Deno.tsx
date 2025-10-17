import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Deno: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Deno(
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
          d="M15.6619 14.6723C17.6885 14.7717 19.805 13.8622 20.4621 12.0523C21.1191 10.2423 20.8643 8.45238 18.5073 7.37879C16.1503 6.30483 15.0618 5.02834 13.1576 4.25819C11.9134 3.75497 10.5292 4.05362 9.10784 4.83916C5.27963 6.95493 1.84955 13.6394 3.43055 19.8328C3.44158 19.874 3.43846 19.9177 3.42171 19.9569C3.40496 19.9961 3.37553 20.0286 3.33814 20.0491C3.30074 20.0696 3.25758 20.0769 3.21552 20.0699C3.17347 20.063 3.13495 20.0422 3.1061 20.0108C0.974474 17.6595 -0.224988 14.4711 0.0354812 11.0598C0.538524 4.47251 6.29493 -0.467178 12.8822 0.0358644C19.4691 0.538847 24.4088 6.2952 23.9057 12.8825C23.6945 15.6489 22.557 18.1244 20.8199 20.0286C19.4915 21.3932 17.7991 21.9998 16.3868 21.9747C15.3629 21.9565 14.3615 21.549 13.669 20.9533C12.6805 20.1017 12.281 19.1287 12.1444 18.0424C12.1102 17.7727 12.1303 17.0371 12.2708 16.5277C12.3753 16.1481 12.641 15.4145 13.0295 15.0939C12.5749 14.8984 11.9904 14.4721 11.8058 14.2676C11.7607 14.2175 11.7668 14.1386 11.8073 14.0847C11.827 14.0582 11.8546 14.0388 11.8861 14.0294C11.9177 14.0199 11.9514 14.0208 11.9824 14.032C12.3731 14.166 12.8488 14.298 13.3506 14.3822C14.0102 14.4925 14.8306 14.6311 15.6619 14.6723ZM11.5378 5.09244C12.1835 5.04181 12.7469 5.59297 12.844 6.3259C12.9735 7.3023 12.6153 8.3109 11.4369 8.33412C10.4302 8.35417 10.1252 7.33911 10.192 6.72414C10.2582 6.10918 10.7652 5.15307 11.5378 5.09244Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

Deno.displayName = "Deno";

Deno.metadata = {
  name: "Deno",
  category: "icon/library",
  tags: ["deno", "icon"],
  description: "Deno icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Deno;
