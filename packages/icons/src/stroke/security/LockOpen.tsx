import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LockOpen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LockOpen(
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
        d="M19 11H5C3.895 11 3 11.895 3 13V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V13C21 11.895 20.105 11 19 11ZM7 11V7C6.999 5.76 7.458 4.564 8.289 3.644 9.12 2.724 10.264 2.145 11.498 2.02 12.731 1.896 13.967 2.234 14.966 2.969 15.964 3.705 16.653 4.785 16.9 6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LockOpen.displayName = "LockOpen";

LockOpen.metadata = {
  name: "LockOpen",
  category: "stroke/security",
  tags: ["lock", "open", "icon"],
  description: "LockOpen icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LockOpen;
