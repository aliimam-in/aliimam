import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Space: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Space(
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
          d="M22 17V18C22 18.5 21.5 19 21 19H3C2.5 19 2 18.5 2 18V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Space.displayName = "Space";

Space.metadata = {
  name: "Space",
  category: "stroke/textFormatting",
  tags: ["space", "icon"],
  description: "Space icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Space;
