import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mauritius: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Mauritius(
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
        d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V21H1V24Z"
        fill="#4aa459"
      />
      <path d="M1 15H31V22H1V15Z" fill="#f8d849" />
      <path
        d="M27 4H5C2.791 4 1 5.791 1 8V11H31V8C31 5.791 29.209 4 27 4Z"
        fill="#d83b3f"
      />
      <path d="M1 10H31V16H1V10Z" fill="#151a69" />
    </svg>
  );
});

Mauritius.displayName = "Mauritius";

Mauritius.metadata = {
  name: "Mauritius",
  category: "symbols/flags",
  tags: ["mauritius", "icon"],
  description: "Mauritius icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mauritius;
