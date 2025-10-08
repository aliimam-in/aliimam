import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MonitorStopProps extends IconProps {
  type?: "stroke";
}

export const MonitorStop: IconComponent<MonitorStopProps> = React.forwardRef<
  SVGSVGElement,
  MonitorStopProps
>(function MonitorStop(
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
          d="M12 17V21M8 21H16M20 3H4C2.895 3 2 3.895 2 5V15C2 16.105 2.895 17 4 17H20C21.105 17 22 16.105 22 15V5C22 3.895 21.105 3 20 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7H10C9.44772 7 9 7.44772 9 8V12C9 12.5523 9.44772 13 10 13H14C14.5523 13 15 12.5523 15 12V8C15 7.44772 14.5523 7 14 7Z"
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
          d="M12 17V21M8 21H16M20 3H4C2.895 3 2 3.895 2 5V15C2 16.105 2.895 17 4 17H20C21.105 17 22 16.105 22 15V5C22 3.895 21.105 3 20 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 7H10C9.44772 7 9 7.44772 9 8V12C9 12.5523 9.44772 13 10 13H14C14.5523 13 15 12.5523 15 12V8C15 7.44772 14.5523 7 14 7Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MonitorStop doesn't support ${type}`);
  return null;
});

MonitorStop.displayName = "MonitorStop";

MonitorStop.metadata = {
  name: "MonitorStop",
  category: "stroke/devices",
  tags: ["monitor", "stop", "icon"],
  description: "MonitorStop icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MonitorStop;
