import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MaximizeProps extends IconProps {
  type?: "stroke";
}

export const Maximize: IconComponent<MaximizeProps> = React.forwardRef<
  SVGSVGElement,
  MaximizeProps
>(function Maximize(
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
          d="M8 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V8M21 8V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H16M3 16V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H8M16 21H19C19.53 21 20.039 20.789 20.414 20.414 20.789 20.039 21 19.53 21 19V16"
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
          d="M8 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V8M21 8V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H16M3 16V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H8M16 21H19C19.53 21 20.039 20.789 20.414 20.414 20.789 20.039 21 19.53 21 19V16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Maximize doesn't support ${type}`);
  return null;
});

Maximize.displayName = "Maximize";

Maximize.metadata = {
  name: "Maximize",
  category: "stroke/layout",
  tags: ["maximize", "icon"],
  description: "Maximize icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Maximize;
