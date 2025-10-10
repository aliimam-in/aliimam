import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FolderKeyProps extends IconProps {
  type?: "stroke";
}

export const FolderKey: IconComponent<FolderKeyProps> = React.forwardRef<
  SVGSVGElement,
  FolderKeyProps
>(function FolderKey(
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
          d="M16 22C17.105 22 18 21.105 18 20 18 18.895 17.105 18 16 18 14.895 18 14 18.895 14 20 14 21.105 14.895 22 16 22ZM10 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H7.9C8.234 2.997 8.564 3.077 8.86 3.235 9.155 3.392 9.406 3.621 9.59 3.9L10.4 5.1C10.582 5.377 10.83 5.603 11.122 5.761 11.413 5.918 11.739 6 12.07 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V10M22 14 17.5 18.5M21 15 22 16"
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
          d="M16 22C17.105 22 18 21.105 18 20 18 18.895 17.105 18 16 18 14.895 18 14 18.895 14 20 14 21.105 14.895 22 16 22ZM10 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H7.9C8.234 2.997 8.564 3.077 8.86 3.235 9.155 3.392 9.406 3.621 9.59 3.9L10.4 5.1C10.582 5.377 10.83 5.603 11.122 5.761 11.413 5.918 11.739 6 12.07 6H20C20.53 6 21.039 6.211 21.414 6.586 21.789 6.961 22 7.47 22 8V10M22 14 17.5 18.5M21 15 22 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FolderKey doesn't support ${type}`);
  return null;
});

FolderKey.displayName = "FolderKey";

FolderKey.metadata = {
  name: "FolderKey",
  category: "stroke/security",
  tags: ["folder", "key", "icon"],
  description: "FolderKey icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderKey;
