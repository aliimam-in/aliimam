import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ToggleLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ToggleLeft(
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
        d="M9 15C10.6569 15 12 13.6569 12 12C12 10.3431 10.6569 9 9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 5H9C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19H15C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ToggleLeft.displayName = "ToggleLeft";

ToggleLeft.metadata = {
  name: "ToggleLeft",
  category: "stroke/accountsAccess",
  tags: ["toggle", "left", "icon"],
  description: "ToggleLeft icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ToggleLeft;
