import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ellipse11: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ellipse11(
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
        d="M12.6 23.877C18.949 23.566 24 18.343 24 11.946 24 9.983 23.524 8.13 22.682 6.496 19.302 8.439 17.612 9.41 16.334 10.719 14.808 12.282 13.697 14.199 13.1 16.296 12.6 18.052 12.6 19.994 12.6 23.877ZM11.4 23.877C5.051 23.566 0 18.343 0 11.946 0 9.983.476 8.13 1.319 6.496 4.698 8.439 6.388 9.41 7.666 10.719 9.192 12.282 10.304 14.199 10.9 16.296 11.4 18.052 11.4 19.994 11.4 23.877ZM1.919 5.462C5.299 7.405 6.988 8.376 8.767 8.823 10.889 9.357 13.111 9.357 15.234 8.823 17.012 8.376 18.701 7.405 22.081 5.462 19.943 2.175 16.227 0 12 0 7.773 0 4.057 2.175 1.919 5.462Z"
        fill="currentColor"
      />
    </svg>
  );
});

Ellipse11.displayName = "Ellipse11";

Ellipse11.metadata = {
  name: "Ellipse11",
  category: "shapes/ellipse",
  tags: ["ellipse", "11", "icon"],
  description: "Ellipse11 icon from shapes/ellipse category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipse11;
