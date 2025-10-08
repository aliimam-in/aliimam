import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PrinterCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PrinterCheck(
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
        d="M13.5 22H7C6.735 22 6.48 21.895 6.293 21.707 6.105 21.52 6 21.265 6 21V15C6 14.735 6.105 14.48 6.293 14.293 6.48 14.105 6.735 14 7 14H17C17.265 14 17.52 14.105 17.707 14.293 17.895 14.48 18 14.735 18 15V15.5M16 19 18 21 22 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V11C2 10.47 2.211 9.961 2.586 9.586 2.961 9.211 3.47 9 4 9H20C20.53 9 21.039 9.211 21.414 9.586 21.789 9.961 22 10.47 22 11V13M6 9V3C6 2.735 6.105 2.48 6.293 2.293 6.48 2.105 6.735 2 7 2H17C17.265 2 17.52 2.105 17.707 2.293 17.895 2.48 18 2.735 18 3V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PrinterCheck.displayName = "PrinterCheck";

PrinterCheck.metadata = {
  name: "PrinterCheck",
  category: "stroke/devices",
  tags: ["printer", "check", "icon"],
  description: "PrinterCheck icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PrinterCheck;
