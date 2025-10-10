import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CableCarProps extends IconProps {
  type?: "stroke";
}

export const CableCar: IconComponent<CableCarProps> = React.forwardRef<
  SVGSVGElement,
  CableCarProps
>(function CableCar(
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
          d="M10 3H10.01M14 2H14.01M2 9 22 4M12 12V6.5M17 12H7C5.343 12 4 13.343 4 15V19C4 20.657 5.343 22 7 22H17C18.657 22 20 20.657 20 19V15C20 13.343 18.657 12 17 12ZM9 12V17M15 12V17M4 17H20"
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
          d="M10 3H10.01M14 2H14.01M2 9 22 4M12 12V6.5M17 12H7C5.343 12 4 13.343 4 15V19C4 20.657 5.343 22 7 22H17C18.657 22 20 20.657 20 19V15C20 13.343 18.657 12 17 12ZM9 12V17M15 12V17M4 17H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CableCar doesn't support ${type}`);
  return null;
});

CableCar.displayName = "CableCar";

CableCar.metadata = {
  name: "CableCar",
  category: "stroke/transportation",
  tags: ["cable", "car", "icon"],
  description: "CableCar icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CableCar;
