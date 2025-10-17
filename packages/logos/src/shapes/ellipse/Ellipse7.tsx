import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ellipse7: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ellipse7(
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
        d="M24 12C24 18.6274 18.6274 24 12 24C16.5066 24 20.16 20.3466 20.16 15.84C20.16 11.3334 16.5066 7.68 12 7.68C7.49336 7.68 3.84 11.3334 3.84 15.84C3.84 20.3466 7.49336 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
        fill="currentColor"
      />
      <path
        d="M12 24C8.81884 24 6.24 21.4212 6.24 18.24C6.24 15.0588 8.81884 12.48 12 12.48C15.1812 12.48 17.76 15.0588 17.76 18.24C17.76 21.4212 15.1812 24 12 24Z"
        fill="currentColor"
      />
    </svg>
  );
});

Ellipse7.displayName = "Ellipse7";

Ellipse7.metadata = {
  name: "Ellipse7",
  category: "shapes/ellipse",
  tags: ["ellipse", "icon"],
  description: "Ellipse7 icon from shapes/ellipse category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipse7;
