import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Venus: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Venus(
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
          d="M12 15V22M9 19H15M12 15C15.314 15 18 12.314 18 9 18 5.686 15.314 3 12 3 8.686 3 6 5.686 6 9 6 12.314 8.686 15 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Venus.displayName = "Venus";

Venus.metadata = {
  name: "Venus",
  category: "stroke/medical",
  tags: ["venus", "icon"],
  description: "Venus icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Venus;
