import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CopyRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CopyRight(
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
        d="M14.83 14.83C14.2704 15.389 13.5577 15.7695 12.7819 15.9235C12.0061 16.0774 11.2021 15.998 10.4714 15.6951C9.74077 15.3922 9.11632 14.8795 8.67699 14.2218C8.23766 13.5641 8.00317 12.7909 8.00317 12C8.00317 11.2091 8.23766 10.4359 8.67699 9.77818C9.11632 9.12048 9.74077 8.60779 10.4714 8.30491C11.2021 8.00203 12.0061 7.92256 12.7819 8.07654C13.5577 8.23052 14.2704 8.61104 14.83 9.17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CopyRight.displayName = "CopyRight";

CopyRight.metadata = {
  name: "CopyRight",
  category: "stroke/textFormatting",
  tags: ["copy", "right", "icon"],
  description: "CopyRight icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CopyRight;
