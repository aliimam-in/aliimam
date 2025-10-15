import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Vanuatu: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Vanuatu(
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
      viewBox="0 0 32 32"
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
        d="M1 24C1 26.2092 2.7908 28 5 28H27C29.2092 28 31 26.2092 31 24V15H1V24Z"
        fill="#009641"
      />
      <path
        d="M27 4H5C2.7908 4 1 5.7908 1 8V16H31V8C31 5.7908 29.2092 4 27 4Z"
        fill="#d30931"
      />
      <path
        d="M31 13.9999H13.5L2.3157 5.05249C1.5128 5.78409 1 6.82799 1 7.99989V23.9999C1 25.1718 1.5128 26.2157 2.3157 26.9473L13.5 17.9999H31V13.9999Z"
        fill="currentColor"
      />
      <path
        d="M1.41903 6.25562C1.26213 6.57162 1.14763 6.90902 1.07983 7.26622L11.998 16.0001L1.07983 24.7336C1.14753 25.0907 1.26203 25.4282 1.41893 25.7442L12.9747 16.5001H31.0001V15.5001H12.9746L1.41903 6.25562Z"
        fill="#fdcf09"
      />
      <path
        d="M4.80404 17.7603V18.8088C5.71624 18.8088 7.50644 18.1098 7.50644 15.8592C7.50644 13.6086 5.72754 13.1909 5.02574 13.1909C4.22594 13.1909 2.68994 13.7889 2.68994 15.4415C2.68994 17.2829 4.42054 17.4534 4.76144 17.4534C5.10234 17.4534 6.38114 17.1465 6.23624 15.7655C6.23624 16.1577 5.79294 16.9846 4.86374 16.9846C3.93454 16.9846 3.35484 16.2941 3.35484 15.6121C3.35484 14.9301 3.91744 14.0179 4.89784 14.0179C5.87824 14.0179 6.59424 14.8874 6.59424 15.7655C6.59424 16.6436 5.90374 17.7603 4.80404 17.7603Z"
        fill="#fdcf09"
      />
    </svg>
  );
});

Vanuatu.displayName = "Vanuatu";

Vanuatu.metadata = {
  name: "Vanuatu",
  category: "symbols/flags",
  tags: ["vanuatu", "icon"],
  description: "Vanuatu icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Vanuatu;
