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
        d="M21.9999 11V12C21.9898 14.0183 21.3691 15.9863 20.2196 17.6453C19.0701 19.3043 17.4454 20.5767 15.5592 21.295C13.6731 22.0134 11.6137 22.1442 9.65175 21.6703C7.68984 21.1963 5.91727 20.1398 4.56707 18.6395C3.21686 17.1393 2.35223 15.2656 2.08684 13.2648C1.82144 11.264 2.1677 9.22968 3.08011 7.42934C3.99251 5.62899 5.42835 4.14688 7.19885 3.17784C8.96935 2.2088 10.9917 1.79819 12.9999 2"
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
