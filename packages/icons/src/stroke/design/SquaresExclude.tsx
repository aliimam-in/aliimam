import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquaresExclude: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquaresExclude(
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
        d="M16 12V14C16 14.53 15.789 15.039 15.414 15.414 15.039 15.789 14.53 16 14 16H9C8.735 16 8.48 16.105 8.293 16.293 8.105 16.48 8 16.735 8 17V20C8 20.53 8.211 21.039 8.586 21.414 8.961 21.789 9.47 22 10 22H20C20.53 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.53 22 20V10C22 9.47 21.789 8.961 21.414 8.586 21.039 8.211 20.53 8 20 8M4 16C3.47 16 2.961 15.789 2.586 15.414 2.211 15.039 2 14.53 2 14V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V7C16 7.265 15.895 7.52 15.707 7.707 15.52 7.895 15.265 8 15 8H10C9.47 8 8.961 8.211 8.586 8.586 8.211 8.961 8 9.47 8 10V12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquaresExclude.displayName = "SquaresExclude";

SquaresExclude.metadata = {
  name: "SquaresExclude",
  category: "stroke/design",
  tags: ["squares", "exclude", "icon"],
  description: "SquaresExclude icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquaresExclude;
