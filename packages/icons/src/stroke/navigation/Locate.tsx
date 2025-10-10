import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Locate: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Locate(
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
          d="M2 12H5M19 12H22M12 2V5M12 19V22M12 19C15.866 19 19 15.866 19 12 19 8.134 15.866 5 12 5 8.134 5 5 8.134 5 12 5 15.866 8.134 19 12 19Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Locate.displayName = "Locate";

Locate.metadata = {
  name: "Locate",
  category: "stroke/navigation",
  tags: ["locate", "icon"],
  description: "Locate icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Locate;
