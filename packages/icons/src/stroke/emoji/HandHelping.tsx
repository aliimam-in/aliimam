import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HandHelping: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HandHelping(
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
        d="M11 12H13C13.5304 12 14.0391 11.7893 14.4142 11.4142C14.7893 11.0391 15 10.5304 15 10C15 9.46957 14.7893 8.96086 14.4142 8.58579C14.0391 8.21071 13.5304 8 13 8H10C9.4 8 8.9 8.2 8.6 8.6L3 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 18 8.6 16.6C8.9 16.2 9.4 16 10 16H14C15.1 16 16.1 15.6 16.8 14.8L21.4 10.4C21.786 10.035 22.011 9.532 22.026 9.002 22.041 8.471 21.845 7.956 21.48 7.57 21.115 7.184 20.612 6.959 20.082 6.944 19.551 6.929 19.036 7.125 18.65 7.49L14.45 11.39M2 13 8 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HandHelping.displayName = "HandHelping";

HandHelping.metadata = {
  name: "HandHelping",
  category: "stroke/emoji",
  tags: ["hand", "helping", "icon"],
  description: "HandHelping icon from stroke/emoji category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HandHelping;
