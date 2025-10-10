import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lock: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Lock(
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
          d="M19 11H5C3.895 11 3 11.895 3 13V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V13C21 11.895 20.105 11 19 11ZM7 11V7C7 5.674 7.527 4.402 8.464 3.464 9.402 2.527 10.674 2 12 2 13.326 2 14.598 2.527 15.536 3.464 16.473 4.402 17 5.674 17 7V11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Lock.displayName = "Lock";

Lock.metadata = {
  name: "Lock",
  category: "stroke/security",
  tags: ["lock", "icon"],
  description: "Lock icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lock;
