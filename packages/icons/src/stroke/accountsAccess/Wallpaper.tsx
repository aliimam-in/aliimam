import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Wallpaper: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Wallpaper(
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
        d="M12 17V21M8 21H16M9 17 15.1 10.9C15.476 10.532 15.981 10.327 16.507 10.328 17.033 10.33 17.537 10.539 17.91 10.91L22 15M8 11C9.105 11 10 10.105 10 9 10 7.895 9.105 7 8 7 6.895 7 6 7.895 6 9 6 10.105 6.895 11 8 11Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Wallpaper.displayName = "Wallpaper";

Wallpaper.metadata = {
  name: "Wallpaper",
  category: "stroke/accountsAccess",
  tags: ["wallpaper", "icon"],
  description: "Wallpaper icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wallpaper;
