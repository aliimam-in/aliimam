import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Euro: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Euro(
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
          d="M4 10H16M4 14H13M19 6C17.577 4.708 15.722 3.994 13.8 4 12.763 4.013 11.738 4.23 10.784 4.639 9.831 5.049 8.967 5.641 8.243 6.384 7.519 7.127 6.948 8.006 6.563 8.969 6.178 9.933 5.987 10.963 6 12 6 16.4 9.5 20 13.8 20 15.8 20 17.6 19.2 19 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Euro.displayName = "Euro";

Euro.metadata = {
  name: "Euro",
  category: "stroke/finance",
  tags: ["euro", "icon"],
  description: "Euro icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Euro;
