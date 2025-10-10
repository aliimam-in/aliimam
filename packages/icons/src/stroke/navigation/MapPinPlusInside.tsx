import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MapPinPlusInsideProps extends IconProps {
  type?: "stroke";
}

export const MapPinPlusInside: IconComponent<MapPinPlusInsideProps> =
  React.forwardRef<SVGSVGElement, MapPinPlusInsideProps>(
    function MapPinPlusInside(
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
              d="M20 10C20 14.993 14.461 20.193 12.601 21.799 12.428 21.929 12.217 22 12 22 11.783 22 11.572 21.929 11.399 21.799 9.539 20.193 4 14.993 4 10 4 7.878 4.843 5.843 6.343 4.343 7.843 2.843 9.878 2 12 2 14.122 2 16.157 2.843 17.657 4.343 19.157 5.843 20 7.878 20 10ZM12 7V13M9 10H15"
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
              d="M20 10C20 14.993 14.461 20.193 12.601 21.799 12.428 21.929 12.217 22 12 22 11.783 22 11.572 21.929 11.399 21.799 9.539 20.193 4 14.993 4 10 4 7.878 4.843 5.843 6.343 4.343 7.843 2.843 9.878 2 12 2 14.122 2 16.157 2.843 17.657 4.343 19.157 5.843 20 7.878 20 10ZM12 7V13M9 10H15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`MapPinPlusInside doesn't support ${type}`);
      return null;
    },
  );

MapPinPlusInside.displayName = "MapPinPlusInside";

MapPinPlusInside.metadata = {
  name: "MapPinPlusInside",
  category: "stroke/navigation",
  tags: ["map", "pin", "plus", "inside", "icon"],
  description: "MapPinPlusInside icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MapPinPlusInside;
