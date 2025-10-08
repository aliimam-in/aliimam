import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleDollarSign: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleDollarSign(
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8H10C9.47 8 8.961 8.211 8.586 8.586 8.211 8.961 8 9.47 8 10 8 10.53 8.211 11.039 8.586 11.414 8.961 11.789 9.47 12 10 12H14C14.53 12 15.039 12.211 15.414 12.586 15.789 12.961 16 13.47 16 14 16 14.53 15.789 15.039 15.414 15.414 15.039 15.789 14.53 16 14 16H8M12 18V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleDollarSign.displayName = "CircleDollarSign";

CircleDollarSign.metadata = {
  name: "CircleDollarSign",
  category: "stroke/finance",
  tags: ["circle", "dollar", "sign", "icon"],
  description: "CircleDollarSign icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleDollarSign;
