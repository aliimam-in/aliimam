import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MenuProps extends IconProps {
  type?: "stroke";
}

export const Menu: IconComponent<MenuProps> = React.forwardRef<
  SVGSVGElement,
  MenuProps
>(function Menu(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
  }

  if (type === "stroke") {
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
  }

  console.error(`Menu doesn't support ${type}`);
  return null;
});

Menu.displayName = "Menu";

Menu.metadata = {
  name: "Menu",
  category: "stroke/layout",
  tags: ["menu", "icon"],
  description: "Menu icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Menu;
