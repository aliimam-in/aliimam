import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RussianRuble: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RussianRuble(
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
        d="M6 11H14C15.061 11 16.078 10.579 16.828 9.828 17.579 9.078 18 8.061 18 7 18 5.939 17.579 4.922 16.828 4.172 16.078 3.421 15.061 3 14 3H9V21M6 15H14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

RussianRuble.displayName = "RussianRuble";

RussianRuble.metadata = {
  name: "RussianRuble",
  category: "stroke/finance",
  tags: ["russian", "ruble", "icon"],
  description: "RussianRuble icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RussianRuble;
