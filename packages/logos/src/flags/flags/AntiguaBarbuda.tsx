import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AntiguaBarbuda: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AntiguaBarbuda(
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
        d="M16 17.6579L8.065 15.0129L12.109 14.2389L8.67 11.9759L12.702 12.8079L10.39 9.4019L13.796 11.7139L12.964 7.6819L15.227 11.1209L16.001 7.0769L16.775 11.1209L19.038 7.6819L18.206 11.7139L21.612 9.4019L19.3 12.8079L23.332 11.9759L19.893 14.2389L23.937 15.0129L16.002 17.6579H16Z"
        fill="#fcd116"
      />
      <path d="M2 15H30V20H2V15Z" fill="#0072c6" />
      <path d="M5 19H27V28H5V19Z" fill="#fff" />
      <path
        d="M1 8V24C1 26.209 2.791 28 5 28H16L1.922 5.475C1.355 6.165 1 7.037 1 8ZM16 28H27C29.209 28 31 26.209 31 24V8C31 7.037 30.646 6.165 30.078 5.475L16 28Z"
        fill="#ce1126"
      />
    </svg>
  );
});

AntiguaBarbuda.displayName = "AntiguaBarbuda";

AntiguaBarbuda.metadata = {
  name: "AntiguaBarbuda",
  category: "flags/flags",
  tags: ["antigua", "barbuda", "icon"],
  description: "AntiguaBarbuda icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AntiguaBarbuda;
