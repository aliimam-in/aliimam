import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HardDriveUploadProps extends IconProps {
  type?: "stroke";
}

export const HardDriveUpload: IconComponent<HardDriveUploadProps> =
  React.forwardRef<SVGSVGElement, HardDriveUploadProps>(
    function HardDriveUpload(
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
              d="M16 6 12 2 8 6M12 2V10M20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 18H6.01M10 18H10.01"
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
              d="M16 6 12 2 8 6M12 2V10M20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 18H6.01M10 18H10.01"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`HardDriveUpload doesn't support ${type}`);
      return null;
    },
  );

HardDriveUpload.displayName = "HardDriveUpload";

HardDriveUpload.metadata = {
  name: "HardDriveUpload",
  category: "stroke/codingDevelopment",
  tags: ["hard", "drive", "upload", "icon"],
  description: "HardDriveUpload icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HardDriveUpload;
