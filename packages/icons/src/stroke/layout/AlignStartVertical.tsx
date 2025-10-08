import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignStartVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignStartVertical(
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
        d="M13 14H8C6.895 14 6 14.895 6 16V18C6 19.105 6.895 20 8 20H13C14.105 20 15 19.105 15 18V16C15 14.895 14.105 14 13 14ZM20 4H8C6.895 4 6 4.895 6 6V8C6 9.105 6.895 10 8 10H20C21.105 10 22 9.105 22 8V6C22 4.895 21.105 4 20 4ZM2 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignStartVertical.displayName = "AlignStartVertical";

AlignStartVertical.metadata = {
  name: "AlignStartVertical",
  category: "stroke/layout",
  tags: ["align", "start", "vertical", "icon"],
  description: "AlignStartVertical icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignStartVertical;
