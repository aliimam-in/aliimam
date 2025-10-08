import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ChartPieProps extends IconProps {
  type?: "stroke";
}

export const ChartPie: IconComponent<ChartPieProps> = React.forwardRef<
  SVGSVGElement,
  ChartPieProps
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M21 12C21.552 12 22.005 11.551 21.95 11.002C21.7194 8.70621 20.7021 6.56074 19.0703 4.92936C17.4386 3.29798 15.2929 2.28108 12.997 2.05104C12.447 1.99604 11.999 2.44904 11.999 3.00104V11.001C11.999 11.2663 12.1043 11.5206 12.2919 11.7081C12.4794 11.8957 12.7338 12.001 12.999 12.001L21 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.21 15.89C20.5738 17.3944 19.5788 18.7202 18.3119 19.7513C17.045 20.7823 15.5448 21.4874 13.9424 21.8047C12.3401 22.1221 10.6844 22.0421 9.12015 21.5718C7.55588 21.1014 6.13063 20.255 4.96903 19.1066C3.80742 17.9582 2.94482 16.5427 2.45664 14.9839C1.96846 13.4251 1.86957 11.7704 2.1686 10.1646C2.46764 8.55874 3.1555 7.05058 4.17205 5.77199C5.1886 4.49339 6.50289 3.48327 8.00001 2.82996"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M21 12C21.552 12 22.005 11.551 21.95 11.002C21.7195 8.70621 20.7021 6.56074 19.0703 4.92936C17.4386 3.29798 15.2929 2.28108 12.997 2.05104C12.447 1.99604 11.999 2.44904 11.999 3.00104V11.001C11.999 11.2663 12.1044 11.5206 12.2919 11.7081C12.4795 11.8957 12.7338 12.001 12.999 12.001L21 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.21 15.89C20.5739 17.3944 19.5788 18.7202 18.3119 19.7513C17.045 20.7823 15.5448 21.4874 13.9425 21.8047C12.3401 22.1221 10.6845 22.0421 9.12018 21.5718C7.55591 21.1014 6.13066 20.255 4.96906 19.1066C3.80745 17.9582 2.94485 16.5427 2.45667 14.9839C1.96849 13.4251 1.8696 11.7704 2.16863 10.1646C2.46767 8.55874 3.15553 7.05058 4.17208 5.77199C5.18863 4.49339 6.50292 3.48327 8.00004 2.82996"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ChartPie doesn't support ${type}`);
  return null;
});

ChartPie.displayName = "ChartPie";

ChartPie.metadata = {
  name: "ChartPie",
  category: "stroke/files",
  tags: ["chart", "pie", "icon"],
  description: "ChartPie icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartPie;
