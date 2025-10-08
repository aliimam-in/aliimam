import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HardDriveProps extends IconProps {
  type?: "stroke";
}

export const HardDrive: IconComponent<HardDriveProps> = React.forwardRef<
  SVGSVGElement,
  HardDriveProps
>(function HardDrive(
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
          d="M22 12H2M5.45 5.11 2 12V18C2 18.53 2.211 19.039 2.586 19.414 2.961 19.789 3.47 20 4 20H20C20.53 20 21.039 19.789 21.414 19.414 21.789 19.039 22 18.53 22 18V12L18.55 5.11C18.384 4.777 18.129 4.496 17.813 4.3 17.497 4.104 17.132 4 16.76 4H7.24C6.868 4 6.503 4.104 6.187 4.3 5.871 4.496 5.616 4.777 5.45 5.11ZM6 16H6.01M10 16H10.01"
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
          d="M22 12H2M5.45 5.11 2 12V18C2 18.53 2.211 19.039 2.586 19.414 2.961 19.789 3.47 20 4 20H20C20.53 20 21.039 19.789 21.414 19.414 21.789 19.039 22 18.53 22 18V12L18.55 5.11C18.384 4.777 18.129 4.496 17.813 4.3 17.497 4.104 17.132 4 16.76 4H7.24C6.868 4 6.503 4.104 6.187 4.3 5.871 4.496 5.616 4.777 5.45 5.11ZM6 16H6.01M10 16H10.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`HardDrive doesn't support ${type}`);
  return null;
});

HardDrive.displayName = "HardDrive";

HardDrive.metadata = {
  name: "HardDrive",
  category: "stroke/devices",
  tags: ["hard", "drive", "icon"],
  description: "HardDrive icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HardDrive;
