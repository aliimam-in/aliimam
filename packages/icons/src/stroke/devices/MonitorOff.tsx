import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MonitorOffProps extends IconProps {
  type?: "stroke";
}

export const MonitorOff: IconComponent<MonitorOffProps> = React.forwardRef<
  SVGSVGElement,
  MonitorOffProps
>(function MonitorOff(
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
          d="M17 17H4C3.47 17 2.961 16.789 2.586 16.414 2.211 16.039 2 15.53 2 15V5C2 3.5 3 3 3 3M22 15V5C22 4.47 21.789 3.961 21.414 3.586 21.039 3.211 20.53 3 20 3H9M8 21H16M12 17V21M2 2 22 22"
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
          d="M17 17H4C3.47 17 2.961 16.789 2.586 16.414 2.211 16.039 2 15.53 2 15V5C2 3.5 3 3 3 3M22 15V5C22 4.47 21.789 3.961 21.414 3.586 21.039 3.211 20.53 3 20 3H9M8 21H16M12 17V21M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MonitorOff doesn't support ${type}`);
  return null;
});

MonitorOff.displayName = "MonitorOff";

MonitorOff.metadata = {
  name: "MonitorOff",
  category: "stroke/devices",
  tags: ["monitor", "off", "icon"],
  description: "MonitorOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MonitorOff;
