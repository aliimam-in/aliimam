import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TentProps extends IconProps {
  type?: "stroke";
}

export const Tent: IconComponent<TentProps> = React.forwardRef<
  SVGSVGElement,
  TentProps
>(function Tent(
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
          d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15 8.5 21M2 21H22"
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
          d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15 8.5 21M2 21H22"
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
          d="M3.5 21 14 3M20.5 21 10 3M15.5 21 12 15 8.5 21M2 21H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Tent doesn't support ${type}`);
  return null;
});

Tent.displayName = "Tent";

Tent.metadata = {
  name: "Tent",
  category: "stroke/sustainability",
  tags: ["tent", "icon"],
  description: "Tent icon from stroke/sustainability category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tent;
