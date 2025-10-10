import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ReplaceAll: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ReplaceAll(
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
        d="M14 14C14.265 14 14.52 14.105 14.707 14.293 14.895 14.48 15 14.735 15 15V20C15 20.265 14.895 20.52 14.707 20.707 14.52 20.895 14.265 21 14 21M14 4C14 3.735 14.105 3.48 14.293 3.293 14.48 3.105 14.735 3 15 3M15 10C14.735 10 14.48 9.895 14.293 9.707 14.105 9.52 14 9.265 14 9M19 14C19.265 14 19.52 14.105 19.707 14.293 19.895 14.48 20 14.735 20 15V20C20 20.265 19.895 20.52 19.707 20.707 19.52 20.895 19.265 21 19 21M21 4C21 3.735 20.895 3.48 20.707 3.293 20.52 3.105 20.265 3 20 3M21 9C21 9.265 20.895 9.52 20.707 9.707 20.52 9.895 20.265 10 20 10M3 7 6 10 9 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10V5C6 4.47 6.211 3.961 6.586 3.586 6.961 3.211 7.47 3 8 3H10M9 14H4C3.448 14 3 14.448 3 15V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V15C10 14.448 9.552 14 9 14Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ReplaceAll.displayName = "ReplaceAll";

ReplaceAll.metadata = {
  name: "ReplaceAll",
  category: "stroke/textFormatting",
  tags: ["replace", "all", "icon"],
  description: "ReplaceAll icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ReplaceAll;
