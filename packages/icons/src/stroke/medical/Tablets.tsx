import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tablets: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Tablets(
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
        d="M7 12C9.761 12 12 9.761 12 7 12 4.239 9.761 2 7 2 4.239 2 2 4.239 2 7 2 9.761 4.239 12 7 12ZM17 22C19.761 22 22 19.761 22 17 22 14.239 19.761 12 17 12 14.239 12 12 14.239 12 17 12 19.761 14.239 22 17 22ZM12 17H22M3.46 10.54 10.54 3.46"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Tablets.displayName = "Tablets";

Tablets.metadata = {
  name: "Tablets",
  category: "stroke/medical",
  tags: ["tablets", "icon"],
  description: "Tablets icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tablets;
