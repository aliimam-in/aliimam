import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileBox: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileBox(
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
        d="M14.5 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M3 13.1C2.692 13.278 2.437 13.535 2.261 13.844 2.085 14.154 1.995 14.504 2 14.86V18.1C1.988 18.456 2.072 18.809 2.243 19.122 2.413 19.435 2.664 19.697 2.97 19.88L6 21.7C6.307 21.883 6.657 21.98 7.014 21.982 7.371 21.984 7.722 21.89 8.03 21.71L11 19.9C11.308 19.722 11.563 19.465 11.739 19.156 11.915 18.847 12.005 18.496 12 18.14V14.9C12.012 14.544 11.928 14.191 11.757 13.878 11.587 13.565 11.336 13.303 11.03 13.12L8 11.3C7.693 11.117 7.343 11.02 6.986 11.018 6.629 11.017 6.278 11.11 5.97 11.29L3 13.1ZM7 17V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7 14.2L6.99999 17L2.29999 14.2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileBox.displayName = "FileBox";

FileBox.metadata = {
  name: "FileBox",
  category: "stroke/files",
  tags: ["file", "box", "icon"],
  description: "FileBox icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileBox;
