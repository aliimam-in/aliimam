import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquaresUnite: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquaresUnite(
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
        d="M4 16C3.46957 16 2.96086 15.7893 2.58579 15.4142C2.21071 15.0391 2 14.5304 2 14V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8H20C20.5304 8 21.0391 8.21071 21.4142 8.58579C21.7893 8.96086 22 9.46957 22 10V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H10C9.46957 22 8.96086 21.7893 8.58579 21.4142C8.21071 21.0391 8 20.5304 8 20V17C8 16.7348 7.89464 16.4804 7.70711 16.2929C7.51957 16.1054 7.26522 16 7 16H4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquaresUnite.displayName = "SquaresUnite";

SquaresUnite.metadata = {
  name: "SquaresUnite",
  category: "stroke/design",
  tags: ["squares", "unite", "icon"],
  description: "SquaresUnite icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquaresUnite;
