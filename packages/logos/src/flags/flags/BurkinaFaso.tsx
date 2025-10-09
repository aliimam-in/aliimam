import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BurkinaFaso: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BurkinaFaso(
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
        d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z"
        fill="#479d52"
      />
      <path
        d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
        fill="#dc3e36"
      />
      <path
        d="M17.743 16.364L20.562 14.315H17.077L16 11L14.923 14.315H11.437L14.257 16.364L13.18 19.678L16 17.63L18.82 19.678L17.743 16.364Z"
        fill="#fcd116"
      />
    </svg>
  );
});

BurkinaFaso.displayName = "BurkinaFaso";

BurkinaFaso.metadata = {
  name: "BurkinaFaso",
  category: "flags/flags",
  tags: ["burkina", "faso", "icon"],
  description: "BurkinaFaso icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BurkinaFaso;
