import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ClipboardClockProps extends IconProps {
  type?: "stroke";
}

export const ClipboardClock: IconComponent<ClipboardClockProps> =
  React.forwardRef<SVGSVGElement, ClipboardClockProps>(function ClipboardClock(
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
            d="M16 14V16.2L17.6 17.2M16 4H18C18.53 4 19.039 4.211 19.414 4.586 19.789 4.961 20 5.47 20 6V6.832M8 4H6C5.47 4 4.961 4.211 4.586 4.586 4.211 4.961 4 5.47 4 6V20C4 20.53 4.211 21.039 4.586 21.414 4.961 21.789 5.47 22 6 22H8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 22C19.314 22 22 19.314 22 16 22 12.686 19.314 10 16 10 12.686 10 10 12.686 10 16 10 19.314 12.686 22 16 22ZM15 2H9C8.448 2 8 2.448 8 3V5C8 5.552 8.448 6 9 6H15C15.552 6 16 5.552 16 5V3C16 2.448 15.552 2 15 2Z"
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
            d="M16 14V16.2L17.6 17.2M16 4H18C18.53 4 19.039 4.211 19.414 4.586 19.789 4.961 20 5.47 20 6V6.832M8 4H6C5.47 4 4.961 4.211 4.586 4.586 4.211 4.961 4 5.47 4 6V20C4 20.53 4.211 21.039 4.586 21.414 4.961 21.789 5.47 22 6 22H8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 22C19.314 22 22 19.314 22 16 22 12.686 19.314 10 16 10 12.686 10 10 12.686 10 16 10 19.314 12.686 22 16 22ZM15 2H9C8.448 2 8 2.448 8 3V5C8 5.552 8.448 6 9 6H15C15.552 6 16 5.552 16 5V3C16 2.448 15.552 2 15 2Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ClipboardClock doesn't support ${type}`);
    return null;
  });

ClipboardClock.displayName = "ClipboardClock";

ClipboardClock.metadata = {
  name: "ClipboardClock",
  category: "stroke/timeCalendar",
  tags: ["clipboard", "clock", "icon"],
  description: "ClipboardClock icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ClipboardClock;
