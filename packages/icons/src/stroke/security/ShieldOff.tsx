import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ShieldOffProps extends IconProps {
  type?: "stroke";
}

export const ShieldOff: IconComponent<ShieldOffProps> = React.forwardRef<
  SVGSVGElement,
  ShieldOffProps
>(function ShieldOff(
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
          d="M2 2 22 22M5 5C4.735 5 4.48 5.105 4.293 5.293 4.105 5.48 4 5.735 4 6V13C4 18 7.5 20.5 11.67 21.94 11.886 22.02 12.122 22.024 12.34 21.95 14.69 21.13 16.82 19.98 18.24 18.24M9.309 3.652C9.996 3.258 10.642 2.799 11.24 2.28 11.452 2.099 11.721 2 12 2 12.279 2 12.548 2.099 12.76 2.28 14.51 3.81 17 5 19 5 19.265 5 19.52 5.105 19.707 5.293 19.895 5.48 20 5.735 20 6V13C20.001 13.423 19.974 13.845 19.92 14.264"
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
          d="M2 2 22 22M5 5C4.735 5 4.48 5.105 4.293 5.293 4.105 5.48 4 5.735 4 6V13C4 18 7.5 20.5 11.67 21.94 11.886 22.02 12.122 22.024 12.34 21.95 14.69 21.13 16.82 19.98 18.24 18.24M9.309 3.652C9.995 3.258 10.642 2.799 11.24 2.28 11.452 2.099 11.721 2 12 2 12.279 2 12.548 2.099 12.76 2.28 14.51 3.81 17 5 19 5 19.265 5 19.52 5.105 19.707 5.293 19.895 5.48 20 5.735 20 6V13C20.001 13.423 19.974 13.845 19.92 14.264"
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
          d="M2 2 22 22M5 5C4.735 5 4.48 5.105 4.293 5.293 4.105 5.48 4 5.735 4 6V13C4 18 7.5 20.5 11.67 21.94 11.886 22.02 12.122 22.024 12.34 21.95 14.69 21.13 16.82 19.98 18.24 18.24M9.309 3.652C9.996 3.258 10.642 2.799 11.24 2.28 11.452 2.099 11.721 2 12 2 12.279 2 12.548 2.099 12.76 2.28 14.51 3.81 17 5 19 5 19.265 5 19.52 5.105 19.707 5.293 19.895 5.48 20 5.735 20 6V13C20.001 13.423 19.974 13.845 19.92 14.264"
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
          d="M2 2 22 22M5 5C4.735 5 4.48 5.105 4.293 5.293 4.105 5.48 4 5.735 4 6V13C4 18 7.5 20.5 11.67 21.94 11.886 22.02 12.122 22.024 12.34 21.95 14.69 21.13 16.82 19.98 18.24 18.24M9.309 3.652C9.995 3.258 10.642 2.799 11.24 2.28 11.452 2.099 11.721 2 12 2 12.279 2 12.548 2.099 12.76 2.28 14.51 3.81 17 5 19 5 19.265 5 19.52 5.105 19.707 5.293 19.895 5.48 20 5.735 20 6V13C20.001 13.423 19.974 13.845 19.92 14.264"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ShieldOff doesn't support ${type}`);
  return null;
});

ShieldOff.displayName = "ShieldOff";

ShieldOff.metadata = {
  name: "ShieldOff",
  category: "stroke/security",
  tags: ["shield", "off", "icon"],
  description: "ShieldOff icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ShieldOff;
