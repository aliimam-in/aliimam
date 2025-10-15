import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const RepublicCongo: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function RepublicCongo(
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
        d="M31 24V8C31 5.791 29.209 4 27 4H26L6 28H27C29.209 28 31 26.209 31 24Z"
        fill="#c93039"
      />
      <path
        d="M5 4H26L6 28H5C2.791 28 1 26.209 1 24V8C1 5.791 2.791 4 5 4Z"
        fill="#42944b"
      />
      <path
        d="M27 4H21L2.07397 26.711C2.80497 27.499 3.83997 28 4.99997 28H11L29.926 5.289C29.195 4.501 28.16 4 27 4Z"
        fill="#f7e065"
      />
    </svg>
  );
});

RepublicCongo.displayName = "RepublicCongo";

RepublicCongo.metadata = {
  name: "RepublicCongo",
  category: "symbols/flags",
  tags: ["republic", "congo", "icon"],
  description: "RepublicCongo icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RepublicCongo;
