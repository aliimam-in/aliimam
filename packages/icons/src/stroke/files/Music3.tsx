import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Music3: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Music3(
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
          d="M12 22C14.209 22 16 20.209 16 18 16 15.791 14.209 14 12 14 9.791 14 8 15.791 8 18 8 20.209 9.791 22 12 22ZM16 18V2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Music3.displayName = "Music3";

Music3.metadata = {
  name: "Music3",
  category: "stroke/files",
  tags: ["music", "icon"],
  description: "Music3 icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Music3;
