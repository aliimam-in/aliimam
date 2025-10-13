import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Jamaica: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Jamaica(
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
        fill="currentColor"
      />
      <path
        d="M16 16 29.684 5.053C28.973 4.405 28.037 4 27 4H5C3.963 4 3.026 4.405 2.316 5.053L16 16ZM16 16 29.684 26.947C28.973 27.595 28.037 28 27 28H5C3.963 28 3.026 27.595 2.316 26.947L16 16Z"
        fill="#33764c"
      />
      <path
        d="M28.304 4.23611L16 14.0791L3.69599 4.23611C2.69299 4.58411 1.87799 5.31111 1.41699 6.25511L13.599 16.0011L1.41699 25.7461C1.87799 26.6901 2.69399 27.4171 3.69599 27.7651L16 17.9221L28.304 27.7651C29.307 27.4171 30.122 26.6901 30.583 25.7461L18.401 16.0001L30.583 6.25411C30.122 5.31011 29.306 4.58411 28.304 4.23611Z"
        fill="#f5bd45"
      />
    </svg>
  );
});

Jamaica.displayName = "Jamaica";

Jamaica.metadata = {
  name: "Jamaica",
  category: "flags/flags",
  tags: ["jamaica", "icon"],
  description: "Jamaica icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Jamaica;
