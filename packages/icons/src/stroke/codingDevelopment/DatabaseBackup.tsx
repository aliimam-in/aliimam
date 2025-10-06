import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DatabaseBackupProps extends IconProps {
  type?: "stroke";
}

export const DatabaseBackup: IconComponent<DatabaseBackupProps> =
  React.forwardRef<SVGSVGElement, DatabaseBackupProps>(function DatabaseBackup(
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
            d="M12 8C16.971 8 21 6.657 21 5 21 3.343 16.971 2 12 2 7.029 2 3 3.343 3 5 3 6.657 7.029 8 12 8ZM3 12C2.999 12.559 3.466 13.107 4.349 13.583 5.233 14.058 6.497 14.442 8 14.69M21 9.3V5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 5V19C2.999 19.649 3.63 20.28 4.796 20.799 5.962 21.318 7.602 21.698 9.47 21.88M12 12V16H16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 20C13.6296 20.8395 14.5075 21.4597 15.5092 21.7726C16.5108 22.0855 17.5856 22.0753 18.5811 21.7434C19.5767 21.4116 20.4426 20.7749 21.0562 19.9236C21.6698 19.0722 22 18.0494 22 17C22 15.8065 21.5259 14.6619 20.682 13.818C19.8381 12.9741 18.6935 12.5 17.5 12.5C16.17 12.5 14.96 13.04 14.09 13.91L12 16"
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
            d="M12 8C16.971 8 21 6.657 21 5 21 3.343 16.971 2 12 2 7.029 2 3 3.343 3 5 3 6.657 7.029 8 12 8ZM3 12C2.999 12.559 3.466 13.107 4.349 13.583 5.233 14.058 6.497 14.442 8 14.69M21 9.3V5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 5V19C2.999 19.649 3.63 20.28 4.796 20.799 5.962 21.318 7.602 21.698 9.47 21.88M12 12V16H16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 20C13.6296 20.8395 14.5075 21.4597 15.5092 21.7726C16.5108 22.0855 17.5856 22.0753 18.5811 21.7434C19.5767 21.4116 20.4426 20.7749 21.0562 19.9236C21.6698 19.0722 22 18.0494 22 17C22 15.8065 21.5259 14.6619 20.682 13.818C19.8381 12.9741 18.6935 12.5 17.5 12.5C16.17 12.5 14.96 13.04 14.09 13.91L12 16"
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
            d="M12 8C16.971 8 21 6.657 21 5 21 3.343 16.971 2 12 2 7.029 2 3 3.343 3 5 3 6.657 7.029 8 12 8ZM3 12C2.999 12.559 3.466 13.107 4.349 13.583 5.233 14.058 6.497 14.442 8 14.69M21 9.3V5"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 5V19C2.999 19.649 3.63 20.28 4.796 20.799 5.962 21.318 7.602 21.698 9.47 21.88M12 12V16H16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 20C13.6296 20.8395 14.5075 21.4597 15.5092 21.7726C16.5108 22.0855 17.5856 22.0753 18.5811 21.7434C19.5767 21.4116 20.4426 20.7749 21.0562 19.9236C21.6698 19.0722 22 18.0494 22 17C22 15.8065 21.5259 14.6619 20.682 13.818C19.8381 12.9741 18.6935 12.5 17.5 12.5C16.17 12.5 14.96 13.04 14.09 13.91L12 16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`DatabaseBackup doesn't support ${type}`);
    return null;
  });

DatabaseBackup.displayName = "DatabaseBackup";

DatabaseBackup.metadata = {
  name: "DatabaseBackup",
  category: "stroke/codingDevelopment",
  tags: ["database", "backup", "icon"],
  description: "DatabaseBackup icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DatabaseBackup;
