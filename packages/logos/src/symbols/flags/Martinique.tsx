import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Martinique: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Martinique(
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
        d="M1 24C1 26.2092 2.7908 28 5 28H27C29.2092 28 31 26.2092 31 24V15H1V24Z"
        fill="#1e1918"
      />
      <path
        d="M27 4H5C2.7908 4 1 5.7908 1 8V16H31V8C31 5.7908 29.2092 4 27 4Z"
        fill="#05a84f"
      />
      <path
        d="M2.3157 26.9473L16 15.9999L2.3157 5.05249C1.5128 5.78409 1 6.82809 1 7.99989V23.9999C1 25.1717 1.5128 26.2157 2.3157 26.9473Z"
        fill="#f0121e"
      />
    </svg>
  );
});

Martinique.displayName = "Martinique";

Martinique.metadata = {
  name: "Martinique",
  category: "symbols/flags",
  tags: ["martinique", "icon"],
  description: "Martinique icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Martinique;
