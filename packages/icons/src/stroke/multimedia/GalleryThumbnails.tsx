import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GalleryThumbnailsProps extends IconProps {
  type?: "stroke";
}

export const GalleryThumbnails: IconComponent<GalleryThumbnailsProps> =
  React.forwardRef<SVGSVGElement, GalleryThumbnailsProps>(
    function GalleryThumbnails(
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
              d="M19 3H5C3.895 3 3 3.895 3 5V15C3 16.105 3.895 17 5 17H19C20.105 17 21 16.105 21 15V5C21 3.895 20.105 3 19 3ZM4 21H5M9 21H10M14 21H15M19 21H20"
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
              d="M19 3H5C3.895 3 3 3.895 3 5V15C3 16.105 3.895 17 5 17H19C20.105 17 21 16.105 21 15V5C21 3.895 20.105 3 19 3ZM4 21H5M9 21H10M14 21H15M19 21H20"
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
              d="M19 3H5C3.895 3 3 3.895 3 5V15C3 16.105 3.895 17 5 17H19C20.105 17 21 16.105 21 15V5C21 3.895 20.105 3 19 3ZM4 21H5M9 21H10M14 21H15M19 21H20"
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
              d="M19 3H5C3.895 3 3 3.895 3 5V15C3 16.105 3.895 17 5 17H19C20.105 17 21 16.105 21 15V5C21 3.895 20.105 3 19 3ZM4 21H5M9 21H10M14 21H15M19 21H20"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`GalleryThumbnails doesn't support ${type}`);
      return null;
    },
  );

GalleryThumbnails.displayName = "GalleryThumbnails";

GalleryThumbnails.metadata = {
  name: "GalleryThumbnails",
  category: "stroke/multimedia",
  tags: ["gallery", "thumbnails", "icon"],
  description: "GalleryThumbnails icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GalleryThumbnails;
