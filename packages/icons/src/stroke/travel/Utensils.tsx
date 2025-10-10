import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UtensilsProps extends IconProps {
  type?: "stroke";
}

export const Utensils: IconComponent<UtensilsProps> = React.forwardRef<
  SVGSVGElement,
  UtensilsProps
>(function Utensils(
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
          d="M3 2V9C3 10.1 3.9 11 5 11H9C9.53 11 10.039 10.789 10.414 10.414 10.789 10.039 11 9.53 11 9V2M7 2V22M21 15V2C19.674 2 18.402 2.527 17.465 3.464 16.527 4.402 16 5.674 16 7V13C16 14.1 16.9 15 18 15H21ZM21 15V22"
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
          d="M3 2V9C3 10.1 3.9 11 5 11H9C9.53 11 10.039 10.789 10.414 10.414 10.789 10.039 11 9.53 11 9V2M7 2V22M21 15V2C19.674 2 18.402 2.527 17.465 3.464 16.527 4.402 16 5.674 16 7V13C16 14.1 16.9 15 18 15H21ZM21 15V22"
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
          d="M3 2V9C3 10.1 3.9 11 5 11H9C9.53 11 10.039 10.789 10.414 10.414 10.789 10.039 11 9.53 11 9V2M7 2V22M21 15V2C19.674 2 18.402 2.527 17.465 3.464 16.527 4.402 16 5.674 16 7V13C16 14.1 16.9 15 18 15H21ZM21 15V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Utensils doesn't support ${type}`);
  return null;
});

Utensils.displayName = "Utensils";

Utensils.metadata = {
  name: "Utensils",
  category: "stroke/travel",
  tags: ["utensils", "icon"],
  description: "Utensils icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Utensils;
