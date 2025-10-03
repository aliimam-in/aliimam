import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChartArea: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChartArea(
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
        d="M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.207C7.00003 11.0746 7.05253 10.9477 7.146 10.854L9.146 8.854C9.19245 8.80744 9.24762 8.7705 9.30837 8.74529C9.36911 8.72008 9.43423 8.70711 9.5 8.70711C9.56577 8.70711 9.63089 8.72008 9.69163 8.74529C9.75238 8.7705 9.80755 8.80744 9.854 8.854L13.146 12.146C13.1924 12.1926 13.2476 12.2295 13.3084 12.2547C13.3691 12.2799 13.4342 12.2929 13.5 12.2929C13.5658 12.2929 13.6309 12.2799 13.6916 12.2547C13.7524 12.2295 13.8076 12.1926 13.854 12.146L18.146 7.854C18.2159 7.78396 18.3049 7.73621 18.402 7.71681C18.499 7.69741 18.5996 7.70723 18.691 7.74503C18.7824 7.78282 18.8606 7.84689 18.9156 7.92912C18.9706 8.01136 19 8.10807 19 8.207V16C19 16.2652 18.8946 16.5196 18.7071 16.7071C18.5196 16.8946 18.2652 17 18 17H8C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16V11.207Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChartArea.displayName = "ChartArea";

ChartArea.metadata = {
  name: "ChartArea",
  category: "stroke/charts",
  tags: ["chart", "area", "icon"],
  description: "ChartArea icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChartArea;
