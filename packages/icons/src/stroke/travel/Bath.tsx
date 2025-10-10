import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bath: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Bath(
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
          d="M10 4 8 6M17 19V21M2 12H22M7 19V21M9 5 7.621 3.621C7.332 3.331 6.965 3.13 6.564 3.044 6.163 2.958 5.746 2.989 5.363 3.135 4.98 3.281 4.647 3.535 4.405 3.866 4.163 4.197 4.023 4.591 4 5V17C4 17.531 4.211 18.039 4.586 18.414 4.961 18.789 5.47 19 6 19H18C18.53 19 19.039 18.789 19.414 18.414 19.789 18.039 20 17.531 20 17V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bath.displayName = "Bath";

Bath.metadata = {
  name: "Bath",
  category: "stroke/travel",
  tags: ["bath", "icon"],
  description: "Bath icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bath;
