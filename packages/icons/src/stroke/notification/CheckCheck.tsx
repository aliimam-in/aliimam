import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CheckCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CheckCheck(
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
        d="M18 6 7 17 2 12M22 10 14.5 17.5 13 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CheckCheck.displayName = "CheckCheck";

CheckCheck.metadata = {
  name: "CheckCheck",
  category: "stroke/notification",
  tags: ["check", "icon"],
  description: "CheckCheck icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CheckCheck;
