import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FolderPen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FolderPen(
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
        d="M2 11.5V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H7.9C8.6 3 9.2 3.3 9.6 3.9L10.4 5.1C10.8 5.7 11.4 6 12.1 6H20C20.5304 6 21.0391 6.21071 21.4142 6.58579C21.7893 6.96086 22 7.46957 22 8V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H10.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.378 13.626C11.5753 13.4288 11.7317 13.1946 11.8385 12.9369C11.9452 12.6792 12.0002 12.403 12.0002 12.124C12.0002 11.8451 11.9452 11.5689 11.8385 11.3112C11.7317 11.0534 11.5753 10.8193 11.378 10.622C11.1808 10.4248 10.9466 10.2683 10.6889 10.1616C10.4312 10.0548 10.155 9.99988 9.87601 9.99988C9.59706 9.99988 9.32084 10.0548 9.06313 10.1616C8.80542 10.2683 8.57125 10.4248 8.37401 10.622L3.36401 15.634C3.12625 15.8716 2.95223 16.1654 2.85801 16.488L2.02101 19.358C1.99591 19.4441 1.9944 19.5353 2.01665 19.6221C2.0389 19.7089 2.08407 19.7882 2.14745 19.8516C2.21083 19.915 2.29009 19.9601 2.37692 19.9824C2.46375 20.0046 2.55496 20.0031 2.64101 19.978L5.51101 19.141C5.83367 19.0468 6.12739 18.8728 6.36501 18.635L11.378 13.626Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FolderPen.displayName = "FolderPen";

FolderPen.metadata = {
  name: "FolderPen",
  category: "stroke/files",
  tags: ["folder", "pen", "icon"],
  description: "FolderPen icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FolderPen;
