import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GalleryHorizontalProps extends IconProps {
  type?: "stroke";
}

export const GalleryHorizontal: IconComponent<GalleryHorizontalProps> =
  React.forwardRef<SVGSVGElement, GalleryHorizontalProps>(
    function GalleryHorizontal(
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
              d="M2 3V21M16 3H8C6.895 3 6 3.895 6 5V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V5C18 3.895 17.105 3 16 3ZM22 3V21"
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
              d="M2 3V21M16 3H8C6.895 3 6 3.895 6 5V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V5C18 3.895 17.105 3 16 3ZM22 3V21"
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
              d="M2 3V21M16 3H8C6.895 3 6 3.895 6 5V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V5C18 3.895 17.105 3 16 3ZM22 3V21"
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
              d="M2 3V21M16 3H8C6.895 3 6 3.895 6 5V19C6 20.105 6.895 21 8 21H16C17.105 21 18 20.105 18 19V5C18 3.895 17.105 3 16 3ZM22 3V21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`GalleryHorizontal doesn't support ${type}`);
      return null;
    },
  );

GalleryHorizontal.displayName = "GalleryHorizontal";

GalleryHorizontal.metadata = {
  name: "GalleryHorizontal",
  category: "stroke/multimedia",
  tags: ["gallery", "horizontal", "icon"],
  description: "GalleryHorizontal icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GalleryHorizontal;
