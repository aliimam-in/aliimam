import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ShipWheelProps extends IconProps {
  type?: "stroke";
}

export const ShipWheel: IconComponent<ShipWheelProps> = React.forwardRef<
  SVGSVGElement,
  ShipWheelProps
>(function ShipWheel(
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
          d="M12 20C16.418 20 20 16.418 20 12 20 7.582 16.418 4 12 4 7.582 4 4 7.582 4 12 4 16.418 7.582 20 12 20ZM12 2V9.5M19 5 13.77 10.23M22 12H14.5M19 19 13.77 13.77M12 14.5V22M10.23 13.77 5 19M9.5 12H2M10.23 10.23 5 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
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
          d="M12 20C16.418 20 20 16.418 20 12 20 7.582 16.418 4 12 4 7.582 4 4 7.582 4 12 4 16.418 7.582 20 12 20ZM12 2V9.5M19 5 13.77 10.23M22 12H14.5M19 19 13.77 13.77M12 14.5V22M10.23 13.77 5 19M9.5 12H2M10.23 10.23 5 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
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
          d="M12 20C16.418 20 20 16.418 20 12 20 7.582 16.418 4 12 4 7.582 4 4 7.582 4 12 4 16.418 7.582 20 12 20ZM12 2V9.5M19 5 13.77 10.23M22 12H14.5M19 19 13.77 13.77M12 14.5V22M10.23 13.77 5 19M9.5 12H2M10.23 10.23 5 5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ShipWheel doesn't support ${type}`);
  return null;
});

ShipWheel.displayName = "ShipWheel";

ShipWheel.metadata = {
  name: "ShipWheel",
  category: "stroke/transportation",
  tags: ["ship", "wheel", "icon"],
  description: "ShipWheel icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShipWheel;
