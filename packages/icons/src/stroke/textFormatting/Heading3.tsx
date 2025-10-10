import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Heading3: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Heading3(
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
        d="M4 12H12M4 18V6M12 18V6M17.5 10.5C19.2 9.5 21 10.5 21 12 21 12.53 20.789 13.039 20.414 13.414 20.039 13.789 19.53 14 19 14M17 17.5C19 19 21 17.8 21 16 21 15.47 20.789 14.961 20.414 14.586 20.039 14.211 19.53 14 19 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Heading3.displayName = "Heading3";

Heading3.metadata = {
  name: "Heading3",
  category: "stroke/textFormatting",
  tags: ["heading", "icon"],
  description: "Heading3 icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Heading3;
