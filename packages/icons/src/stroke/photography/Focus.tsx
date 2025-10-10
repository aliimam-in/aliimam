import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Focus: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Focus(
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
          d="M12 15C13.657 15 15 13.657 15 12 15 10.343 13.657 9 12 9 10.343 9 9 10.343 9 12 9 13.657 10.343 15 12 15ZM3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Focus.displayName = "Focus";

Focus.metadata = {
  name: "Focus",
  category: "stroke/photography",
  tags: ["focus", "icon"],
  description: "Focus icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Focus;
