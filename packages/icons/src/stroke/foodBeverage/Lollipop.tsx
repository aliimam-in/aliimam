import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lollipop: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Lollipop(
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
        d="M11 19C15.418 19 19 15.418 19 11 19 6.582 15.418 3 11 3 6.582 3 3 6.582 3 11 3 15.418 6.582 19 11 19ZM21 21 16.7 16.7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11C11 11.5304 11.2107 12.0391 11.5858 12.4142C11.9609 12.7893 12.4696 13 13 13C13.5304 13 14.0391 12.7893 14.4142 12.4142C14.7893 12.0391 15 11.5304 15 11C15 9.93913 14.5786 8.92172 13.8284 8.17157C13.0783 7.42143 12.0609 7 11 7C9.93913 7 8.92172 7.42143 8.17157 8.17157C7.42143 8.92172 7 9.93913 7 11C7 12.5913 7.63214 14.1174 8.75736 15.2426C9.88258 16.3679 11.4087 17 13 17C14.5913 17 16.1174 16.3679 17.2426 15.2426C18.3679 14.1174 19 12.5913 19 11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Lollipop.displayName = "Lollipop";

Lollipop.metadata = {
  name: "Lollipop",
  category: "stroke/foodBeverage",
  tags: ["lollipop", "icon"],
  description: "Lollipop icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lollipop;
