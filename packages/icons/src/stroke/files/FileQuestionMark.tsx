import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileQuestionMark: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileQuestionMark(
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
        d="M12 17H12.01M15 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V20C4 20.53 4.211 21.039 4.586 21.414 4.961 21.789 5.47 22 6 22H18C18.53 22 19.039 21.789 19.414 21.414 19.789 21.039 20 20.53 20 20V7L15 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.09998 8.99999C9.33995 8.33862 9.80475 7.78263 10.4131 7.42921C11.0215 7.0758 11.7347 6.94745 12.4281 7.06659C13.1215 7.18573 13.751 7.54479 14.2065 8.08099C14.662 8.6172 14.9145 9.29644 14.92 9.99999C14.92 12 11.92 13 11.92 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileQuestionMark.displayName = "FileQuestionMark";

FileQuestionMark.metadata = {
  name: "FileQuestionMark",
  category: "stroke/files",
  tags: ["file", "question", "mark", "icon"],
  description: "FileQuestionMark icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileQuestionMark;
