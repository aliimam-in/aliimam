import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Heading6: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Heading6(
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
        d="M4 12H12M4 18V6M12 18V6M19 18C20.105 18 21 17.105 21 16 21 14.895 20.105 14 19 14 17.895 14 17 14.895 17 16 17 17.105 17.895 18 19 18Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10C18 12 17 13.5 17 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heading6.displayName = "Heading6";

Heading6.metadata = {
  name: "Heading6",
  category: "stroke/textFormatting",
  tags: ["heading", "icon"],
  description: "Heading6 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heading6;
