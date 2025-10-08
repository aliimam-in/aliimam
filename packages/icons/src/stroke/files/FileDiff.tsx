import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FileDiffProps extends IconProps {
  type?: "stroke";
}

export const FileDiff: IconComponent<FileDiffProps> = React.forwardRef<
  SVGSVGElement,
  FileDiffProps
>(function FileDiff(
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
          d="M15 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V20C4 20.53 4.211 21.039 4.586 21.414 4.961 21.789 5.47 22 6 22H18C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V7L15 2ZM9 10H15M12 13V7M9 17H15"
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
          d="M15 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V20C4 20.53 4.211 21.039 4.586 21.414 4.961 21.789 5.47 22 6 22H18C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V7L15 2ZM9 10H15M12 13V7M9 17H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FileDiff doesn't support ${type}`);
  return null;
});

FileDiff.displayName = "FileDiff";

FileDiff.metadata = {
  name: "FileDiff",
  category: "stroke/files",
  tags: ["file", "diff", "icon"],
  description: "FileDiff icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileDiff;
