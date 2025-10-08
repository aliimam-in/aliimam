import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Printer: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Printer(
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
        d="M6 18H4C3.47 18 2.961 17.789 2.586 17.414 2.211 17.039 2 16.53 2 16V11C2 10.47 2.211 9.961 2.586 9.586 2.961 9.211 3.47 9 4 9H20C20.53 9 21.039 9.211 21.414 9.586 21.789 9.961 22 10.47 22 11V16C22 16.53 21.789 17.039 21.414 17.414 21.039 17.789 20.53 18 20 18H18M6 9V3C6 2.735 6.105 2.48 6.293 2.293 6.48 2.105 6.735 2 7 2H17C17.265 2 17.52 2.105 17.707 2.293 17.895 2.48 18 2.735 18 3V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14H7C6.44772 14 6 14.4477 6 15V21C6 21.5523 6.44772 22 7 22H17C17.5523 22 18 21.5523 18 21V15C18 14.4477 17.5523 14 17 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Printer.displayName = "Printer";

Printer.metadata = {
  name: "Printer",
  category: "stroke/devices",
  tags: ["printer", "icon"],
  description: "Printer icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Printer;
