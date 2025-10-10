import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SchoolProps extends IconProps {
  type?: "stroke";
}

export const School: IconComponent<SchoolProps> = React.forwardRef<
  SVGSVGElement,
  SchoolProps
>(function School(
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
          d="M14 21V18C14 17.47 13.789 16.961 13.414 16.586 13.039 16.211 12.53 16 12 16 11.47 16 10.961 16.211 10.586 16.586 10.211 16.961 10 17.47 10 18V21M18 5V21M4 6 11.106 2.21C11.384 2.071 11.69 1.999 12 1.999 12.31 1.999 12.616 2.071 12.894 2.21L20 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 11 2.48 13.147C2.333 13.236 2.212 13.362 2.128 13.511 2.044 13.661 2 13.829 2 14.001V19C2 19.53 2.211 20.039 2.586 20.414 2.961 20.789 3.47 21 4 21H20C20.53 21 21.039 20.789 21.414 20.414 21.789 20.039 22 19.53 22 19V14C22 13.829 21.956 13.66 21.872 13.511 21.787 13.361 21.666 13.236 21.52 13.147L18 11M6 5V21M12 11C13.105 11 14 10.105 14 9 14 7.895 13.105 7 12 7 10.895 7 10 7.895 10 9 10 10.105 10.895 11 12 11Z"
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
          d="M14 21V18C14 17.47 13.789 16.961 13.414 16.586 13.039 16.211 12.53 16 12 16 11.47 16 10.961 16.211 10.586 16.586 10.211 16.961 10 17.47 10 18V21M18 5V21M4 6 11.106 2.21C11.384 2.071 11.69 1.999 12 1.999 12.31 1.999 12.616 2.071 12.894 2.21L20 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 11 2.48 13.147C2.333 13.236 2.212 13.362 2.128 13.511 2.044 13.661 2 13.829 2 14.001V19C2 19.53 2.211 20.039 2.586 20.414 2.961 20.789 3.47 21 4 21H20C20.53 21 21.039 20.789 21.414 20.414 21.789 20.039 22 19.53 22 19V14C22 13.829 21.956 13.66 21.872 13.511 21.787 13.361 21.666 13.236 21.52 13.147L18 11M6 5V21M12 11C13.105 11 14 10.105 14 9 14 7.895 13.105 7 12 7 10.895 7 10 7.895 10 9 10 10.105 10.895 11 12 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`School doesn't support ${type}`);
  return null;
});

School.displayName = "School";

School.metadata = {
  name: "School",
  category: "stroke/navigation",
  tags: ["school", "icon"],
  description: "School icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default School;
