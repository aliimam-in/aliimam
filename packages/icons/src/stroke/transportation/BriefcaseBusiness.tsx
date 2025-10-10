import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BriefcaseBusiness: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BriefcaseBusiness(
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
        d="M12 12H12.01M16 6V4C16 3.47 15.789 2.961 15.414 2.586 15.039 2.211 14.53 2 14 2H10C9.47 2 8.961 2.211 8.586 2.586 8.211 2.961 8 3.47 8 4V6M22 13C19.033 14.959 15.556 16.003 12 16.003 8.444 16.003 4.967 14.959 2 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 6H4C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BriefcaseBusiness.displayName = "BriefcaseBusiness";

BriefcaseBusiness.metadata = {
  name: "BriefcaseBusiness",
  category: "stroke/transportation",
  tags: ["briefcase", "business", "icon"],
  description: "BriefcaseBusiness icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BriefcaseBusiness;
