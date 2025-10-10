import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DiscAlbumProps extends IconProps {
  type?: "stroke";
}

export const DiscAlbum: IconComponent<DiscAlbumProps> = React.forwardRef<
  SVGSVGElement,
  DiscAlbumProps
>(function DiscAlbum(
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
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17C14.761 17 17 14.761 17 12 17 9.239 14.761 7 12 7 9.239 7 7 9.239 7 12 7 14.761 9.239 17 12 17ZM12 12H12.01"
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
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17C14.761 17 17 14.761 17 12 17 9.239 14.761 7 12 7 9.239 7 7 9.239 7 12 7 14.761 9.239 17 12 17ZM12 12H12.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`DiscAlbum doesn't support ${type}`);
  return null;
});

DiscAlbum.displayName = "DiscAlbum";

DiscAlbum.metadata = {
  name: "DiscAlbum",
  category: "stroke/multimedia",
  tags: ["disc", "album", "icon"],
  description: "DiscAlbum icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DiscAlbum;
