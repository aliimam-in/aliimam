import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SouthAfrica: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SouthAfrica(
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
        d="M5 28H27C29.209 28 31 26.209 31 24V16H1V24C1 26.209 2.791 28 5 28Z"
        fill="#030a85"
      />
      <path
        d="M31 8C31 5.791 29.209 4 27 4H5C2.791 4 1 5.791 1 8V17H31V8Z"
        fill="#d04839"
      />
      <path
        d="M2.271 26.9111L15 16.0001L2.271 5.08911C1.493 5.81911 1 6.84911 1 8.00011V24.0001C1 25.1511 1.493 26.1811 2.271 26.9111Z"
        fill="currentColor"
      />
      <path
        d="M5.61 4H5C3.942 4 2.986 4.419 2.271 5.089L15 16L2.271 26.911C2.986 27.582 3.942 28 5 28H5.61L16.11 19H31V13H16.11L5.61 4Z"
        fill="#fff"
      />
      <path
        d="M2.27103 5.08911C1.50303 5.80911 1.01703 6.82211 1.00403 7.95511L10.39 16.0001L1.00503 24.0451C1.01803 25.1781 1.50403 26.1911 2.27203 26.9111L15.001 16.0001L2.27103 5.08911Z"
        fill="#f5bd45"
      />
      <path
        d="M4.17505 4.08691C2.75605 4.38491 1.63105 5.44091 1.20105 6.80691L11.926 15.9999L1.20105 25.1929C1.63005 26.5589 2.75605 27.6149 4.17505 27.9129L15.74 17.9999H31V13.9999H15.74L4.17505 4.08691Z"
        fill="#33764c"
      />
    </svg>
  );
});

SouthAfrica.displayName = "SouthAfrica";

SouthAfrica.metadata = {
  name: "SouthAfrica",
  category: "symbols/flags",
  tags: ["south", "africa", "icon"],
  description: "SouthAfrica icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SouthAfrica;
