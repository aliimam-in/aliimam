import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquaresSubtract: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquaresSubtract(
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
        d="M10 22C9.47 22 8.961 21.789 8.586 21.414 8.211 21.039 8 20.53 8 20M16 22H14M16 4C16 3.47 15.789 2.961 15.414 2.586 15.039 2.211 14.53 2 14 2H4C3.47 2 2.961 2.211 2.586 2.586 2.211 2.961 2 3.47 2 4V14C2 14.53 2.211 15.039 2.586 15.414 2.961 15.789 3.47 16 4 16H7C7.265 16 7.52 15.895 7.707 15.707 7.895 15.52 8 15.265 8 15V10C8 9.47 8.211 8.961 8.586 8.586 8.961 8.211 9.47 8 10 8H15C15.265 8 15.52 7.895 15.707 7.707 15.895 7.52 16 7.265 16 7V4ZM20 8C20.53 8 21.039 8.211 21.414 8.586 21.789 8.961 22 9.47 22 10M22 14V16M22 20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquaresSubtract.displayName = "SquaresSubtract";

SquaresSubtract.metadata = {
  name: "SquaresSubtract",
  category: "stroke/design",
  tags: ["squares", "subtract", "icon"],
  description: "SquaresSubtract icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquaresSubtract;
