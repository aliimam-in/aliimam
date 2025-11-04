import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract01: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract01(
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
        d="M12 24L6 18C9.31465 21.3128 14.6872 21.3128 18.0019 18L12.0019 24H12ZM24 12L18 18C21.3128 14.6854 21.3128 9.31276 18 5.99811L24 11.9981V12ZM6 18L0 12L6 6C2.68724 9.31465 2.68724 14.6872 6 18.0019V18ZM6 6L12 0L18 6C14.6854 2.68724 9.31276 2.68724 5.99811 6H6Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract01.displayName = "Abstract01";

Abstract01.metadata = {
  name: "Abstract01",
  category: "shapes/abstract",
  tags: ["abstract", "01", "icon"],
  description: "Abstract01 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract01;
