import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const LockKeyholeOpen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function LockKeyholeOpen(
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
        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 10H5C3.895 10 3 10.895 3 12V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V12C21 10.895 20.105 10 19 10ZM7 10V7C7 5.899 7.363 4.83 8.033 3.956 8.703 3.083 9.643 2.455 10.706 2.171 11.769 1.886 12.896 1.96 13.913 2.381 14.93 2.802 15.78 3.547 16.33 4.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

LockKeyholeOpen.displayName = "LockKeyholeOpen";

LockKeyholeOpen.metadata = {
  name: "LockKeyholeOpen",
  category: "stroke/security",
  tags: ["lock", "keyhole", "open", "icon"],
  description: "LockKeyholeOpen icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LockKeyholeOpen;
