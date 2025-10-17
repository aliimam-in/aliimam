import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star11: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star11(
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
          d="M12 0C12.8556 3.78761 17.2021 5.58799 20.4853 3.51472C18.412 6.79794 20.2124 11.1444 24 12C20.2124 12.8556 18.412 17.2021 20.4853 20.4853C17.2021 18.412 12.8556 20.2124 12 24C11.1444 20.2124 6.79794 18.412 3.51472 20.4853C5.58799 17.2021 3.78761 12.8556 0 12C3.78761 11.1444 5.58799 6.79794 3.51472 3.51472C6.79794 5.58799 11.1444 3.78761 12 0Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Star11.displayName = "Star11";

Star11.metadata = {
  name: "Star11",
  category: "shapes/star",
  tags: ["star", "11", "icon"],
  description: "Star11 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star11;
