import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Terminal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Terminal(
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
        d="M12 19H20M4 17 10 11 4 5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Terminal.displayName = "Terminal";

Terminal.metadata = {
  name: "Terminal",
  category: "stroke/codingDevelopment",
  tags: ["terminal", "icon"],
  description: "Terminal icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Terminal;
