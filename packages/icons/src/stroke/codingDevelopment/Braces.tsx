import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Braces: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Braces(
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
          d="M8 3H7C6.47 3 5.961 3.211 5.586 3.586 5.211 3.961 5 4.47 5 5V10C5 10.53 4.789 11.039 4.414 11.414 4.039 11.789 3.53 12 3 12 3.53 12 4.039 12.211 4.414 12.586 4.789 12.961 5 13.47 5 14V19C5 20.1 5.9 21 7 21H8M16 21H17C17.53 21 18.039 20.789 18.414 20.414 18.789 20.039 19 19.53 19 19V14C19 12.9 19.9 12 21 12 20.47 12 19.961 11.789 19.586 11.414 19.211 11.039 19 10.53 19 10V5C19 4.47 18.789 3.961 18.414 3.586 18.039 3.211 17.53 3 17 3H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Braces.displayName = "Braces";

Braces.metadata = {
  name: "Braces",
  category: "stroke/codingDevelopment",
  tags: ["braces", "icon"],
  description: "Braces icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Braces;
