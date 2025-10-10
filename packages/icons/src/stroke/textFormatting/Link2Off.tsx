import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Link2Off: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Link2Off(
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
        d="M9 17H7C5.674 17 4.402 16.473 3.464 15.536 2.527 14.598 2 13.326 2 12 2 10.674 2.527 9.402 3.464 8.464 4.402 7.527 5.674 7 7 7M15 7H17C17.929 7 18.839 7.259 19.629 7.747 20.419 8.235 21.057 8.933 21.472 9.764 21.887 10.595 22.063 11.524 21.98 12.449 21.896 13.374 21.557 14.257 21 15M8 12H12M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Link2Off.displayName = "Link2Off";

Link2Off.metadata = {
  name: "Link2Off",
  category: "stroke/textFormatting",
  tags: ["link", "off", "icon"],
  description: "Link2Off icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Link2Off;
