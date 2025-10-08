import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SwissFranc: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SwissFranc(
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
        d="M10 21V3H18M6 16H15M10 9.5H17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SwissFranc.displayName = "SwissFranc";

SwissFranc.metadata = {
  name: "SwissFranc",
  category: "stroke/finance",
  tags: ["swiss", "franc", "icon"],
  description: "SwissFranc icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SwissFranc;
