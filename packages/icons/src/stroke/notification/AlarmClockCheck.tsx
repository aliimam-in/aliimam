import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AlarmClockCheckProps extends IconProps {
  type?: "stroke";
}

export const AlarmClockCheck: IconComponent<AlarmClockCheckProps> =
  React.forwardRef<SVGSVGElement, AlarmClockCheckProps>(
    function AlarmClockCheck(
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
              d="M12 21C16.418 21 20 17.418 20 13 20 8.582 16.418 5 12 5 7.582 5 4 8.582 4 13 4 17.418 7.582 21 12 21ZM5 3 2 6M22 6 19 3M6.38 18.7 4 21M17.64 18.67 20 21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13L11 15L15 11"
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
              d="M12 21C16.418 21 20 17.418 20 13 20 8.582 16.418 5 12 5 7.582 5 4 8.582 4 13 4 17.418 7.582 21 12 21ZM5 3 2 6M22 6 19 3M6.38 18.7 4 21M17.64 18.67 20 21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13L11 15L15 11"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`AlarmClockCheck doesn't support ${type}`);
      return null;
    },
  );

AlarmClockCheck.displayName = "AlarmClockCheck";

AlarmClockCheck.metadata = {
  name: "AlarmClockCheck",
  category: "stroke/notification",
  tags: ["alarm", "clock", "check", "icon"],
  description: "AlarmClockCheck icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlarmClockCheck;
