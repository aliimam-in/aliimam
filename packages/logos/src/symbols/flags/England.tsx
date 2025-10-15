import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const England: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function England(
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#fff"
      />
      <path d="M31 14H18V4H14V14H1V18H14V28H18V18H31V14Z" fill="#be2a2a" />
    </svg>
  );
});

England.displayName = "England";

England.metadata = {
  name: "England",
  category: "symbols/flags",
  tags: ["england", "icon"],
  description: "England icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default England;
