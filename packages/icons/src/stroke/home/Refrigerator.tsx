import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RefrigeratorProps extends IconProps {
  type?: "stroke";
}

export const Refrigerator: IconComponent<RefrigeratorProps> = React.forwardRef<
  SVGSVGElement,
  RefrigeratorProps
>(function Refrigerator(
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
          d="M5 6C5 4.939 5.421 3.922 6.172 3.172 6.922 2.421 7.939 2 9 2H15C16.061 2 17.078 2.421 17.828 3.172 18.579 3.922 19 4.939 19 6V20C19 20.53 18.789 21.039 18.414 21.414 18.039 21.789 17.53 22 17 22H7C6.47 22 5.961 21.789 5.586 21.414 5.211 21.039 5 20.53 5 20V6ZM5 10H19M15 7V13"
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
          d="M5 6C5 4.939 5.421 3.922 6.172 3.172 6.922 2.421 7.939 2 9 2H15C16.061 2 17.078 2.421 17.828 3.172 18.579 3.922 19 4.939 19 6V20C19 20.53 18.789 21.039 18.414 21.414 18.039 21.789 17.53 22 17 22H7C6.47 22 5.961 21.789 5.586 21.414 5.211 21.039 5 20.53 5 20V6ZM5 10H19M15 7V13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Refrigerator doesn't support ${type}`);
  return null;
});

Refrigerator.displayName = "Refrigerator";

Refrigerator.metadata = {
  name: "Refrigerator",
  category: "stroke/home",
  tags: ["refrigerator", "icon"],
  description: "Refrigerator icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Refrigerator;
