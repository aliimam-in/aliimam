import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Transgender: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Transgender(
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
        d="M12 16V22M14 20H10M18 2H22V6M2 2 9.17 9.17M2 5.355V2H5.357M22 2 14.83 9.17M8 5 5 8M12 16C14.209 16 16 14.209 16 12 16 9.791 14.209 8 12 8 9.791 8 8 9.791 8 12 8 14.209 9.791 16 12 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Transgender.displayName = "Transgender";

Transgender.metadata = {
  name: "Transgender",
  category: "stroke/accessibility",
  tags: ["transgender", "icon"],
  description: "Transgender icon from stroke/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Transgender;
