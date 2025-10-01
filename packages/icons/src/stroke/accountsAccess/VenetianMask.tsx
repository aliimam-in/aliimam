import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const VenetianMask: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function VenetianMask(
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
        d="M18 11C16.5 11 15.5 11.5 15 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 6C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21071 6.96086 2 7.46957 2 8V12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17C8.84771 17.0688 10.6145 17.7756 12 19C13.3855 17.7756 15.1523 17.0688 17 17C18.3261 17 19.5979 16.4732 20.5355 15.5355C21.4732 14.5979 22 13.3261 22 12V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H17C15.1523 6.06882 13.3855 6.77556 12 8C10.6145 6.77556 8.84771 6.06882 7 6H4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 11C7.5 11 8.5 11.5 9 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

VenetianMask.displayName = "VenetianMask";

VenetianMask.metadata = {
  name: "VenetianMask",
  category: "stroke/accountsAccess",
  tags: ["venetian", "mask", "icon"],
  description: "VenetianMask icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VenetianMask;
