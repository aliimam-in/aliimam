import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Shuffle: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Shuffle(
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
        d="M18 14 22 18 18 22M18 2 22 6 18 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 18H3.973C4.619 18.004 5.257 17.852 5.832 17.556 6.407 17.26 6.901 16.829 7.273 16.3L12.727 7.7C13.099 7.171 13.593 6.74 14.168 6.444 14.743 6.148 15.381 5.996 16.027 6H22M2 6H3.972C4.717 5.995 5.45 6.198 6.086 6.587 6.722 6.976 7.237 7.534 7.572 8.2M22 18H15.959C15.304 17.993 14.66 17.826 14.084 17.512 13.509 17.198 13.02 16.747 12.659 16.2L12.3 15.75"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Shuffle.displayName = "Shuffle";

Shuffle.metadata = {
  name: "Shuffle",
  category: "stroke/arrows",
  tags: ["shuffle", "icon"],
  description: "Shuffle icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Shuffle;
