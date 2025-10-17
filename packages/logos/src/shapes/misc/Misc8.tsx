import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Misc8: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Misc8(
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
          d="M3.59005 0.494226C0.702934 1.15943 -0.203083 3.15505 0.0367393 4.95109C0.274399 6.73093 2.51281 8.31658 5.79507 8.21379C4.90124 8.27301 2.08871 9.1525 1.51725 11.2705C0.924955 13.4656 2.24959 14.8213 3.88616 15.5278C6.45406 16.6362 9.28999 16.633 11.7329 16.5C10.2315 17.2093 8.08147 18.5389 7.80967 20.5833C7.53788 22.6277 9.58633 24.5745 13.7319 23.8428C17.8775 23.111 25.7464 20.1 23.6518 14.9291C22.8119 12.8556 20.0603 12.0737 18.4698 11.8026C17.7813 11.6853 15.7308 11.4035 12.8437 11.4035C16.3051 11.1208 21.6824 9.67399 21.9491 6.41451C22.4826 -0.104426 8.75578 -0.695975 3.59005 0.494226Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Misc8.displayName = "Misc8";

Misc8.metadata = {
  name: "Misc8",
  category: "shapes/misc",
  tags: ["misc", "icon"],
  description: "Misc8 icon from shapes/misc category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Misc8;
