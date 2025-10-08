import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BanknoteX: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BanknoteX(
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
        d="M13 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V8C2 7.47 2.211 6.961 2.586 6.586 2.961 6.211 3.47 6 4 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V13M17 17 22 22M18 12H18.01M22 17 17 22M6 12H6.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BanknoteX.displayName = "BanknoteX";

BanknoteX.metadata = {
  name: "BanknoteX",
  category: "stroke/finance",
  tags: ["banknote", "icon"],
  description: "BanknoteX icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BanknoteX;
