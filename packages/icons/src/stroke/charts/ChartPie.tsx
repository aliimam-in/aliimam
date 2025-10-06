import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartPie: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartPie(
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
        d="M21 12C21.552 12 22.005 11.551 21.95 11.002C21.7195 8.70615 20.7021 6.56068 19.0703 4.9293C17.4386 3.29792 15.2929 2.28102 12.997 2.05098C12.447 1.99598 11.999 2.44898 11.999 3.00098V11.001C11.999 11.2662 12.1044 11.5206 12.2919 11.7081C12.4795 11.8956 12.7338 12.001 12.999 12.001L21 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.21 15.89C20.5739 17.3945 19.5788 18.7202 18.3119 19.7513C17.045 20.7824 15.5448 21.4874 13.9425 21.8048C12.3401 22.1222 10.6845 22.0422 9.12018 21.5718C7.55591 21.1015 6.13066 20.2551 4.96906 19.1067C3.80745 17.9583 2.94485 16.5428 2.45667 14.984C1.96849 13.4252 1.8696 11.7705 2.16863 10.1647C2.46767 8.5588 3.15553 7.05064 4.17208 5.77205C5.18863 4.49345 6.50292 3.48333 8.00004 2.83002"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartPie.displayName = "ChartPie";

ChartPie.metadata = {
  name: "ChartPie",
  category: "stroke/charts",
  tags: ["chart", "pie", "icon"],
  description: "ChartPie icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartPie;
