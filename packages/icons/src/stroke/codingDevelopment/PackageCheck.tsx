import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PackageCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PackageCheck(
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
        d="M16 16L18 18L22 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 10V8C21 7.649 20.907 7.305 20.732 7.001 20.556 6.698 20.304 6.445 20 6.27L13 2.27C12.696 2.094 12.351 2.002 12 2.002 11.649 2.002 11.304 2.094 11 2.27L4 6.27C3.696 6.445 3.444 6.698 3.268 7.001 3.093 7.305 3 7.649 3 8V16C3 16.351 3.093 16.695 3.268 16.999 3.444 17.303 3.696 17.555 4 17.73L11 21.73C11.304 21.906 11.649 21.998 12 21.998 12.351 21.998 12.696 21.906 13 21.73L15 20.59M7.5 4.27 16.5 9.42"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.29 7 12 12 20.71 7M12 22V12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PackageCheck.displayName = "PackageCheck";

PackageCheck.metadata = {
  name: "PackageCheck",
  category: "stroke/codingDevelopment",
  tags: ["package", "check", "icon"],
  description: "PackageCheck icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PackageCheck;
