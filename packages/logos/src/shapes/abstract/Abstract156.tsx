import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract156: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract156(
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
      viewBox="0 0 24 24"
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
        d="M23.1607 14.253L19.7329 16.0844L16.2823 14.2416V9.87451L19.7215 8.03743L23.1607 9.87451V14.253ZM15.8617 23.0367L12.4206 21.1996V16.8306L15.8617 14.9936L19.3028 16.8306V21.1996L15.8617 23.0367ZM11.547 21.1996L8.10785 23.0367L4.66677 21.1996V16.8516L8.1364 14.9993L11.547 16.8211V21.1996ZM0.841239 9.8726L4.28231 8.03555L7.72149 9.8726V14.2226L4.25186 16.0749L0.841239 14.253V9.87451V9.8726ZM4.66487 2.80225L8.10594 0.965191L11.5451 2.80225V7.18267L8.10594 9.01975L4.66487 7.18267V2.80225ZM12.4206 2.80225L15.8617 0.965191L19.3028 2.80225V7.18267L15.8617 9.01975L12.4206 7.18267V2.80225ZM15.443 14.2397L11.9905 16.0825L8.56273 14.2511V9.8726L12.0019 8.03555L15.443 9.8726V14.2397ZM24 9.3548L20.1402 7.2931V2.28444L15.8598 0L11.981 2.06932L8.10404 0L3.82363 2.28444V7.31213L0 9.3548V14.7689L3.82363 16.8116V21.7156L8.10404 24L11.981 21.9288L15.8598 24L20.1402 21.7156V16.8287L24 14.767V9.35289V9.3548Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract156.displayName = "Abstract156";

Abstract156.metadata = {
  name: "Abstract156",
  category: "shapes/abstract",
  tags: ["abstract", "156", "icon"],
  description: "Abstract156 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract156;
