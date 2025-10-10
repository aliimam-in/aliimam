import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BellElectricProps extends IconProps {
  type?: "stroke";
}

export const BellElectric: IconComponent<BellElectricProps> = React.forwardRef<
  SVGSVGElement,
  BellElectricProps
>(function BellElectric(
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
          d="M18.518 17.347C17.255 18.415 15.654 19 14 19M18.8 4C19.589 5.548 20.001 7.262 20 9M9 9H9.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18C21.105 18 22 17.105 22 16 22 14.895 21.105 14 20 14 18.895 14 18 14.895 18 16 18 17.105 18.895 18 20 18ZM9 16C12.866 16 16 12.866 16 9 16 5.134 12.866 2 9 2 5.134 2 2 5.134 2 9 2 12.866 5.134 16 9 16ZM12 16H6C4.895 16 4 16.895 4 18V20C4 21.105 4.895 22 6 22H12C13.105 22 14 21.105 14 20V18C14 16.895 13.105 16 12 16Z"
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
          d="M18.518 17.347C17.255 18.415 15.654 19 14 19M18.8 4C19.589 5.548 20.001 7.262 20 9M9 9H9.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18C21.105 18 22 17.105 22 16 22 14.895 21.105 14 20 14 18.895 14 18 14.895 18 16 18 17.105 18.895 18 20 18ZM9 16C12.866 16 16 12.866 16 9 16 5.134 12.866 2 9 2 5.134 2 2 5.134 2 9 2 12.866 5.134 16 9 16ZM12 16H6C4.895 16 4 16.895 4 18V20C4 21.105 4.895 22 6 22H12C13.105 22 14 21.105 14 20V18C14 16.895 13.105 16 12 16Z"
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
          d="M18.518 17.347C17.255 18.414 15.654 19 14 19M18.8 4C19.589 5.548 20.001 7.262 20 9M9 9H9.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18C21.105 18 22 17.105 22 16 22 14.895 21.105 14 20 14 18.895 14 18 14.895 18 16 18 17.105 18.895 18 20 18ZM9 16C12.866 16 16 12.866 16 9 16 5.134 12.866 2 9 2 5.134 2 2 5.134 2 9 2 12.866 5.134 16 9 16ZM12 16H6C4.895 16 4 16.895 4 18V20C4 21.105 4.895 22 6 22H12C13.105 22 14 21.105 14 20V18C14 16.895 13.105 16 12 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BellElectric doesn't support ${type}`);
  return null;
});

BellElectric.displayName = "BellElectric";

BellElectric.metadata = {
  name: "BellElectric",
  category: "stroke/notification",
  tags: ["bell", "electric", "icon"],
  description: "BellElectric icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BellElectric;
