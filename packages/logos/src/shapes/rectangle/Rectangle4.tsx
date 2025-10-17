import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Rectangle4: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Rectangle4(
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
        d="M23.9999 12L12 0L0 12L12 23.9999L23.9999 12ZM16.7999 11.1998C16.7999 8.99073 15.0091 7.19994 12.8 7.19994H11.1998C8.99073 7.19994 7.19994 8.99074 7.19994 11.1998V12.8C7.19994 15.0091 8.99074 16.7999 11.1998 16.7999H12.8C15.0091 16.7999 16.7999 15.0091 16.7999 12.8V11.1998Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

Rectangle4.displayName = "Rectangle4";

Rectangle4.metadata = {
  name: "Rectangle4",
  category: "shapes/rectangle",
  tags: ["rectangle", "icon"],
  description: "Rectangle4 icon from shapes/rectangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Rectangle4;
