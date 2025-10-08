import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SaveAll: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SaveAll(
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
        d="M10 2V5C10 5.265 10.105 5.52 10.293 5.707 10.48 5.895 10.735 6 11 6H16M18 18V12C18 11.735 17.895 11.48 17.707 11.293 17.52 11.105 17.265 11 17 11H11C10.735 11 10.48 11.105 10.293 11.293 10.105 11.48 10 11.735 10 12V18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18C7.46957 18 6.96086 17.7893 6.58579 17.4142C6.21071 17.0391 6 16.5304 6 16V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H17.172C17.7024 2.00011 18.211 2.2109 18.586 2.586L21.414 5.414C21.7891 5.78899 21.9999 6.29761 22 6.828V16C22 16.2635 21.9479 16.5244 21.8468 16.7677C21.7457 17.011 21.5975 17.2319 21.4107 17.4178C21.2239 17.6036 21.0022 17.7507 20.7584 17.8506C20.5146 17.9506 20.2535 18.0013 19.99 18H8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SaveAll.displayName = "SaveAll";

SaveAll.metadata = {
  name: "SaveAll",
  category: "stroke/files",
  tags: ["save", "all", "icon"],
  description: "SaveAll icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SaveAll;
