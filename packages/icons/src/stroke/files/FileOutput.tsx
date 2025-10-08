import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileOutputProps extends IconProps {
  type?: "stroke";
}

export const FileOutput: IconComponent<FileOutputProps> = React.forwardRef<
  SVGSVGElement,
  FileOutputProps
>(function FileOutput(
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
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M4 7V4C4 3.47 4.211 2.961 4.586 2.586 4.961 2.211 5.47 2 6 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.063 20.999C4.259 21.346 4.554 21.626 4.91 21.805 5.267 21.983 5.668 22.051 6.063 21.999L18 22C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V7L15 2H6M5 11 2 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L2 14H12"
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
          d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M4 7V4C4 3.47 4.211 2.961 4.586 2.586 4.961 2.211 5.47 2 6 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.063 20.999C4.259 21.346 4.554 21.626 4.91 21.805 5.267 21.983 5.668 22.051 6.063 21.999L18 22C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V7L15 2H6M5 11 2 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L2 14H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileOutput doesn't support ${type}`);
  return null;
});

FileOutput.displayName = "FileOutput";

FileOutput.metadata = {
  name: "FileOutput",
  category: "stroke/files",
  tags: ["file", "output", "icon"],
  description: "FileOutput icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileOutput;
