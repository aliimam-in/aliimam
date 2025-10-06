import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Loader: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Loader(
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
          d="M12 2V6M16.2 7.8 19.1 4.9M18 12H22M16.2 16.2 19.1 19.1M12 18V22M4.9 19.1 7.8 16.2M2 12H6M4.9 4.9 7.8 7.8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Loader.displayName = "Loader";

Loader.metadata = {
  name: "Loader",
  category: "stroke/design",
  tags: ["loader", "icon"],
  description: "Loader icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Loader;
