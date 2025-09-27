import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const T: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function T(
    {
      color = "currentColor",
      fill,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      variant = "stroke",
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
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
          d="M3.14648 6.85352C2.95122 6.65825 2.95122 6.34175 3.14648 6.14648L7.14648 2.14648C7.34175 1.95122 7.65825 1.95122 7.85352 2.14648L11.8535 6.14648C12.0488 6.34175 12.0488 6.65825 11.8535 6.85352C11.6583 7.04878 11.3417 7.04878 11.1465 6.85352L8 3.70703L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70703L3.85352 6.85352C3.65825 7.04878 3.34175 7.04878 3.14648 6.85352Z"
          fill={color}
        />
      </svg>
    );
  },
);

T.displayName = "T";

T.metadata = {
  name: "T",
  category: "icons",
  tags: ["interface", "ui", "icon"],
  description: "T icon from icons category",
  variants: ["stroke", "solid"],
} as IconMetadata;

export default T;
