import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AlarmClockProps extends IconProps {
  type?: "stroke";
}

export const AlarmClock: IconComponent<AlarmClockProps> = React.forwardRef<
  SVGSVGElement,
  AlarmClockProps
>(function AlarmClock(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9V13L14 15M5 3 2 6M22 6 19 3M6.38 18.7 4 21M17.64 18.67 20 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9V13L14 15M5 3 2 6M22 6 19 3M6.38 18.7 4 21M17.64 18.67 20 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`AlarmClock doesn't support ${type}`);
  return null;
});

AlarmClock.displayName = "AlarmClock";

AlarmClock.metadata = {
  name: "AlarmClock",
  category: "stroke/notification",
  tags: ["alarm", "clock", "icon"],
  description: "AlarmClock icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlarmClock;
