import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ClockArrowUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ClockArrowUp(
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
        d="M12 6V12L13.56 12.78"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.2269 21.925C11.1977 22.1759 9.14044 21.7989 7.33221 20.8446C5.52398 19.8903 4.05171 18.4047 3.11379 16.588C2.17587 14.7712 1.81737 12.7106 2.0866 10.6838C2.35583 8.65703 3.23986 6.76147 4.61955 5.25257C5.99925 3.74368 7.8083 2.69395 9.80296 2.24484C11.7976 1.79573 13.882 1.96883 15.7752 2.74081C17.6685 3.51279 19.2796 4.84655 20.3915 6.56236C21.5034 8.27817 22.0626 10.2936 21.9939 12.337"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18 18 14 22 18M18 22V14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ClockArrowUp.displayName = "ClockArrowUp";

ClockArrowUp.metadata = {
  name: "ClockArrowUp",
  category: "stroke/timeCalendar",
  tags: ["clock", "arrow", "up", "icon"],
  description: "ClockArrowUp icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ClockArrowUp;
