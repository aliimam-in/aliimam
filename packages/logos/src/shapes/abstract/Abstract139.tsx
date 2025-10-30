import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract139: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract139(
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
      viewBox="0 0 20 24"
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
        d="M10 0L10.3746 9.70204C10.4018 10.4069 11.1273 10.8416 11.7291 10.5146L20 6L12.1018 11.1874C11.5273 11.5653 11.5273 12.4347 12.1018 12.8126L20 18L11.7291 13.4854C11.1273 13.1584 10.4018 13.5931 10.3746 14.298L10 24L9.62544 14.298C9.59817 13.5931 8.87273 13.1584 8.27091 13.4854L0 18L7.89817 12.8126C8.47272 12.4347 8.47272 11.5653 7.89817 11.1874L0 6L8.27091 10.5146C8.87273 10.8416 9.59817 10.4069 9.62544 9.70204L10 0Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract139.displayName = "Abstract139";

Abstract139.metadata = {
  name: "Abstract139",
  category: "shapes/abstract",
  tags: ["abstract", "139", "icon"],
  description: "Abstract139 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract139;
