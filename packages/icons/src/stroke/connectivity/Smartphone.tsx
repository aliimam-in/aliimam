import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Smartphone: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Smartphone(
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
        d="M17 2H7C5.895 2 5 2.895 5 4V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V4C19 2.895 18.105 2 17 2ZM12 18H12.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Smartphone.displayName = "Smartphone";

Smartphone.metadata = {
  name: "Smartphone",
  category: "stroke/connectivity",
  tags: ["smartphone", "icon"],
  description: "Smartphone icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Smartphone;
