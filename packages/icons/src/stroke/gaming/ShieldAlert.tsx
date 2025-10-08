import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ShieldAlertProps extends IconProps {
  type?: "stroke";
}

export const ShieldAlert: IconComponent<ShieldAlertProps> = React.forwardRef<
  SVGSVGElement,
  ShieldAlertProps
>(function ShieldAlert(
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
          d="M20 13C20 18 16.5 20.5 12.34 21.95 12.122 22.024 11.886 22.02 11.67 21.94 7.5 20.5 4 18 4 13V6C4 5.735 4.105 5.48 4.293 5.293 4.48 5.105 4.735 5 5 5 7 5 9.5 3.8 11.24 2.28 11.452 2.099 11.721 2 12 2 12.279 2 12.548 2.099 12.76 2.28 14.51 3.81 17 5 19 5 19.265 5 19.52 5.105 19.707 5.293 19.895 5.48 20 5.735 20 6V13ZM12 8V12M12 16H12.01"
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
          d="M20 13C20 18 16.5 20.5 12.34 21.95 12.122 22.024 11.886 22.02 11.67 21.94 7.5 20.5 4 18 4 13V6C4 5.735 4.105 5.48 4.293 5.293 4.48 5.105 4.735 5 5 5 7 5 9.5 3.8 11.24 2.28 11.452 2.099 11.721 2 12 2 12.279 2 12.548 2.099 12.76 2.28 14.51 3.81 17 5 19 5 19.265 5 19.52 5.105 19.707 5.293 19.895 5.48 20 5.735 20 6V13ZM12 8V12M12 16H12.01"
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
          d="M20 13C20 18 16.5 20.5 12.34 21.95 12.122 22.024 11.886 22.02 11.67 21.94 7.5 20.5 4 18 4 13V6C4 5.735 4.105 5.48 4.293 5.293 4.48 5.105 4.735 5 5 5 7 5 9.5 3.8 11.24 2.28 11.452 2.099 11.721 2 12 2 12.279 2 12.548 2.099 12.76 2.28 14.51 3.81 17 5 19 5 19.265 5 19.52 5.105 19.707 5.293 19.895 5.48 20 5.735 20 6V13ZM12 8V12M12 16H12.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ShieldAlert doesn't support ${type}`);
  return null;
});

ShieldAlert.displayName = "ShieldAlert";

ShieldAlert.metadata = {
  name: "ShieldAlert",
  category: "stroke/gaming",
  tags: ["shield", "alert", "icon"],
  description: "ShieldAlert icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShieldAlert;
