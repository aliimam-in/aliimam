import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowBigDownDashProps extends IconProps {
  type?: "stroke";
}

export const ArrowBigDownDash: IconComponent<ArrowBigDownDashProps> =
  React.forwardRef<SVGSVGElement, ArrowBigDownDashProps>(
    function ArrowBigDownDash(
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
              d="M15 11C15 11.265 15.105 11.52 15.293 11.707 15.48 11.895 15.735 12 16 12H18.939C19.165 11.956 19.4 11.991 19.604 12.1 19.807 12.21 19.966 12.386 20.054 12.599 20.143 12.812 20.155 13.049 20.088 13.27 20.021 13.491 19.88 13.682 19.689 13.811L12.854 20.647C12.742 20.759 12.609 20.848 12.462 20.909 12.316 20.969 12.159 21.001 12 21.001 11.842 21.001 11.685 20.969 11.539 20.909 11.392 20.848 11.259 20.759 11.147 20.647L4.31 13.81C4.119 13.681 3.978 13.49 3.911 13.269 3.844 13.048 3.856 12.811 3.945 12.598 4.033 12.385 4.192 12.209 4.395 12.099 4.599 11.99 4.833 11.955 5.06 11.999H8C8.265 11.999 8.519 11.894 8.707 11.706 8.895 11.519 9 11.264 9 10.999V9C9 8.735 9.105 8.48 9.293 8.293 9.48 8.105 9.735 8 10 8H14C14.265 8 14.52 8.105 14.707 8.293 14.895 8.48 15 8.735 15 9V11ZM9 4H15"
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
              d="M15 11C15 11.265 15.105 11.52 15.293 11.707 15.481 11.895 15.735 12 16 12H18.939C19.166 11.956 19.4 11.991 19.604 12.1 19.807 12.21 19.966 12.386 20.054 12.599 20.143 12.812 20.155 13.049 20.088 13.27 20.021 13.491 19.88 13.682 19.689 13.811L12.854 20.647C12.742 20.759 12.609 20.848 12.463 20.909 12.316 20.969 12.159 21.001 12.001 21.001 11.842 21.001 11.685 20.969 11.539 20.909 11.392 20.848 11.259 20.759 11.147 20.647L4.31 13.81C4.119 13.681 3.978 13.49 3.911 13.269 3.844 13.048 3.856 12.811 3.945 12.598 4.033 12.385 4.192 12.209 4.395 12.099 4.599 11.99 4.834 11.955 5.06 11.999H8C8.265 11.999 8.52 11.894 8.707 11.706 8.895 11.519 9 11.264 9 10.999V9C9 8.735 9.105 8.48 9.293 8.293 9.48 8.105 9.735 8 10 8H14C14.265 8 14.52 8.105 14.707 8.293 14.895 8.48 15 8.735 15 9V11ZM9 4H15"
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
              d="M15 11C15 11.265 15.105 11.52 15.293 11.707 15.48 11.895 15.735 12 16 12H18.939C19.165 11.956 19.4 11.991 19.604 12.1 19.807 12.21 19.966 12.386 20.054 12.599 20.143 12.812 20.155 13.049 20.088 13.27 20.021 13.491 19.88 13.682 19.689 13.811L12.854 20.647C12.742 20.759 12.609 20.848 12.462 20.909 12.316 20.969 12.159 21.001 12.001 21.001 11.842 21.001 11.685 20.969 11.539 20.909 11.392 20.848 11.259 20.759 11.147 20.647L4.31 13.81C4.119 13.681 3.978 13.49 3.911 13.269 3.844 13.048 3.856 12.811 3.945 12.598 4.033 12.385 4.192 12.209 4.395 12.099 4.599 11.99 4.834 11.955 5.06 11.999H8C8.265 11.999 8.52 11.894 8.707 11.706 8.895 11.519 9 11.264 9 10.999V9C9 8.735 9.105 8.48 9.293 8.293 9.48 8.105 9.735 8 10 8H14C14.265 8 14.52 8.105 14.707 8.293 14.895 8.48 15 8.735 15 9V11ZM9 4H15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowBigDownDash doesn't support ${type}`);
      return null;
    },
  );

ArrowBigDownDash.displayName = "ArrowBigDownDash";

ArrowBigDownDash.metadata = {
  name: "ArrowBigDownDash",
  category: "stroke/navigation",
  tags: ["arrow", "big", "down", "dash", "icon"],
  description: "ArrowBigDownDash icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowBigDownDash;
