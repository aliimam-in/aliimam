import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HourglassProps extends IconProps {
  type?: "stroke";
}

export const Hourglass: IconComponent<HourglassProps> = React.forwardRef<
  SVGSVGElement,
  HourglassProps
>(function Hourglass(
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
          d="M5 22H19M5 2H19M17 22V17.828C17 17.298 16.789 16.789 16.414 16.414L12 12 7.586 16.414C7.211 16.789 7 17.298 7 17.828V22M7 2V6.172C7 6.702 7.211 7.211 7.586 7.586L12 12 16.414 7.586C16.789 7.211 17 6.702 17 6.172V2"
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
          d="M5 22H19M5 2H19M17 22V17.828C17 17.298 16.789 16.789 16.414 16.414L12 12 7.586 16.414C7.211 16.789 7 17.298 7 17.828V22M7 2V6.172C7 6.702 7.211 7.211 7.586 7.586L12 12 16.414 7.586C16.789 7.211 17 6.702 17 6.172V2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Hourglass doesn't support ${type}`);
  return null;
});

Hourglass.displayName = "Hourglass";

Hourglass.metadata = {
  name: "Hourglass",
  category: "stroke/timeCalendar",
  tags: ["hourglass", "icon"],
  description: "Hourglass icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hourglass;
