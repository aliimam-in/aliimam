import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BuildingProps extends IconProps {
  type?: "solid" | "stroke";
}

export const Building: IconComponent<BuildingProps> = React.forwardRef<
  SVGSVGElement,
  BuildingProps
>(function Building(
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
  if (type === "solid") {
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
          d="M18 0.5C19.933 0.5 21.5 2.067 21.5 4V20C21.5 21.933 19.933 23.5 18 23.5H15V19C15 18.7348 14.8946 18.4805 14.707 18.293C14.5195 18.1054 14.2652 18 14 18H10C9.73478 18 9.4805 18.1054 9.29297 18.293C9.10543 18.4805 9 18.7348 9 19V23.5H15H6C4.067 23.5 2.5 21.933 2.5 20V4C2.5 2.067 4.067 0.5 6 0.5H18ZM8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5H8.00977C8.83819 15.5 9.50977 14.8284 9.50977 14C9.50977 13.1716 8.83819 12.5 8.00977 12.5H8ZM12 12.5C11.1716 12.5 10.5 13.1716 10.5 14C10.5 14.8284 11.1716 15.5 12 15.5H12.0098C12.8382 15.5 13.5098 14.8284 13.5098 14C13.5098 13.1716 12.8382 12.5 12.0098 12.5H12ZM16 12.5C15.1716 12.5 14.5 13.1716 14.5 14C14.5 14.8284 15.1716 15.5 16 15.5H16.0098C16.8382 15.5 17.5098 14.8284 17.5098 14C17.5098 13.1716 16.8382 12.5 16.0098 12.5H16ZM8 8.5C7.17157 8.5 6.5 9.17157 6.5 10C6.5 10.8284 7.17157 11.5 8 11.5H8.00977C8.83819 11.5 9.50977 10.8284 9.50977 10C9.50977 9.17157 8.83819 8.5 8.00977 8.5H8ZM12 8.5C11.1716 8.5 10.5 9.17157 10.5 10C10.5 10.8284 11.1716 11.5 12 11.5H12.0098C12.8382 11.5 13.5098 10.8284 13.5098 10C13.5098 9.17157 12.8382 8.5 12.0098 8.5H12ZM16 8.5C15.1716 8.5 14.5 9.17157 14.5 10C14.5 10.8284 15.1716 11.5 16 11.5H16.0098C16.8382 11.5 17.5098 10.8284 17.5098 10C17.5098 9.17157 16.8382 8.5 16.0098 8.5H16ZM8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5H8.00977C8.83819 7.5 9.50977 6.82843 9.50977 6C9.50977 5.17157 8.83819 4.5 8.00977 4.5H8ZM12 4.5C11.1716 4.5 10.5 5.17157 10.5 6C10.5 6.82843 11.1716 7.5 12 7.5H12.0098C12.8382 7.5 13.5098 6.82843 13.5098 6C13.5098 5.17157 12.8382 4.5 12.0098 4.5H12ZM16 4.5C15.1716 4.5 14.5 5.17157 14.5 6C14.5 6.82843 15.1716 7.5 16 7.5H16.0098C16.8382 7.5 17.5098 6.82843 17.5098 6C17.5098 5.17157 16.8382 4.5 16.0098 4.5H16Z"
          fill="currentColor"
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
          d="M12 10H12.01M12 14H12.01M12 6H12.01M16 10H16.01M16 14H16.01M16 6H16.01M8 10H8.01M8 14H8.01M8 6H8.01M9 22V19C9 18.735 9.105 18.48 9.293 18.293 9.48 18.105 9.735 18 10 18H14C14.265 18 14.52 18.105 14.707 18.293 14.895 18.48 15 18.735 15 19V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Building doesn't support ${type}`);
  return null;
});

Building.displayName = "Building";

Building.metadata = {
  name: "Building",
  category: "solid/accountsAccess",
  tags: ["building", "icon"],
  description: "Building icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Building;
