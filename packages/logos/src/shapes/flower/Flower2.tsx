import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower2(
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
      <g clipPath="url(#undefined-clip0_2068_588)">
        <path
          d="M12.7303 12.2492C27.7566 17.3662 21.7384 26.0491 12.4514 12.6513C21.7384 26.0491 12 29.3656 12 12.8049C12 29.3656 2.26249 26.0491 11.5486 12.6513C2.26249 26.0491 -3.75657 17.3662 11.2697 12.2492C-3.75657 17.3662 -3.75657 6.63091 11.2697 11.7515C-3.75657 6.63355 2.26248 -2.04933 11.5486 11.3494C2.26248 -2.04933 12 -5.36587 12 11.1958C12 -5.36587 21.7384 -2.04933 12.4514 11.3494C21.7384 -2.04933 27.7566 6.63355 12.7303 11.7515C27.7566 6.63355 27.7566 17.3662 12.7303 12.2492Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_588">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower2.displayName = "Flower2";

Flower2.metadata = {
  name: "Flower2",
  category: "shapes/flower",
  tags: ["flower", "icon"],
  description: "Flower2 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower2;
