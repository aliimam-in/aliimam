import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const R: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function R(
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
          d="M8.14648 3.14648C8.34175 2.95122 8.65825 2.95122 8.85352 3.14648L12.8535 7.14648C13.0488 7.34175 13.0488 7.65825 12.8535 7.85352L8.85352 11.8535C8.65825 12.0488 8.34175 12.0488 8.14648 11.8535C7.95122 11.6583 7.95122 11.3417 8.14648 11.1465L11.293 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.293L8.14648 3.85352C7.95122 3.65825 7.95122 3.34175 8.14648 3.14648Z"
          fill={color}
        />
      </svg>
    );
  },
);

R.displayName = "R";

R.metadata = {
  name: "R",
  category: "stroke/gg",
  tags: ["icon"],
  description: "R icon from stroke/gg category",
  type: ["stroke", "solid"],
} as IconMetadata;

export default R;
