import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Triangle5: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Triangle5(
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
      <g clipPath="url(#undefined-clip0_2068_227)">
        <path
          d="M6.53046 6.13274C8.36138 2.63933 9.27684 0.892628 10.4875 0.334406C11.4546 -0.111469 12.5454 -0.111469 13.5125 0.334406C14.7232 0.892628 15.6386 2.63933 17.4695 6.13274L21.4293 13.6879C23.2413 17.1453 24.1474 19.0052 23.9804 20.422C23.8471 21.5539 23.423 22.4485 22.5905 23.1376C21.5485 24 19.6056 24 15.9597 24H8.04029C4.3944 24 2.45145 24 1.40946 23.1376C0.576985 22.4485 0.152895 21.5539 0.0195516 20.422C-0.147352 19.0052 0.758681 17.1453 2.57075 13.6879L6.53046 6.13274Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_227">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Triangle5.displayName = "Triangle5";

Triangle5.metadata = {
  name: "Triangle5",
  category: "shapes/triangle",
  tags: ["triangle", "icon"],
  description: "Triangle5 icon from shapes/triangle category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Triangle5;
