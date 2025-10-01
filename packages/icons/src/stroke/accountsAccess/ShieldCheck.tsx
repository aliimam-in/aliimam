import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ShieldCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ShieldCheck(
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
        d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V5.99999C4 5.73478 4.10536 5.48042 4.29289 5.29289C4.48043 5.10535 4.73478 4.99999 5 4.99999C7 4.99999 9.5 3.79999 11.24 2.27999C11.4519 2.09899 11.7214 1.99954 12 1.99954C12.2786 1.99954 12.5481 2.09899 12.76 2.27999C14.51 3.80999 17 4.99999 19 4.99999C19.2652 4.99999 19.5196 5.10535 19.7071 5.29289C19.8946 5.48042 20 5.73478 20 5.99999V13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ShieldCheck.displayName = "ShieldCheck";

ShieldCheck.metadata = {
  name: "ShieldCheck",
  category: "stroke/accountsAccess",
  tags: ["shield", "check", "icon"],
  description: "ShieldCheck icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShieldCheck;
