import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Timer: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Timer(
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
          d="M10 2H14M12 14 15 11M12 22C16.418 22 20 18.418 20 14 20 9.582 16.418 6 12 6 7.582 6 4 9.582 4 14 4 18.418 7.582 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Timer.displayName = "Timer";

Timer.metadata = {
  name: "Timer",
  category: "stroke/timeCalendar",
  tags: ["timer", "icon"],
  description: "Timer icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Timer;
