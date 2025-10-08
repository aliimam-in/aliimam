import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileStackProps extends IconProps {
  type?: "stroke";
}

export const FileStack: IconComponent<FileStackProps> = React.forwardRef<
  SVGSVGElement,
  FileStackProps
>(function FileStack(
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
          d="M11 21C11 21.265 10.895 21.52 10.707 21.707 10.52 21.895 10.265 22 10 22H4C3.735 22 3.48 21.895 3.293 21.707 3.105 21.52 3 21.265 3 21V13C3 12.735 3.105 12.48 3.293 12.293 3.48 12.105 3.735 12 4 12M16 16C16 16.265 15.895 16.52 15.707 16.707 15.52 16.895 15.265 17 15 17H9C8.735 17 8.48 16.895 8.293 16.707 8.105 16.52 8 16.265 8 16V8C8 7.735 8.105 7.48 8.293 7.293 8.48 7.105 8.735 7 9 7M21 6C21 5.47 20.789 4.961 20.414 4.586L18.414 2.586C18.039 2.211 17.53 2 17 2H14C13.735 2 13.48 2.105 13.293 2.293 13.105 2.48 13 2.735 13 3V11C13 11.265 13.105 11.52 13.293 11.707 13.48 11.895 13.735 12 14 12H20C20.265 12 20.52 11.895 20.707 11.707 20.895 11.52 21 11.265 21 11V6Z"
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
          d="M11 21C11 21.265 10.895 21.52 10.707 21.707 10.52 21.895 10.265 22 10 22H4C3.735 22 3.48 21.895 3.293 21.707 3.105 21.52 3 21.265 3 21V13C3 12.735 3.105 12.48 3.293 12.293 3.48 12.105 3.735 12 4 12M16 16C16 16.265 15.895 16.52 15.707 16.707 15.52 16.895 15.265 17 15 17H9C8.735 17 8.48 16.895 8.293 16.707 8.105 16.52 8 16.265 8 16V8C8 7.735 8.105 7.48 8.293 7.293 8.48 7.105 8.735 7 9 7M21 6C21 5.47 20.789 4.961 20.414 4.586L18.414 2.586C18.039 2.211 17.53 2 17 2H14C13.735 2 13.48 2.105 13.293 2.293 13.105 2.48 13 2.735 13 3V11C13 11.265 13.105 11.52 13.293 11.707 13.48 11.895 13.735 12 14 12H20C20.265 12 20.52 11.895 20.707 11.707 20.895 11.52 21 11.265 21 11V6Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileStack doesn't support ${type}`);
  return null;
});

FileStack.displayName = "FileStack";

FileStack.metadata = {
  name: "FileStack",
  category: "stroke/files",
  tags: ["file", "stack", "icon"],
  description: "FileStack icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileStack;
