import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Siren: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Siren(
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
          d="M7 18V12C7 10.674 7.527 9.402 8.464 8.464 9.402 7.527 10.674 7 12 7 13.326 7 14.598 7.527 15.536 8.464 16.473 9.402 17 10.674 17 12V18M5 21C5 21.265 5.105 21.52 5.293 21.707 5.48 21.895 5.735 22 6 22H18C18.265 22 18.52 21.895 18.707 21.707 18.895 21.52 19 21.265 19 21V20C19 19.47 18.789 18.961 18.414 18.586 18.039 18.211 17.53 18 17 18H7C6.47 18 5.961 18.211 5.586 18.586 5.211 18.961 5 19.47 5 20V21ZM21 12H22M18.5 4.5 18 5M2 12H3M12 2V3M4.929 4.929 5.636 5.636M12 12V18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Siren.displayName = "Siren";

Siren.metadata = {
  name: "Siren",
  category: "stroke/medical",
  tags: ["siren", "icon"],
  description: "Siren icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Siren;
