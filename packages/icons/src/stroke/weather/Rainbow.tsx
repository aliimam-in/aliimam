import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rainbow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rainbow(
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
        d="M22 17C22 14.3478 20.9464 11.8043 19.0711 9.92893C17.1957 8.05357 14.6522 7 12 7C9.34784 7 6.8043 8.05357 4.92893 9.92893C3.05357 11.8043 2 14.3478 2 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17C6 15.4087 6.63214 13.8826 7.75736 12.7574C8.88258 11.6321 10.4087 11 12 11C13.5913 11 15.1174 11.6321 16.2426 12.7574C17.3679 13.8826 18 15.4087 18 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 17C10 16.4696 10.2107 15.9609 10.5858 15.5858C10.9609 15.2107 11.4696 15 12 15C12.5304 15 13.0391 15.2107 13.4142 15.5858C13.7893 15.9609 14 16.4696 14 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Rainbow.displayName = "Rainbow";

Rainbow.metadata = {
  name: "Rainbow",
  category: "stroke/weather",
  tags: ["rainbow", "icon"],
  description: "Rainbow icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rainbow;
