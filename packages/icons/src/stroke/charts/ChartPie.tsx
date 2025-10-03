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
        d="M21 12C21.552 12 22.005 11.551 21.95 11.002C21.7195 8.70618 20.7021 6.56071 19.0703 4.92933C17.4386 3.29795 15.2929 2.28105 12.997 2.05101C12.447 1.99601 11.999 2.44901 11.999 3.00101V11.001C11.999 11.2662 12.1044 11.5206 12.2919 11.7081C12.4795 11.8957 12.7338 12.001 12.999 12.001L21 12Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.21 15.89C20.5738 17.3945 19.5788 18.7202 18.3119 19.7513C17.0449 20.7824 15.5447 21.4874 13.9424 21.8048C12.3401 22.1221 10.6844 22.0421 9.12012 21.5718C7.55585 21.1014 6.1306 20.2551 4.969 19.1066C3.80739 17.9582 2.94479 16.5427 2.45661 14.9839C1.96843 13.4251 1.86954 11.7705 2.16857 10.1646C2.46761 8.55877 3.15547 7.05061 4.17202 5.77202C5.18857 4.49342 6.50286 3.4833 7.99998 2.82999"
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
