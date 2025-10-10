import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FireExtinguisherProps extends IconProps {
  type?: "stroke";
}

export const FireExtinguisher: IconComponent<FireExtinguisherProps> =
  React.forwardRef<SVGSVGElement, FireExtinguisherProps>(
    function FireExtinguisher(
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
              d="M15 6.5V3C15 2.735 14.895 2.48 14.707 2.293 14.52 2.105 14.265 2 14 2H12C11.735 2 11.48 2.105 11.293 2.293 11.105 2.48 11 2.735 11 3V6.5M9 18H17M18 3H15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 3C9.409 3 7.883 3.632 6.757 4.757 5.632 5.883 5 7.409 5 9V20M5 13H9M17 10C17 8.939 16.579 7.922 15.828 7.172 15.078 6.421 14.061 6 13 6 11.939 6 10.922 6.421 10.172 7.172 9.421 7.922 9 8.939 9 10V20C9 20.53 9.211 21.039 9.586 21.414 9.961 21.789 10.47 22 11 22H15C15.53 22 16.039 21.789 16.414 21.414 16.789 21.039 17 20.53 17 20V10Z"
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
              d="M15 6.5V3C15 2.735 14.895 2.48 14.707 2.293 14.52 2.105 14.265 2 14 2H12C11.735 2 11.48 2.105 11.293 2.293 11.105 2.48 11 2.735 11 3V6.5M9 18H17M18 3H15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 3C9.409 3 7.883 3.632 6.757 4.757 5.632 5.883 5 7.409 5 9V20M5 13H9M17 10C17 8.939 16.579 7.922 15.828 7.172 15.078 6.421 14.061 6 13 6 11.939 6 10.922 6.421 10.172 7.172 9.421 7.922 9 8.939 9 10V20C9 20.53 9.211 21.039 9.586 21.414 9.961 21.789 10.47 22 11 22H15C15.53 22 16.039 21.789 16.414 21.414 16.789 21.039 17 20.53 17 20V10Z"
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
              d="M15 6.5V3C15 2.735 14.895 2.48 14.707 2.293 14.52 2.105 14.265 2 14 2H12C11.735 2 11.48 2.105 11.293 2.293 11.105 2.48 11 2.735 11 3V6.5M9 18H17M18 3H15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 3C9.409 3 7.883 3.632 6.757 4.757 5.632 5.883 5 7.409 5 9V20M5 13H9M17 10C17 8.939 16.579 7.922 15.828 7.172 15.078 6.421 14.061 6 13 6 11.939 6 10.922 6.421 10.172 7.172 9.421 7.922 9 8.939 9 10V20C9 20.53 9.211 21.039 9.586 21.414 9.961 21.789 10.47 22 11 22H15C15.53 22 16.039 21.789 16.414 21.414 16.789 21.039 17 20.53 17 20V10Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`FireExtinguisher doesn't support ${type}`);
      return null;
    },
  );

FireExtinguisher.displayName = "FireExtinguisher";

FireExtinguisher.metadata = {
  name: "FireExtinguisher",
  category: "stroke/tools",
  tags: ["fire", "extinguisher", "icon"],
  description: "FireExtinguisher icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FireExtinguisher;
