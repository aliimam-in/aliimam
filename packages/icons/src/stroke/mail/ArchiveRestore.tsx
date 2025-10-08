import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArchiveRestoreProps extends IconProps {
  type?: "stroke";
}

export const ArchiveRestore: IconComponent<ArchiveRestoreProps> =
  React.forwardRef<SVGSVGElement, ArchiveRestoreProps>(function ArchiveRestore(
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
            d="M21 3H3C2.448 3 2 3.448 2 4V7C2 7.552 2.448 8 3 8H21C21.552 8 22 7.552 22 7V4C22 3.448 21.552 3 21 3ZM4 8V19C4 19.53 4.211 20.039 4.586 20.414 4.961 20.789 5.47 21 6 21H8M20 8V19C20 19.53 19.789 20.039 19.414 20.414 19.039 20.789 18.53 21 18 21H16M9 15 12 12 15 15M12 12V21"
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
            d="M21 3H3C2.448 3 2 3.448 2 4V7C2 7.552 2.448 8 3 8H21C21.552 8 22 7.552 22 7V4C22 3.448 21.552 3 21 3ZM4 8V19C4 19.53 4.211 20.039 4.586 20.414 4.961 20.789 5.47 21 6 21H8M20 8V19C20 19.53 19.789 20.039 19.414 20.414 19.039 20.789 18.53 21 18 21H16M9 15 12 12 15 15M12 12V21"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArchiveRestore doesn't support ${type}`);
    return null;
  });

ArchiveRestore.displayName = "ArchiveRestore";

ArchiveRestore.metadata = {
  name: "ArchiveRestore",
  category: "stroke/mail",
  tags: ["archive", "restore", "icon"],
  description: "ArchiveRestore icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArchiveRestore;
