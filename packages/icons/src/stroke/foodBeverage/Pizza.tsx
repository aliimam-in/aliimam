import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Pizza: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Pizza(
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
          d="M12 14 11 15M13.75 18.25 12.5 19.67M17.775 5.654C14.796 6.28 12.064 7.759 9.912 9.911 7.759 12.063 6.28 14.795 5.654 17.774M18.8 9.3C17.779 9.578 16.91 10.251 16.385 11.17 15.86 12.089 15.722 13.179 16 14.2 16.279 15.221 16.951 16.09 17.87 16.615 18.789 17.14 19.879 17.279 20.9 17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.964 20.732C22.0117 20.9028 22.0131 21.0831 21.9681 21.2546C21.9231 21.4261 21.8333 21.5826 21.7079 21.7079C21.5826 21.8333 21.4261 21.9231 21.2546 21.9681C21.0831 22.0131 20.9028 22.0117 20.732 21.964L2.73201 16.964C2.60546 16.9288 2.4871 16.8689 2.38368 16.788C2.28026 16.707 2.19381 16.6064 2.12927 16.492C2.06473 16.3776 2.02337 16.2516 2.00753 16.1212C1.9917 15.9908 2.00172 15.8585 2.03701 15.732C2.94525 12.4622 4.68359 9.48285 7.08322 7.08322C9.48285 4.68359 12.4622 2.94525 15.732 2.03701C15.8585 2.00172 15.9908 1.9917 16.1212 2.00753C16.2516 2.02337 16.3776 2.06473 16.492 2.12927C16.6064 2.19381 16.707 2.28026 16.788 2.38368C16.8689 2.4871 16.9288 2.60546 16.964 2.73201L21.964 20.732Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Pizza.displayName = "Pizza";

Pizza.metadata = {
  name: "Pizza",
  category: "stroke/foodBeverage",
  tags: ["pizza", "icon"],
  description: "Pizza icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pizza;
