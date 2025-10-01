import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Settings2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Settings2(
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
        d="M14 17H5M19 7H10M17 20C18.657 20 20 18.657 20 17 20 15.343 18.657 14 17 14 15.343 14 14 15.343 14 17 14 18.657 15.343 20 17 20ZM7 10C8.657 10 10 8.657 10 7 10 5.343 8.657 4 7 4 5.343 4 4 5.343 4 7 4 8.657 5.343 10 7 10Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Settings2.displayName = "Settings2";

Settings2.metadata = {
  name: "Settings2",
  category: "stroke/accountsAccess",
  tags: ["settings", "icon"],
  description: "Settings2 icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Settings2;
