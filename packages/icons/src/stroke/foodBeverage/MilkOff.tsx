import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MilkOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MilkOff(
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
        d="M8 2H16M9 2V3.343M15 2V4.789C15 5.579 15.234 6.351 15.672 7.008L16.328 7.992C16.766 8.649 17 9.422 17 10.212V11.343M7.8 7.8 7.672 7.992C7.234 8.649 7 9.422 7 10.212V20C7 20.53 7.211 21.039 7.586 21.414 7.961 21.789 8.47 22 9 22H15C15.53 22 16.039 21.789 16.414 21.414 16.789 21.039 17 20.53 17 20V17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 15C7.792 14.668 8.642 14.498 9.5 14.498 10.358 14.498 11.208 14.668 12 15 13.084 15.454 14.272 15.605 15.435 15.435M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MilkOff.displayName = "MilkOff";

MilkOff.metadata = {
  name: "MilkOff",
  category: "stroke/foodBeverage",
  tags: ["milk", "off", "icon"],
  description: "MilkOff icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MilkOff;
