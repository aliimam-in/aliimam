import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CopyLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CopyLeft(
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.16992 14.83C9.72951 15.389 10.4422 15.7695 11.2181 15.9235C11.9939 16.0774 12.7979 15.998 13.5285 15.6951C14.2592 15.3922 14.8836 14.8795 15.323 14.2218C15.7623 13.5641 15.9968 12.7909 15.9968 12C15.9968 11.2091 15.7623 10.4359 15.323 9.77818C14.8836 9.12048 14.2592 8.60779 13.5285 8.30491C12.7979 8.00203 11.9939 7.92256 11.2181 8.07654C10.4422 8.23052 9.72951 8.61104 9.16992 9.17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CopyLeft.displayName = "CopyLeft";

CopyLeft.metadata = {
  name: "CopyLeft",
  category: "stroke/textFormatting",
  tags: ["copy", "left", "icon"],
  description: "CopyLeft icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CopyLeft;
