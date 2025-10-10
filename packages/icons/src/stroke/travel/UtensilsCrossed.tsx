import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UtensilsCrossedProps extends IconProps {
  type?: "stroke";
}

export const UtensilsCrossed: IconComponent<UtensilsCrossedProps> =
  React.forwardRef<SVGSVGElement, UtensilsCrossedProps>(
    function UtensilsCrossed(
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
              d="M16 2 13.7 4.3C13.15 4.861 12.842 5.615 12.842 6.4 12.842 7.185 13.15 7.939 13.7 8.5L15.5 10.3C16.061 10.85 16.815 11.158 17.6 11.158 18.385 11.158 19.139 10.85 19.7 10.3L22 8M15 15 3.3 3.3C2.901 3.691 2.584 4.158 2.368 4.673 2.151 5.188 2.04 5.741 2.04 6.3 2.04 6.859 2.151 7.412 2.368 7.927 2.584 8.442 2.901 8.909 3.3 9.3L10.6 16.6C11.3 17.3 12.6 17.3 13.4 16.6L15 15ZM15 15 22 22M2.1 21.8 8.5 15.5M19 5 12 12"
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
              d="M16 2 13.7 4.3C13.15 4.861 12.843 5.615 12.843 6.4 12.843 7.185 13.15 7.939 13.7 8.5L15.5 10.3C16.061 10.85 16.815 11.158 17.6 11.158 18.385 11.158 19.139 10.85 19.7 10.3L22 8M15 15 3.3 3.3C2.901 3.691 2.584 4.158 2.367 4.673 2.151 5.188 2.039 5.741 2.039 6.3 2.039 6.859 2.151 7.412 2.367 7.927 2.584 8.442 2.901 8.909 3.3 9.3L10.6 16.6C11.3 17.3 12.6 17.3 13.4 16.6L15 15ZM15 15 22 22M2.1 21.8 8.5 15.5M19 5 12 12"
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
              d="M16 2 13.7 4.3C13.15 4.861 12.842 5.615 12.842 6.4 12.842 7.185 13.15 7.939 13.7 8.5L15.5 10.3C16.061 10.85 16.815 11.158 17.6 11.158 18.385 11.158 19.139 10.85 19.7 10.3L22 8M15 15 3.3 3.3C2.901 3.691 2.584 4.158 2.367 4.673 2.151 5.188 2.039 5.741 2.039 6.3 2.039 6.859 2.151 7.412 2.367 7.927 2.584 8.442 2.901 8.909 3.3 9.3L10.6 16.6C11.3 17.3 12.6 17.3 13.4 16.6L15 15ZM15 15 22 22M2.1 21.8 8.5 15.5M19 5 12 12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`UtensilsCrossed doesn't support ${type}`);
      return null;
    },
  );

UtensilsCrossed.displayName = "UtensilsCrossed";

UtensilsCrossed.metadata = {
  name: "UtensilsCrossed",
  category: "stroke/travel",
  tags: ["utensils", "crossed", "icon"],
  description: "UtensilsCrossed icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UtensilsCrossed;
