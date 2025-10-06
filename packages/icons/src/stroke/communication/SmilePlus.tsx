import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SmilePlus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SmilePlus(
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
        d="M22 11V12C21.9899 14.0183 21.3693 15.9864 20.2197 17.6454C19.0702 19.3044 17.4455 20.5767 15.5594 21.295C13.6732 22.0134 11.6138 22.1442 9.65187 21.6703C7.68996 21.1963 5.91739 20.1398 4.56719 18.6395C3.21699 17.1393 2.35235 15.2656 2.08696 13.2648C1.82156 11.264 2.16783 9.22969 3.08023 7.42935C3.99263 5.629 5.42847 4.14689 7.19897 3.17785C8.96948 2.20881 10.9918 1.7982 13 2.00001"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14C8 14 9.5 16 12 16 14.5 16 16 14 16 14M9 9H9.01M15 9H15.01M16 5H22M19 2V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SmilePlus.displayName = "SmilePlus";

SmilePlus.metadata = {
  name: "SmilePlus",
  category: "stroke/communication",
  tags: ["smile", "plus", "icon"],
  description: "SmilePlus icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SmilePlus;
