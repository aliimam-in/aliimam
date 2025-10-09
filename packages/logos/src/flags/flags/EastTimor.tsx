import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EastTimor: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function EastTimor(
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
      <path
        d="M2.433 27.0441L19 16.0001L2.433 4.95605C1.564 5.69005 1 6.77405 1 8.00005V24.0001C1 25.2271 1.564 26.3111 2.433 27.0441Z"
        fill="#f7cb4f"
      />
      <path
        d="M2.271 26.9111L15 16.0001L2.271 5.08911C1.493 5.81911 1 6.84911 1 8.00011V24.0001C1 25.1511 1.493 26.1811 2.271 26.9111Z"
        fill="currentColor"
      />
      <path
        d="M7.56899 15.973L8.88299 13.74L6.50799 14.774L4.79099 12.835L5.03999 15.413L2.66499 16.447L5.19399 17.007L5.44399 19.585L6.75699 17.352L9.28699 17.912L7.56899 15.973Z"
        fill="#fff"
      />
    </svg>
  );
});

EastTimor.displayName = "EastTimor";

EastTimor.metadata = {
  name: "EastTimor",
  category: "flags/flags",
  tags: ["east", "timor", "icon"],
  description: "EastTimor icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EastTimor;
