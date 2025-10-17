import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star12: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star12(
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
          d="M12 24L10.2706 15.3529L5.39996 18.6L8.64702 13.7294L0 12L8.64704 10.2706L5.39996 5.39996L10.2706 8.64705L12 0L13.7294 8.64702L18.6 5.39996L15.3529 10.2706L24 12L15.3529 13.7294L18.6 18.6L13.7294 15.3529L12 24Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Star12.displayName = "Star12";

Star12.metadata = {
  name: "Star12",
  category: "shapes/star",
  tags: ["star", "12", "icon"],
  description: "Star12 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star12;
