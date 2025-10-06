import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Binary: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Binary(
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
          d="M18 16C18 14.895 17.105 14 16 14 14.895 14 14 14.895 14 16V18C14 19.105 14.895 20 16 20 17.105 20 18 19.105 18 18V16ZM10 6C10 4.895 9.105 4 8 4 6.895 4 6 4.895 6 6V8C6 9.105 6.895 10 8 10 9.105 10 10 9.105 10 8V6ZM6 20H10M14 10H18M6 14H8V20M14 4H16V10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Binary.displayName = "Binary";

Binary.metadata = {
  name: "Binary",
  category: "stroke/codingDevelopment",
  tags: ["binary", "icon"],
  description: "Binary icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Binary;
