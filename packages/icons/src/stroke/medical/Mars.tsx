import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mars: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Mars(
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
          d="M16 3H21V8M21 3 14.25 9.75M10 20C13.314 20 16 17.314 16 14 16 10.686 13.314 8 10 8 6.686 8 4 10.686 4 14 4 17.314 6.686 20 10 20Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Mars.displayName = "Mars";

Mars.metadata = {
  name: "Mars",
  category: "stroke/medical",
  tags: ["mars", "icon"],
  description: "Mars icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mars;
