import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ghost: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Ghost(
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
          d="M9 10H9.01M15 10H15.01M12 2C9.878 2 7.843 2.843 6.343 4.343 4.843 5.843 4 7.878 4 10V22L7 19 9.5 21.5 12 19 14.5 21.5 17 19 20 22V10C20 7.878 19.157 5.843 17.657 4.343 16.157 2.843 14.122 2 12 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Ghost.displayName = "Ghost";

Ghost.metadata = {
  name: "Ghost",
  category: "stroke/gaming",
  tags: ["ghost", "icon"],
  description: "Ghost icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ghost;
