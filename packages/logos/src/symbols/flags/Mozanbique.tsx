import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mozanbique: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Mozanbique(
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
      <path d="M1 12H31V20H1V12Z" fill="currentColor" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V13H1V8C1 5.792 2.792 4 5 4Z"
        fill="#307068"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V19L31 19V24C31 26.208 29.208 28 27 28Z"
        fill="#f8e34c"
      />
      <path d="M1 11H31V13H1V11ZM1 19H31V21H1V19Z" fill="#fff" />
      <path
        d="M2.316 26.947L16 16L2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 25.172 1.513 26.216 2.316 26.947Z"
        fill="#c22b38"
      />
      <path
        d="M8.016 16.628L10.318 14.956H7.473L6.594 12.25L5.715 14.956H2.87L5.171 16.628L4.292 19.333L6.594 17.661L8.895 19.333L8.016 16.628Z"
        fill="#fff"
      />
    </svg>
  );
});

Mozanbique.displayName = "Mozanbique";

Mozanbique.metadata = {
  name: "Mozanbique",
  category: "symbols/flags",
  tags: ["mozanbique", "icon"],
  description: "Mozanbique icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mozanbique;
