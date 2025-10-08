import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BrickWallFireProps extends IconProps {
  type?: "stroke";
}

export const BrickWallFire: IconComponent<BrickWallFireProps> =
  React.forwardRef<SVGSVGElement, BrickWallFireProps>(function BrickWallFire(
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
            d="M16 3V5.107M17 9C18 12 19.5 12.5 20.5 13.5 21.442 14.423 21.981 15.681 22 17 22 18.326 21.473 19.598 20.536 20.536 19.598 21.473 18.326 22 17 22 15.674 22 14.402 21.473 13.465 20.536 12.527 19.598 12 18.326 12 17 12 16.7 12 16.4 12.1 16.1 12.185 16.396 12.336 16.668 12.543 16.896 12.75 17.123 13.006 17.3 13.293 17.412 13.579 17.525 13.887 17.57 14.194 17.543 14.5 17.517 14.797 17.42 15.06 17.261 15.323 17.102 15.545 16.884 15.711 16.624 15.876 16.365 15.979 16.07 16.012 15.765 16.045 15.459 16.006 15.15 15.9 14.861 15.794 14.572 15.623 14.312 15.4 14.1 13 11.5 16 9 17 9Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.274V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H8.938M3 15H8.253M3 9H11.228M8 15V21M8 3V9"
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
            d="M16 3V5.107M17 9C18 12 19.5 12.5 20.5 13.5 21.442 14.423 21.981 15.681 22 17 22 18.326 21.473 19.598 20.536 20.536 19.598 21.473 18.326 22 17 22 15.674 22 14.402 21.473 13.465 20.536 12.527 19.598 12 18.326 12 17 12 16.7 12 16.4 12.1 16.1 12.185 16.396 12.336 16.668 12.543 16.896 12.75 17.123 13.006 17.3 13.293 17.412 13.579 17.525 13.887 17.57 14.194 17.543 14.5 17.517 14.797 17.42 15.06 17.261 15.323 17.102 15.545 16.884 15.711 16.624 15.876 16.365 15.979 16.07 16.012 15.765 16.045 15.459 16.006 15.15 15.9 14.861 15.794 14.572 15.623 14.312 15.4 14.1 13 11.5 16 9 17 9Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 8.274V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H8.938M3 15H8.253M3 9H11.228M8 15V21M8 3V9"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`BrickWallFire doesn't support ${type}`);
    return null;
  });

BrickWallFire.displayName = "BrickWallFire";

BrickWallFire.metadata = {
  name: "BrickWallFire",
  category: "stroke/home",
  tags: ["brick", "wall", "fire", "icon"],
  description: "BrickWallFire icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BrickWallFire;
