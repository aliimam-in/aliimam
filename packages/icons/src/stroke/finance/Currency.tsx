import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Currency: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Currency(
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
        d="M12 20C16.418 20 20 16.418 20 12 20 7.582 16.418 4 12 4 7.582 4 4 7.582 4 12 4 16.418 7.582 20 12 20ZM3 3 6 6M21 3 18 6M3 21 6 18M21 21 18 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Currency.displayName = "Currency";

Currency.metadata = {
  name: "Currency",
  category: "stroke/finance",
  tags: ["currency", "icon"],
  description: "Currency icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Currency;
