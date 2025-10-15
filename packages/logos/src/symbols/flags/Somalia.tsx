import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Somalia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Somalia(
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
        fill="#568fd9"
      />
      <path
        d="M18.008 16.366L21.257 14.006H17.241L16 10.186L14.759 14.006H10.743L13.992 16.366L12.751 20.186L16 17.825L19.249 20.186L18.008 16.366Z"
        fill="#fff"
      />
    </svg>
  );
});

Somalia.displayName = "Somalia";

Somalia.metadata = {
  name: "Somalia",
  category: "symbols/flags",
  tags: ["somalia", "icon"],
  description: "Somalia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Somalia;
