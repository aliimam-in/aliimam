import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower4: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower4(
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
      <g clipPath="url(#undefined-clip0_2068_585)">
        <path
          d="M20.5462 9.71009C22.682 10.1927 24 10.9386 24 12C24 13.0614 22.682 13.8073 20.5463 14.2899C22.1546 15.7758 22.9231 17.0808 22.3924 18C21.8617 18.9192 20.3473 18.9062 18.2563 18.2562C18.9063 20.3472 18.9193 21.8616 18.0001 22.3923C17.0809 22.923 15.7758 22.1545 14.29 20.5461C13.8074 22.6819 13.0614 24 12 24C10.9386 24 10.1927 22.682 9.71009 20.5463C8.22429 22.1545 6.91928 22.923 6.00012 22.3923C5.08093 21.8616 5.09396 20.3472 5.7439 18.2562C3.65296 18.9062 2.1385 18.9192 1.60781 18C1.07712 17.0808 1.84562 15.7758 3.45394 14.29C1.31811 13.8074 -1.80821e-07 13.0614 0 12C4.63951e-08 10.9386 1.31811 10.1926 3.45394 9.71004C1.84562 8.22422 1.07712 6.91918 1.60781 6C2.1385 5.08082 3.65296 5.09384 5.7439 5.74378C5.09396 3.65285 5.08093 2.13839 6.00012 1.6077C6.91928 1.07702 8.22429 1.84548 9.71009 3.45374C10.1927 1.31803 10.9386 0 12 0C13.0614 0 13.8074 1.31811 14.29 3.45394C15.7758 1.84554 17.0809 1.07699 18.0001 1.6077C18.9193 2.13839 18.9063 3.65285 18.2563 5.74378C20.3473 5.09384 21.8617 5.08082 22.3924 6C22.9231 6.91919 22.1546 8.22425 20.5462 9.71009Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_585">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower4.displayName = "Flower4";

Flower4.metadata = {
  name: "Flower4",
  category: "shapes/flower",
  tags: ["flower", "icon"],
  description: "Flower4 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower4;
