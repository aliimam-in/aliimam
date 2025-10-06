import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Divide: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Divide(
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
          d="M12 7C12.552 7 13 6.552 13 6 13 5.448 12.552 5 12 5 11.448 5 11 5.448 11 6 11 6.552 11.448 7 12 7ZM5 12H19M12 19C12.552 19 13 18.552 13 18 13 17.448 12.552 17 12 17 11.448 17 11 17.448 11 18 11 18.552 11.448 19 12 19Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Divide.displayName = "Divide";

Divide.metadata = {
  name: "Divide",
  category: "stroke/codingDevelopment",
  tags: ["divide", "icon"],
  description: "Divide icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Divide;
