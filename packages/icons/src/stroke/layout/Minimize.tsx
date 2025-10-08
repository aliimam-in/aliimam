import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MinimizeProps extends IconProps {
  type?: "stroke";
}

export const Minimize: IconComponent<MinimizeProps> = React.forwardRef<
  SVGSVGElement,
  MinimizeProps
>(function Minimize(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M8 3V6C8 6.53 7.789 7.039 7.414 7.414 7.039 7.789 6.53 8 6 8H3M21 8H18C17.47 8 16.961 7.789 16.586 7.414 16.211 7.039 16 6.53 16 6V3M3 16H6C6.53 16 7.039 16.211 7.414 16.586 7.789 16.961 8 17.47 8 18V21M16 21V18C16 17.47 16.211 16.961 16.586 16.586 16.961 16.211 17.47 16 18 16H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M8 3V6C8 6.53 7.789 7.039 7.414 7.414 7.039 7.789 6.53 8 6 8H3M21 8H18C17.47 8 16.961 7.789 16.586 7.414 16.211 7.039 16 6.53 16 6V3M3 16H6C6.53 16 7.039 16.211 7.414 16.586 7.789 16.961 8 17.47 8 18V21M16 21V18C16 17.47 16.211 16.961 16.586 16.586 16.961 16.211 17.47 16 18 16H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Minimize doesn't support ${type}`);
  return null;
});

Minimize.displayName = "Minimize";

Minimize.metadata = {
  name: "Minimize",
  category: "stroke/layout",
  tags: ["minimize", "icon"],
  description: "Minimize icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Minimize;
