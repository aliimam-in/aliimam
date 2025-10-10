import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GalleryHorizontalEndProps extends IconProps {
  type?: "stroke";
}

export const GalleryHorizontalEnd: IconComponent<GalleryHorizontalEndProps> =
  React.forwardRef<SVGSVGElement, GalleryHorizontalEndProps>(
    function GalleryHorizontalEnd(
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
              d="M2 7V17M6 5V19M20 3H12C10.895 3 10 3.895 10 5V19C10 20.105 10.895 21 12 21H20C21.105 21 22 20.105 22 19V5C22 3.895 21.105 3 20 3Z"
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
              d="M2 7V17M6 5V19M20 3H12C10.895 3 10 3.895 10 5V19C10 20.105 10.895 21 12 21H20C21.105 21 22 20.105 22 19V5C22 3.895 21.105 3 20 3Z"
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
              d="M2 7V17M6 5V19M20 3H12C10.895 3 10 3.895 10 5V19C10 20.105 10.895 21 12 21H20C21.105 21 22 20.105 22 19V5C22 3.895 21.105 3 20 3Z"
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
              d="M2 7V17M6 5V19M20 3H12C10.895 3 10 3.895 10 5V19C10 20.105 10.895 21 12 21H20C21.105 21 22 20.105 22 19V5C22 3.895 21.105 3 20 3Z"
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
              d="M2 7V17M6 5V19M20 3H12C10.895 3 10 3.895 10 5V19C10 20.105 10.895 21 12 21H20C21.105 21 22 20.105 22 19V5C22 3.895 21.105 3 20 3Z"
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
              d="M2 7V17M6 5V19M20 3H12C10.895 3 10 3.895 10 5V19C10 20.105 10.895 21 12 21H20C21.105 21 22 20.105 22 19V5C22 3.895 21.105 3 20 3Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`GalleryHorizontalEnd doesn't support ${type}`);
      return null;
    },
  );

GalleryHorizontalEnd.displayName = "GalleryHorizontalEnd";

GalleryHorizontalEnd.metadata = {
  name: "GalleryHorizontalEnd",
  category: "stroke/photography",
  tags: ["gallery", "horizontal", "end", "icon"],
  description: "GalleryHorizontalEnd icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GalleryHorizontalEnd;
