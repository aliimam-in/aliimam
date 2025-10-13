import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TrinidadTobago: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TrinidadTobago(
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
        fill="#c93039"
      />
      <path
        d="M29.926 26.711L11 4H5.00001C3.84101 4 2.80501 4.501 2.07401 5.289L21 28H27C28.159 28 29.195 27.499 29.926 26.711Z"
        fill="#fff"
      />
      <path
        d="M9.69202 4H5.00001C4.20001 4 3.45901 4.241 2.83401 4.645L22.328 28H27C27.806 28 28.552 27.757 29.18 27.347L9.69202 4Z"
        fill="currentColor"
      />
    </svg>
  );
});

TrinidadTobago.displayName = "TrinidadTobago";

TrinidadTobago.metadata = {
  name: "TrinidadTobago",
  category: "flags/flags",
  tags: ["trinidad", "tobago", "icon"],
  description: "TrinidadTobago icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrinidadTobago;
