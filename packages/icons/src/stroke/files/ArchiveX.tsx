import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArchiveX: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArchiveX(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M21 3H3C2.448 3 2 3.448 2 4V7C2 7.552 2.448 8 3 8H21C21.552 8 22 7.552 22 7V4C22 3.448 21.552 3 21 3ZM4 8V19C4 19.53 4.211 20.039 4.586 20.414 4.961 20.789 5.47 21 6 21H18C18.53 21 19.039 20.789 19.414 20.414 19.789 20.039 20 19.53 20 19V8M9.5 17 14.5 12M9.5 12 14.5 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArchiveX.displayName = "ArchiveX";

ArchiveX.metadata = {
  name: "ArchiveX",
  category: "stroke/files",
  tags: ["archive", "icon"],
  description: "ArchiveX icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArchiveX;
