import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ClockArrowDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ClockArrowDown(
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
        d="M12 6V12L14 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3369 21.994C10.2935 22.0628 8.27805 21.5035 6.56224 20.3916C4.84642 19.2797 3.51267 17.6686 2.74069 15.7754C1.96871 13.8821 1.79561 11.7977 2.24472 9.80308C2.69383 7.80843 3.74355 5.99937 5.25245 4.61967C6.76135 3.23998 8.6569 2.35595 10.6837 2.08672C12.7105 1.81749 14.7711 2.17599 16.5878 3.11391C18.4046 4.05183 19.8902 5.5241 20.8445 7.33233C21.7988 9.14057 22.1758 11.1979 21.9249 13.227"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18 18 22 22 18M18 14V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ClockArrowDown.displayName = "ClockArrowDown";

ClockArrowDown.metadata = {
  name: "ClockArrowDown",
  category: "stroke/timeCalendar",
  tags: ["clock", "arrow", "down", "icon"],
  description: "ClockArrowDown icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ClockArrowDown;
