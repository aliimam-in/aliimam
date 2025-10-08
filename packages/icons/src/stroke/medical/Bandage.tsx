import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bandage: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Bandage(
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
        d="M10 10.01H10.01M10 14.01H10.01M14 10.01H14.01M14 14.01H14.01M18 6V17.5M6 6V18M20 6H4C2.895 6 2 6.895 2 8V16C2 17.105 2.895 18 4 18H20C21.105 18 22 17.105 22 16V8C22 6.895 21.105 6 20 6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Bandage.displayName = "Bandage";

Bandage.metadata = {
  name: "Bandage",
  category: "stroke/medical",
  tags: ["bandage", "icon"],
  description: "Bandage icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bandage;
