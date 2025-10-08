import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface Columns3CogProps extends IconProps {
  type?: "stroke";
}

export const Columns3Cog: IconComponent<Columns3CogProps> = React.forwardRef<
  SVGSVGElement,
  Columns3CogProps
>(function Columns3Cog(
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
          d="M10.5 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V10.5M14.3 19.6 15.3 19.2M15 3V10.5M15.2 16.9 14.3 16.6M16.6 21.7 16.9 20.8M16.8 15.3 16.4 14.3M19.1 15.2 19.4 14.3M19.6 21.7 19.2 20.7M20.7 16.8 21.7 16.4M21.7 19.4 20.8 19.1M9 3V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
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
          d="M10.5 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V10.5M14.3 19.6 15.3 19.2M15 3V10.5M15.2 16.9 14.3 16.6M16.6 21.7 16.9 20.8M16.8 15.3 16.4 14.3M19.1 15.2 19.4 14.3M19.6 21.7 19.2 20.7M20.7 16.8 21.7 16.4M21.7 19.4 20.8 19.1M9 3V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Columns3Cog doesn't support ${type}`);
  return null;
});

Columns3Cog.displayName = "Columns3Cog";

Columns3Cog.metadata = {
  name: "Columns3Cog",
  category: "stroke/layout",
  tags: ["columns", "cog", "icon"],
  description: "Columns3Cog icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Columns3Cog;
