import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ellipse1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ellipse1(
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
      <g clipPath="url(#undefined-clip0_2068_771)">
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_771">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Ellipse1.displayName = "Ellipse1";

Ellipse1.metadata = {
  name: "Ellipse1",
  category: "shapes/ellipse",
  tags: ["ellipse", "icon"],
  description: "Ellipse1 icon from shapes/ellipse category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipse1;
