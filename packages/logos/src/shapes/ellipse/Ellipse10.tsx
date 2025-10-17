import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ellipse10: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ellipse10(
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
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.6 5.88C18.6 5.6149 18.3851 5.4 18.12 5.4H5.88C5.6149 5.4 5.4 5.6149 5.4 5.88V18.12C5.4 18.3851 5.6149 18.6 5.88 18.6H18.12C18.3851 18.6 18.6 18.3851 18.6 18.12V5.88Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

Ellipse10.displayName = "Ellipse10";

Ellipse10.metadata = {
  name: "Ellipse10",
  category: "shapes/ellipse",
  tags: ["ellipse", "10", "icon"],
  description: "Ellipse10 icon from shapes/ellipse category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipse10;
