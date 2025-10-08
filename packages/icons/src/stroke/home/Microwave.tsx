import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MicrowaveProps extends IconProps {
  type?: "stroke";
}

export const Microwave: IconComponent<MicrowaveProps> = React.forwardRef<
  SVGSVGElement,
  MicrowaveProps
>(function Microwave(
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
          d="M20 4H4C2.89543 4 2 4.89543 2 6V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V6C22 4.89543 21.1046 4 20 4Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8H7C6.448 8 6 8.448 6 9V14C6 14.552 6.448 15 7 15H13C13.552 15 14 14.552 14 14V9C14 8.448 13.552 8 13 8ZM18 8V15M6 19V21M18 19V21"
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
          d="M20 4H4C2.89543 4 2 4.89543 2 6V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V6C22 4.89543 21.1046 4 20 4Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8H7C6.448 8 6 8.448 6 9V14C6 14.552 6.448 15 7 15H13C13.552 15 14 14.552 14 14V9C14 8.448 13.552 8 13 8ZM18 8V15M6 19V21M18 19V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Microwave doesn't support ${type}`);
  return null;
});

Microwave.displayName = "Microwave";

Microwave.metadata = {
  name: "Microwave",
  category: "stroke/home",
  tags: ["microwave", "icon"],
  description: "Microwave icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Microwave;
