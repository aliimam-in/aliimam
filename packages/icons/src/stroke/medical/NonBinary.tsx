import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NonBinary: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NonBinary(
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
        d="M12 2V12M8.5 4 15.5 8M8.5 8 15.5 4M12 22C14.761 22 17 19.761 17 17 17 14.239 14.761 12 12 12 9.239 12 7 14.239 7 17 7 19.761 9.239 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

NonBinary.displayName = "NonBinary";

NonBinary.metadata = {
  name: "NonBinary",
  category: "stroke/medical",
  tags: ["non", "binary", "icon"],
  description: "NonBinary icon from stroke/medical category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NonBinary;
