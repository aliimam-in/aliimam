import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Backpack: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Backpack(
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
        d="M4 10C4 8.939 4.421 7.922 5.172 7.172 5.922 6.421 6.939 6 8 6H16C17.061 6 18.078 6.421 18.828 7.172 19.579 7.922 20 8.939 20 10V20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H6C5.47 22 4.961 21.789 4.586 21.414 4.211 21.039 4 20.53 4 20V10ZM8 10H16M8 18H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 22V16C8 15.47 8.211 14.961 8.586 14.586 8.961 14.211 9.47 14 10 14H14C14.53 14 15.039 14.211 15.414 14.586 15.789 14.961 16 15.47 16 16V22M9 6V4C9 3.47 9.211 2.961 9.586 2.586 9.961 2.211 10.47 2 11 2H13C13.53 2 14.039 2.211 14.414 2.586 14.789 2.961 15 3.47 15 4V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Backpack.displayName = "Backpack";

Backpack.metadata = {
  name: "Backpack",
  category: "stroke/gaming",
  tags: ["backpack", "icon"],
  description: "Backpack icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Backpack;
