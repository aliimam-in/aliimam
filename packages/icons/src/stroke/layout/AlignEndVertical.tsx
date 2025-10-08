import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignEndVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignEndVertical(
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
        d="M16 4H4C2.895 4 2 4.895 2 6V8C2 9.105 2.895 10 4 10H16C17.105 10 18 9.105 18 8V6C18 4.895 17.105 4 16 4ZM16 14H11C9.895 14 9 14.895 9 16V18C9 19.105 9.895 20 11 20H16C17.105 20 18 19.105 18 18V16C18 14.895 17.105 14 16 14ZM22 22V2"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignEndVertical.displayName = "AlignEndVertical";

AlignEndVertical.metadata = {
  name: "AlignEndVertical",
  category: "stroke/layout",
  tags: ["align", "end", "vertical", "icon"],
  description: "AlignEndVertical icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignEndVertical;
