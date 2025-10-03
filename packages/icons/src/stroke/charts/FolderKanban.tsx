import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderKanban: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderKanban(
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
        d="M4 20H20C20.53 20 21.039 19.789 21.414 19.414 21.789 19.039 22 18.53 22 18V8C22 7.47 21.789 6.961 21.414 6.586 21.039 6.211 20.53 6 20 6H12.07C11.741 5.998 11.417 5.915 11.127 5.758 10.838 5.601 10.591 5.375 10.41 5.1L9.59 3.9C9.409 3.625 9.163 3.399 8.873 3.242 8.583 3.085 8.259 3.002 7.93 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V18C2 19.1 2.9 20 4 20ZM8 10V14M12 10V12M16 10V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderKanban.displayName = "FolderKanban";

FolderKanban.metadata = {
  name: "FolderKanban",
  category: "stroke/charts",
  tags: ["folder", "kanban", "icon"],
  description: "FolderKanban icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderKanban;
