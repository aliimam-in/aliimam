import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Switzerland: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Switzerland(
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
        fill="#c93927"
      />
      <path d="M14 10H18V22H14V10Z" fill="#fff" />
      <path d="M22 14V18H10V14H22Z" fill="#fff" />
    </svg>
  );
});

Switzerland.displayName = "Switzerland";

Switzerland.metadata = {
  name: "Switzerland",
  category: "flags/flags",
  tags: ["switzerland", "icon"],
  description: "Switzerland icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Switzerland;
