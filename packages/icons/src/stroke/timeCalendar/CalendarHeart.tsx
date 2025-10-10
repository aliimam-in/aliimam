import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CalendarHeart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CalendarHeart(
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
        d="M12.127 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V11.125"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.62 18.8C14.41 18.581 14.246 18.321 14.138 18.037 14.031 17.752 13.983 17.449 13.996 17.146 14.009 16.842 14.083 16.544 14.215 16.27 14.346 15.996 14.532 15.751 14.76 15.551 14.989 15.351 15.255 15.199 15.544 15.104 15.833 15.01 16.138 14.975 16.441 15.001 16.744 15.028 17.038 15.116 17.306 15.259 17.574 15.403 17.81 15.599 18 15.836 18.191 15.601 18.427 15.408 18.695 15.266 18.962 15.125 19.255 15.039 19.557 15.014 19.858 14.988 20.162 15.024 20.449 15.119 20.737 15.213 21.002 15.365 21.23 15.565 21.457 15.764 21.642 16.007 21.773 16.28 21.904 16.553 21.979 16.849 21.993 17.151 22.007 17.454 21.96 17.756 21.855 18.039 21.749 18.323 21.588 18.582 21.38 18.802L18.754 21.658C18.66 21.766 18.544 21.852 18.414 21.912 18.284 21.971 18.143 22.002 18 22.002 17.858 22.002 17.716 21.971 17.586 21.912 17.456 21.852 17.341 21.766 17.247 21.658L14.62 18.8ZM16 2V6M3 10H21M8 2V6"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CalendarHeart.displayName = "CalendarHeart";

CalendarHeart.metadata = {
  name: "CalendarHeart",
  category: "stroke/timeCalendar",
  tags: ["calendar", "heart", "icon"],
  description: "CalendarHeart icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CalendarHeart;
