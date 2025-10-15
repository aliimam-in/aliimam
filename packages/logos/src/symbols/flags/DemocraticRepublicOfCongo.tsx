import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const DemocraticRepublicOfCongo: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function DemocraticRepublicOfCongo(
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
        fill="#387ef7"
      />
      <path
        d="M9.295 11.069 11.895 9.181H8.682L7.689 6.125 6.696 9.181H3.483L6.082 11.069 5.089 14.125 7.689 12.236 10.288 14.125 9.295 11.069ZM31 8C31 6.36 30.011 4.955 28.599 4.337L1 21.816V24C1 25.64 1.989 27.045 3.401 27.663L31 10.184V8Z"
        fill="#f2d84b"
      />
      <path
        d="M29.534 4.92896L1 23V24C1 25.242 1.578 26.338 2.466 27.071L31 8.99996V7.99996C31 6.75796 30.422 5.66196 29.534 4.92896Z"
        fill="#be2a28"
      />
    </svg>
  );
});

DemocraticRepublicOfCongo.displayName = "DemocraticRepublicOfCongo";

DemocraticRepublicOfCongo.metadata = {
  name: "DemocraticRepublicOfCongo",
  category: "symbols/flags",
  tags: ["democratic", "republic", "of", "congo", "icon"],
  description: "DemocraticRepublicOfCongo icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DemocraticRepublicOfCongo;
