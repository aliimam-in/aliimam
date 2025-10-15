import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UnitedKingdom: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UnitedKingdom(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#071b65"
      />
      <path
        d="M5.10102 4H5.00002C3.01902 4 1.38502 5.444 1.06702 7.334L26.899 28H27C28.981 28 30.615 26.556 30.933 24.666L5.10102 4Z"
        fill="#fff"
      />
      <path
        d="M22.25 19H19.75L29.684 26.947C30.071 26.594 30.388 26.17 30.613 25.69L22.25 19ZM1.387 6.309 9.75 13H12.25L2.316 5.053C1.929 5.406 1.612 5.829 1.387 6.309Z"
        fill="#b92932"
      />
      <path
        d="M5.00002 28H5.10102L30.933 7.334C30.615 5.443 28.981 4 27 4H26.899L1.06702 24.666C1.38502 26.557 3.01902 28 5.00002 28Z"
        fill="#fff"
      />
      <path d="M19 4H13V28H19V4Z" fill="#fff" />
      <path d="M31 13H1V19H31V13Z" fill="#fff" />
      <path d="M18 4H14V28H18V4Z" fill="#b92932" />
      <path
        d="M31 18V14L1 14V18H31ZM28.222 4.21 19 11.586V13H19.75L29.693 5.06C29.274 4.676 28.775 4.389 28.222 4.21ZM2.328 26.957C2.742 27.331 3.232 27.613 3.775 27.789L13 20.409V19.001H12.25L2.328 26.957Z"
        fill="#b92932"
      />
    </svg>
  );
});

UnitedKingdom.displayName = "UnitedKingdom";

UnitedKingdom.metadata = {
  name: "UnitedKingdom",
  category: "symbols/flags",
  tags: ["united", "kingdom", "icon"],
  description: "UnitedKingdom icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UnitedKingdom;
