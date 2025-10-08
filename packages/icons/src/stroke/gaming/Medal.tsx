import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Medal: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Medal(
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
          d="M7.21 15 2.66 7.14C2.464 6.801 2.371 6.412 2.395 6.02 2.418 5.629 2.555 5.254 2.79 4.94L4.4 2.8C4.586 2.552 4.828 2.35 5.106 2.211 5.383 2.072 5.689 2 6 2H18C18.31 2 18.617 2.072 18.894 2.211 19.172 2.35 19.414 2.552 19.6 2.8L21.2 4.94C21.436 5.253 21.576 5.628 21.6 6.019 21.625 6.41 21.535 6.8 21.34 7.14L16.79 15M11 12 5.12 2.2M13 12 18.88 2.2M8 7H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C14.7614 22 17 19.7614 17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17C7 19.7614 9.23858 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18V16H11.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Medal.displayName = "Medal";

Medal.metadata = {
  name: "Medal",
  category: "stroke/gaming",
  tags: ["medal", "icon"],
  description: "Medal icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Medal;
