import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BellOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BellOff(
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
        d="M10.268 21C10.444 21.304 10.696 21.557 11 21.732 11.304 21.908 11.649 22 12 22 12.351 22 12.696 21.908 13 21.732 13.304 21.557 13.557 21.304 13.732 21M17 17H4C3.806 17 3.617 16.944 3.454 16.838 3.292 16.732 3.164 16.582 3.085 16.405 3.007 16.227 2.982 16.031 3.013 15.84 3.044 15.649 3.13 15.47 3.26 15.327 4.59 13.956 6 12.499 6 8 6 7.41 6.087 6.823 6.258 6.258M2 2 22 22M8.668 3.01C9.571 2.407 10.622 2.06 11.707 2.007 12.792 1.954 13.871 2.196 14.829 2.709 15.787 3.221 16.588 3.984 17.147 4.916 17.705 5.848 18 6.914 18 8 18 10.687 18.77 12.653 19.707 14.05"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BellOff.displayName = "BellOff";

BellOff.metadata = {
  name: "BellOff",
  category: "stroke/notification",
  tags: ["bell", "off", "icon"],
  description: "BellOff icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BellOff;
