import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderX: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderX(
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
        d="M20 20C20.53 20 21.039 19.789 21.414 19.414 21.789 19.039 22 18.53 22 18V8C22 7.47 21.789 6.961 21.414 6.586 21.039 6.211 20.53 6 20 6H12.1C11.766 6.003 11.436 5.923 11.14 5.765 10.845 5.608 10.594 5.379 10.41 5.1L9.6 3.9C9.418 3.623 9.17 3.396 8.879 3.239 8.587 3.082 8.261 3 7.93 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V18C2 18.53 2.211 19.039 2.586 19.414 2.961 19.789 3.47 20 4 20H20ZM9.5 10.5 14.5 15.5M14.5 10.5 9.5 15.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderX.displayName = "FolderX";

FolderX.metadata = {
  name: "FolderX",
  category: "stroke/files",
  tags: ["folder", "icon"],
  description: "FolderX icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderX;
