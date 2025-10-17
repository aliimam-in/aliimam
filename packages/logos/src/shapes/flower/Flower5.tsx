import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower5: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower5(
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
      <g clipPath="url(#undefined-clip0_2068_582)">
        <path
          d="M16.8474 7.15263C21.0602 7.75728 24 9.27361 24 12C24 14.7264 21.0602 16.2427 16.8474 16.8474C16.2427 21.0602 14.7264 24 12 24C9.27361 24 7.75728 21.0602 7.15263 16.8474C2.93978 16.2427 0 14.7264 0 12C2.48619e-07 9.27361 2.93978 7.75728 7.15263 7.15263C7.75728 2.93978 9.27361 0 12 0C14.7264 0 16.2427 2.93978 16.8474 7.15263Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_582">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower5.displayName = "Flower5";

Flower5.metadata = {
  name: "Flower5",
  category: "shapes/flower",
  tags: ["flower", "icon"],
  description: "Flower5 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower5;
