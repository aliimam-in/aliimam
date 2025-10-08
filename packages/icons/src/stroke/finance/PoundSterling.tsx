import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PoundSterling: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PoundSterling(
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
        d="M18 7C18 1.667 10 1.667 10 7M10 7V21M6 21H18M6 13H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PoundSterling.displayName = "PoundSterling";

PoundSterling.metadata = {
  name: "PoundSterling",
  category: "stroke/finance",
  tags: ["pound", "sterling", "icon"],
  description: "PoundSterling icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PoundSterling;
