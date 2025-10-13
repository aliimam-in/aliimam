import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Micronesia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Micronesia(
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
        fill="#83b2da"
      />
      <path
        d="M16 7.63 15.411 9.442H13.505L15.047 10.563 14.458 12.375 16 11.255 17.542 12.375 16.953 10.563 18.495 9.442H16.589L16 7.63ZM22.531 16.561 24.256 16 22.531 15.439V13.625L21.464 15.093 19.739 14.532 20.805 16 19.739 17.468 21.464 16.907 22.531 18.375V16.561ZM16.953 21.437 17.542 19.625 16 20.745 14.458 19.625 15.047 21.437 13.505 22.558H15.411L16 24.37 16.589 22.558H18.495L16.953 21.437ZM10.536 15.093 9.469 13.625V15.439L7.744 16 9.469 16.561V18.375L10.536 16.907 12.261 17.468 11.195 16 12.261 14.532 10.536 15.093Z"
        fill="#fff"
      />
    </svg>
  );
});

Micronesia.displayName = "Micronesia";

Micronesia.metadata = {
  name: "Micronesia",
  category: "flags/flags",
  tags: ["micronesia", "icon"],
  description: "Micronesia icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Micronesia;
