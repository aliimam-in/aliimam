import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HousePlugProps extends IconProps {
  type?: "stroke";
}

export const HousePlug: IconComponent<HousePlugProps> = React.forwardRef<
  SVGSVGElement,
  HousePlugProps
>(function HousePlug(
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
          d="M10 12V8.964M14 12V8.964M15 12C15.265 12 15.52 12.105 15.707 12.293 15.895 12.48 16 12.735 16 13V15C16 15.53 15.789 16.039 15.414 16.414 15.039 16.789 14.53 17 14 17H10C9.47 17 8.961 16.789 8.586 16.414 8.211 16.039 8 15.53 8 15V13C8 12.735 8.105 12.48 8.293 12.293 8.48 12.105 8.735 12 9 12H15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99999C2.99993 9.70906 3.06333 9.42161 3.18579 9.15771C3.30824 8.8938 3.4868 8.65979 3.709 8.47199L10.709 2.47199C11.07 2.1669 11.5274 1.99951 12 1.99951C12.4726 1.99951 12.93 2.1669 13.291 2.47199L20.291 8.47199C20.5132 8.65979 20.6918 8.8938 20.8142 9.15771C20.9367 9.42161 21.0001 9.70906 21 9.99999V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H14C13.4696 21 12.9609 20.7893 12.5858 20.4142C12.2107 20.0391 12 19.5304 12 19V17"
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
          d="M10 12V8.964M14 12V8.964M15 12C15.265 12 15.52 12.105 15.707 12.293 15.895 12.48 16 12.735 16 13V15C16 15.53 15.789 16.039 15.414 16.414 15.039 16.789 14.53 17 14 17H10C9.47 17 8.961 16.789 8.586 16.414 8.211 16.039 8 15.53 8 15V13C8 12.735 8.105 12.48 8.293 12.293 8.48 12.105 8.735 12 9 12H15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99999C2.99993 9.70906 3.06333 9.42161 3.18579 9.15771C3.30824 8.8938 3.4868 8.65979 3.709 8.47199L10.709 2.47199C11.07 2.1669 11.5274 1.99951 12 1.99951C12.4726 1.99951 12.93 2.1669 13.291 2.47199L20.291 8.47199C20.5132 8.65979 20.6918 8.8938 20.8142 9.15771C20.9367 9.42161 21.0001 9.70906 21 9.99999V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H14C13.4696 21 12.9609 20.7893 12.5858 20.4142C12.2107 20.0391 12 19.5304 12 19V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`HousePlug doesn't support ${type}`);
  return null;
});

HousePlug.displayName = "HousePlug";

HousePlug.metadata = {
  name: "HousePlug",
  category: "stroke/home",
  tags: ["house", "plug", "icon"],
  description: "HousePlug icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HousePlug;
