import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Subscript: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Subscript(
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
        d="M4 5 12 13M12 5 4 13M20 19H16C16 17.5 16.44 17 17.5 16.5 18.56 16 20 15.33 20 14 20 13.53 19.83 13.07 19.52 12.71 19.2 12.348 18.765 12.106 18.288 12.026 17.811 11.946 17.321 12.032 16.9 12.27 16.48 12.51 16.16 12.89 16 13.34"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Subscript.displayName = "Subscript";

Subscript.metadata = {
  name: "Subscript",
  category: "stroke/textFormatting",
  tags: ["subscript", "icon"],
  description: "Subscript icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Subscript;
