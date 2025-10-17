import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower9: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower9(
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
        d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C2.68629 12 0 14.6863 0 18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0H6Z"
        fill="currentColor"
      />
    </svg>
  );
});

Flower9.displayName = "Flower9";

Flower9.metadata = {
  name: "Flower9",
  category: "shapes/flower",
  tags: ["flower", "icon"],
  description: "Flower9 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower9;
