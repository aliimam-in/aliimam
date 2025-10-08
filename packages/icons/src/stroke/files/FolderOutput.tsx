import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FolderOutputProps extends IconProps {
  type?: "stroke";
}

export const FolderOutput: IconComponent<FolderOutputProps> = React.forwardRef<
  SVGSVGElement,
  FolderOutputProps
>(function FolderOutput(
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
          d="M2 7.5V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H7.9C8.234 2.997 8.564 3.077 8.86 3.235 9.155 3.392 9.406 3.621 9.59 3.9L10.4 5.1C10.582 5.377 10.83 5.603 11.122 5.761 11.413 5.918 11.739 6 12.07 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.546 20.014 3.1 19.874 2.737 19.601 2.373 19.328 2.113 18.94 2 18.5M2 13H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 10L2 13L5 16"
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
          d="M2 7.5V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H7.9C8.234 2.997 8.564 3.077 8.86 3.235 9.155 3.392 9.406 3.621 9.59 3.9L10.4 5.1C10.582 5.377 10.83 5.603 11.122 5.761 11.413 5.918 11.739 6 12.07 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.546 20.014 3.1 19.874 2.737 19.601 2.373 19.328 2.113 18.94 2 18.5M2 13H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 10L2 13L5 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FolderOutput doesn't support ${type}`);
  return null;
});

FolderOutput.displayName = "FolderOutput";

FolderOutput.metadata = {
  name: "FolderOutput",
  category: "stroke/files",
  tags: ["folder", "output", "icon"],
  description: "FolderOutput icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderOutput;
