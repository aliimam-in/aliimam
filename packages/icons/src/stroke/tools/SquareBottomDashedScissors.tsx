import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquareBottomDashedScissorsProps extends IconProps {
  type?: "stroke";
}

export const SquareBottomDashedScissors: IconComponent<SquareBottomDashedScissorsProps> =
  React.forwardRef<SVGSVGElement, SquareBottomDashedScissorsProps>(
    function SquareBottomDashedScissors(
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
              d="M4 22C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22M10 22H8M16 22H14"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.105 10 10 9.105 10 8 10 6.895 9.105 6 8 6 6.895 6 6 6.895 6 8 6 9.105 6.895 10 8 10ZM9.414 9.414 12 12M14.8 14.8 18 18M8 18C9.105 18 10 17.105 10 16 10 14.895 9.105 14 8 14 6.895 14 6 14.895 6 16 6 17.105 6.895 18 8 18ZM18 6 9.414 14.586"
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
              d="M4 22C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22M10 22H8M16 22H14"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.105 10 10 9.105 10 8 10 6.895 9.105 6 8 6 6.895 6 6 6.895 6 8 6 9.105 6.895 10 8 10ZM9.414 9.414 12 12M14.8 14.8 18 18M8 18C9.105 18 10 17.105 10 16 10 14.895 9.105 14 8 14 6.895 14 6 14.895 6 16 6 17.105 6.895 18 8 18ZM18 6 9.414 14.586"
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
              d="M4 22C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22M10 22H8M16 22H14"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.105 10 10 9.105 10 8 10 6.895 9.105 6 8 6 6.895 6 6 6.895 6 8 6 9.105 6.895 10 8 10ZM9.414 9.414 12 12M14.8 14.8 18 18M8 18C9.105 18 10 17.105 10 16 10 14.895 9.105 14 8 14 6.895 14 6 14.895 6 16 6 17.105 6.895 18 8 18ZM18 6 9.414 14.586"
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
              d="M4 22C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22M10 22H8M16 22H14"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.105 10 10 9.105 10 8 10 6.895 9.105 6 8 6 6.895 6 6 6.895 6 8 6 9.105 6.895 10 8 10ZM9.414 9.414 12 12M14.8 14.8 18 18M8 18C9.105 18 10 17.105 10 16 10 14.895 9.105 14 8 14 6.895 14 6 14.895 6 16 6 17.105 6.895 18 8 18ZM18 6 9.414 14.586"
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
              d="M4 22C3.47 22 2.961 21.789 2.586 21.414 2.211 21.039 2 20.53 2 20V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22M10 22H8M16 22H14"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.105 10 10 9.105 10 8 10 6.895 9.105 6 8 6 6.895 6 6 6.895 6 8 6 9.105 6.895 10 8 10ZM9.414 9.414 12 12M14.8 14.8 18 18M8 18C9.105 18 10 17.105 10 16 10 14.895 9.105 14 8 14 6.895 14 6 14.895 6 16 6 17.105 6.895 18 8 18ZM18 6 9.414 14.586"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`SquareBottomDashedScissors doesn't support ${type}`);
      return null;
    },
  );

SquareBottomDashedScissors.displayName = "SquareBottomDashedScissors";

SquareBottomDashedScissors.metadata = {
  name: "SquareBottomDashedScissors",
  category: "stroke/tools",
  tags: ["square", "bottom", "dashed", "scissors", "icon"],
  description: "SquareBottomDashedScissors icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareBottomDashedScissors;
