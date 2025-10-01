import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ShieldUser: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ShieldUser(
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
        d="M20 13C20 18 16.5 20.5 12.34 21.95C12.1222 22.0238 11.8855 22.0203 11.67 21.94C7.5 20.5 4 18 4 13V6.00002C4 5.73481 4.10536 5.48045 4.29289 5.29292C4.48043 5.10538 4.73478 5.00002 5 5.00002C7 5.00002 9.5 3.80002 11.24 2.28002C11.4519 2.09902 11.7214 1.99957 12 1.99957C12.2786 1.99957 12.5481 2.09902 12.76 2.28002C14.51 3.81002 17 5.00002 19 5.00002C19.2652 5.00002 19.5196 5.10538 19.7071 5.29292C19.8946 5.48045 20 5.73481 20 6.00002V13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.376 18.91C6.803 17.762 7.57 16.772 8.576 16.074 9.582 15.375 10.777 15 12.002 15.001 13.226 15.001 14.421 15.376 15.427 16.075 16.432 16.775 17.199 17.765 17.625 18.913M12 15C14.209 15 16 13.209 16 11 16 8.791 14.209 7 12 7 9.791 7 8 8.791 8 11 8 13.209 9.791 15 12 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ShieldUser.displayName = "ShieldUser";

ShieldUser.metadata = {
  name: "ShieldUser",
  category: "stroke/accountsAccess",
  tags: ["shield", "user", "icon"],
  description: "ShieldUser icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShieldUser;
