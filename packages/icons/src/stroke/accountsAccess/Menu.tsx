import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Menu: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Menu(
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
          d="M4 5H20M4 12H20M4 19H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Menu.displayName = "Menu";

Menu.metadata = {
  name: "Menu",
  category: "stroke/accountsAccess",
  tags: ["menu", "icon"],
  description: "Menu icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Menu;
