import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HotelProps extends IconProps {
  type?: "stroke";
}

export const Hotel: IconComponent<HotelProps> = React.forwardRef<
  SVGSVGElement,
  HotelProps
>(function Hotel(
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
          d="M10 22V15.43M12 11H12.01M12 7H12.01M14 15.43V22M15 16C14.135 15.351 13.082 15 12 15 10.918 15 9.865 15.351 9 16M16 11H16.01M16 7H16.01M8 11H8.01M8 7H8.01"
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
          d="M10 22V15.43M12 11H12.01M12 7H12.01M14 15.43V22M15 16C14.135 15.351 13.082 15 12 15 10.918 15 9.865 15.351 9 16M16 11H16.01M16 7H16.01M8 11H8.01M8 7H8.01"
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

  console.error(`Hotel doesn't support ${type}`);
  return null;
});

Hotel.displayName = "Hotel";

Hotel.metadata = {
  name: "Hotel",
  category: "stroke/navigation",
  tags: ["hotel", "icon"],
  description: "Hotel icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hotel;
