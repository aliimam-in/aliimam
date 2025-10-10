import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowBigUpDashProps extends IconProps {
  type?: "stroke";
}

export const ArrowBigUpDash: IconComponent<ArrowBigUpDashProps> =
  React.forwardRef<SVGSVGElement, ArrowBigUpDashProps>(function ArrowBigUpDash(
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
            d="M9 13C9 12.735 8.895 12.481 8.707 12.293 8.519 12.105 8.265 12 8 12H5.061C4.834 12.044 4.6 12.009 4.396 11.9 4.193 11.79 4.034 11.614 3.945 11.401 3.857 11.188 3.845 10.951 3.912 10.73 3.979 10.509 4.119 10.318 4.311 10.189L11.147 3.354C11.259 3.242 11.392 3.153 11.539 3.092 11.685 3.032 11.842 3 12 3 12.159 3 12.316 3.032 12.462 3.092 12.609 3.153 12.742 3.242 12.854 3.354L19.689 10.189C19.88 10.318 20.021 10.509 20.088 10.73 20.154 10.951 20.143 11.188 20.054 11.401 19.966 11.614 19.807 11.79 19.603 11.9 19.4 12.009 19.165 12.044 18.939 12H16C15.735 12 15.48 12.105 15.293 12.293 15.105 12.481 15 12.735 15 13V15C15 15.265 14.895 15.52 14.707 15.707 14.52 15.895 14.265 16 14 16H10C9.735 16 9.48 15.895 9.293 15.707 9.105 15.52 9 15.265 9 15V13ZM9 20H15"
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
            d="M9 13C9 12.735 8.895 12.481 8.707 12.293 8.519 12.105 8.265 12 8 12H5.061C4.834 12.044 4.6 12.009 4.396 11.9 4.193 11.79 4.034 11.614 3.945 11.401 3.857 11.188 3.845 10.951 3.912 10.73 3.979 10.509 4.119 10.318 4.311 10.189L11.147 3.354C11.259 3.242 11.392 3.153 11.539 3.092 11.685 3.032 11.842 3 12 3 12.159 3 12.316 3.032 12.462 3.092 12.609 3.153 12.742 3.242 12.854 3.354L19.689 10.189C19.88 10.318 20.021 10.509 20.088 10.73 20.154 10.951 20.143 11.188 20.054 11.401 19.966 11.614 19.807 11.79 19.603 11.9 19.4 12.009 19.165 12.044 18.939 12H16C15.735 12 15.48 12.105 15.293 12.293 15.105 12.481 15 12.735 15 13V15C15 15.265 14.895 15.52 14.707 15.707 14.52 15.895 14.265 16 14 16H10C9.735 16 9.48 15.895 9.293 15.707 9.105 15.52 9 15.265 9 15V13ZM9 20H15"
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
            d="M9 13C9 12.735 8.895 12.481 8.707 12.293 8.52 12.105 8.265 12 8 12H5.061C4.835 12.044 4.6 12.009 4.396 11.9 4.193 11.79 4.034 11.614 3.946 11.401 3.857 11.188 3.845 10.951 3.912 10.73 3.979 10.509 4.12 10.318 4.311 10.189L11.147 3.354C11.259 3.242 11.392 3.153 11.539 3.092 11.685 3.032 11.842 3 12.001 3 12.159 3 12.316 3.032 12.462 3.092 12.609 3.153 12.742 3.242 12.854 3.354L19.689 10.189C19.88 10.318 20.021 10.509 20.088 10.73 20.155 10.951 20.143 11.188 20.054 11.401 19.966 11.614 19.807 11.79 19.604 11.9 19.4 12.009 19.166 12.044 18.939 12H16C15.735 12 15.48 12.105 15.293 12.293 15.105 12.481 15 12.735 15 13V15C15 15.265 14.895 15.52 14.707 15.707 14.52 15.895 14.265 16 14 16H10C9.735 16 9.48 15.895 9.293 15.707 9.105 15.52 9 15.265 9 15V13ZM9 20H15"
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
            d="M9 13C9 12.735 8.895 12.481 8.707 12.293 8.519 12.105 8.265 12 8 12H5.061C4.834 12.044 4.6 12.009 4.396 11.9 4.193 11.79 4.034 11.614 3.945 11.401 3.857 11.188 3.845 10.951 3.912 10.73 3.979 10.509 4.119 10.318 4.311 10.189L11.147 3.354C11.259 3.242 11.392 3.153 11.539 3.092 11.685 3.032 11.842 3 12 3 12.159 3 12.316 3.032 12.462 3.092 12.609 3.153 12.742 3.242 12.854 3.354L19.689 10.189C19.88 10.318 20.021 10.509 20.088 10.73 20.154 10.951 20.143 11.188 20.054 11.401 19.966 11.614 19.807 11.79 19.603 11.9 19.4 12.009 19.165 12.044 18.939 12H16C15.735 12 15.48 12.105 15.293 12.293 15.105 12.481 15 12.735 15 13V15C15 15.265 14.895 15.52 14.707 15.707 14.52 15.895 14.265 16 14 16H10C9.735 16 9.48 15.895 9.293 15.707 9.105 15.52 9 15.265 9 15V13ZM9 20H15"
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
            d="M9 13C9 12.735 8.895 12.481 8.707 12.293 8.52 12.105 8.265 12 8 12H5.061C4.835 12.044 4.6 12.009 4.396 11.9 4.193 11.79 4.034 11.614 3.946 11.401 3.857 11.188 3.845 10.951 3.912 10.73 3.979 10.509 4.12 10.318 4.311 10.189L11.147 3.354C11.259 3.242 11.392 3.153 11.539 3.092 11.685 3.032 11.842 3 12.001 3 12.159 3 12.316 3.032 12.462 3.092 12.609 3.153 12.742 3.242 12.854 3.354L19.689 10.189C19.88 10.318 20.021 10.509 20.088 10.73 20.155 10.951 20.143 11.188 20.054 11.401 19.966 11.614 19.807 11.79 19.604 11.9 19.4 12.009 19.166 12.044 18.939 12H16C15.735 12 15.48 12.105 15.293 12.293 15.105 12.481 15 12.735 15 13V15C15 15.265 14.895 15.52 14.707 15.707 14.52 15.895 14.265 16 14 16H10C9.735 16 9.48 15.895 9.293 15.707 9.105 15.52 9 15.265 9 15V13ZM9 20H15"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowBigUpDash doesn't support ${type}`);
    return null;
  });

ArrowBigUpDash.displayName = "ArrowBigUpDash";

ArrowBigUpDash.metadata = {
  name: "ArrowBigUpDash",
  category: "stroke/navigation",
  tags: ["arrow", "big", "up", "dash", "icon"],
  description: "ArrowBigUpDash icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigUpDash;
