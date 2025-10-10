import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FlameKindlingProps extends IconProps {
  type?: "stroke";
}

export const FlameKindling: IconComponent<FlameKindlingProps> =
  React.forwardRef<SVGSVGElement, FlameKindlingProps>(function FlameKindling(
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
            d="M12 2C13 5 14.5 5.5 15.5 6.5 16.442 7.423 16.981 8.681 17 10 17 11.326 16.473 12.598 15.536 13.536 14.598 14.473 13.326 15 12 15 10.674 15 9.402 14.473 8.464 13.536 7.527 12.598 7 11.326 7 10 7 9.7 7 9.4 7.1 9.1 7.185 9.396 7.336 9.668 7.543 9.896 7.75 10.123 8.006 10.3 8.293 10.412 8.579 10.525 8.887 10.57 9.194 10.543 9.5 10.517 9.797 10.42 10.06 10.261 10.323 10.102 10.545 9.884 10.711 9.624 10.876 9.365 10.979 9.07 11.012 8.765 11.045 8.459 11.006 8.15 10.9 7.861 10.794 7.572 10.623 7.312 10.4 7.1 8 4.5 11 2 12 2ZM5 22 19 18M5 18 19 22"
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
            d="M12 2C13 5 14.5 5.5 15.5 6.5 16.442 7.423 16.981 8.681 17 10 17 11.326 16.473 12.598 15.536 13.536 14.598 14.473 13.326 15 12 15 10.674 15 9.402 14.473 8.464 13.536 7.527 12.598 7 11.326 7 10 7 9.7 7 9.4 7.1 9.1 7.185 9.396 7.336 9.668 7.543 9.896 7.75 10.123 8.006 10.3 8.293 10.412 8.579 10.525 8.887 10.57 9.194 10.543 9.5 10.517 9.797 10.42 10.06 10.261 10.323 10.102 10.545 9.884 10.711 9.624 10.876 9.365 10.979 9.07 11.012 8.765 11.045 8.459 11.006 8.15 10.9 7.861 10.794 7.572 10.623 7.312 10.4 7.1 8 4.5 11 2 12 2ZM5 22 19 18M5 18 19 22"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`FlameKindling doesn't support ${type}`);
    return null;
  });

FlameKindling.displayName = "FlameKindling";

FlameKindling.metadata = {
  name: "FlameKindling",
  category: "stroke/nature",
  tags: ["flame", "kindling", "icon"],
  description: "FlameKindling icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlameKindling;
