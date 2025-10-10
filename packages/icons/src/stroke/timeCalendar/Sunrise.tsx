import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SunriseProps extends IconProps {
  type?: "stroke";
}

export const Sunrise: IconComponent<SunriseProps> = React.forwardRef<
  SVGSVGElement,
  SunriseProps
>(function Sunrise(
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
          d="M12 2V10M4.93 10.93 6.34 12.34M2 18H4M20 18H22M19.07 10.93 17.66 12.34M22 22H2M8 6 12 2 16 6M16 18C16 16.939 15.579 15.922 14.828 15.172 14.078 14.421 13.061 14 12 14 10.939 14 9.922 14.421 9.172 15.172 8.421 15.922 8 16.939 8 18"
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
          d="M12 2V10M4.93 10.93 6.34 12.34M2 18H4M20 18H22M19.07 10.93 17.66 12.34M22 22H2M8 6 12 2 16 6M16 18C16 16.939 15.579 15.922 14.828 15.172 14.078 14.421 13.061 14 12 14 10.939 14 9.922 14.421 9.172 15.172 8.421 15.922 8 16.939 8 18"
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
          d="M12 2V10M4.93 10.93 6.34 12.34M2 18H4M20 18H22M19.07 10.93 17.66 12.34M22 22H2M8 6 12 2 16 6M16 18C16 16.939 15.579 15.922 14.828 15.172 14.078 14.421 13.061 14 12 14 10.939 14 9.922 14.421 9.172 15.172 8.421 15.922 8 16.939 8 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Sunrise doesn't support ${type}`);
  return null;
});

Sunrise.displayName = "Sunrise";

Sunrise.metadata = {
  name: "Sunrise",
  category: "stroke/timeCalendar",
  tags: ["sunrise", "icon"],
  description: "Sunrise icon from stroke/timeCalendar category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Sunrise;
