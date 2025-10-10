import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Pentagon: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Pentagon(
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
        d="M10.8299 2.38001C11.1706 2.1343 11.5799 2.00208 11.9999 2.00208C12.4199 2.00208 12.8293 2.1343 13.1699 2.38001L21.1699 8.12001C21.5151 8.36867 21.772 8.72089 21.9032 9.12552C22.0345 9.53014 22.0334 9.96608 21.8999 10.37L18.8599 19.63C18.7275 20.0291 18.4726 20.3763 18.1315 20.6223C17.7904 20.8682 17.3805 21.0004 16.9599 21H7.03994C6.61942 21.0004 6.20948 20.8682 5.86839 20.6223C5.52729 20.3763 5.2724 20.0291 5.13994 19.63L2.09994 10.37C1.96652 9.96608 1.96537 9.53014 2.09664 9.12552C2.22792 8.72089 2.48479 8.36867 2.82994 8.12001L10.8299 2.38001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Pentagon.displayName = "Pentagon";

Pentagon.metadata = {
  name: "Pentagon",
  category: "stroke/shapes",
  tags: ["pentagon", "icon"],
  description: "Pentagon icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pentagon;
