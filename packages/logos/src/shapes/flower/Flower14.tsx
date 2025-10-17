import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower14: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flower14(
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
      <g clipPath="url(#undefined-clip0_2068_575)">
        <path
          d="M7.30435 3.2693C9.00651 -1.08977 14.9935 -1.08977 16.6957 3.2693C17.1253 4.36965 18.1301 5.12023 19.2779 5.20026C23.8173 5.51679 25.6778 11.3822 22.1824 14.3855C21.2977 15.1457 20.9142 16.3619 21.1959 17.5134C22.3088 22.0628 17.4548 25.6775 13.5982 23.1876C12.6227 22.5577 11.3773 22.5577 10.4018 23.1876C6.54521 25.6775 1.69122 22.0628 2.80414 17.5134C3.0858 16.3619 2.70228 15.1457 1.81758 14.3855C-1.67782 11.3822 0.182708 5.51679 4.72214 5.20026C5.86986 5.12023 6.87467 4.36965 7.30435 3.2693Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_575">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flower14.displayName = "Flower14";

Flower14.metadata = {
  name: "Flower14",
  category: "shapes/flower",
  tags: ["flower", "14", "icon"],
  description: "Flower14 icon from shapes/flower category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower14;
