import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WaypointsProps extends IconProps {
  type?: "stroke";
}

export const Waypoints: IconComponent<WaypointsProps> = React.forwardRef<
  SVGSVGElement,
  WaypointsProps
>(function Waypoints(
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
          d="M12 7C13.381 7 14.5 5.881 14.5 4.5 14.5 3.119 13.381 2 12 2 10.619 2 9.5 3.119 9.5 4.5 9.5 5.881 10.619 7 12 7ZM10.2 6.3 6.3 10.2M4.5 14.5C5.881 14.5 7 13.381 7 12 7 10.619 5.881 9.5 4.5 9.5 3.119 9.5 2 10.619 2 12 2 13.381 3.119 14.5 4.5 14.5ZM7 12H17M19.5 14.5C20.881 14.5 22 13.381 22 12 22 10.619 20.881 9.5 19.5 9.5 18.119 9.5 17 10.619 17 12 17 13.381 18.119 14.5 19.5 14.5ZM13.8 17.7 17.7 13.8M12 22C13.381 22 14.5 20.881 14.5 19.5 14.5 18.119 13.381 17 12 17 10.619 17 9.5 18.119 9.5 19.5 9.5 20.881 10.619 22 12 22Z"
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
          d="M12 7C13.381 7 14.5 5.881 14.5 4.5 14.5 3.119 13.381 2 12 2 10.619 2 9.5 3.119 9.5 4.5 9.5 5.881 10.619 7 12 7ZM10.2 6.3 6.3 10.2M4.5 14.5C5.881 14.5 7 13.381 7 12 7 10.619 5.881 9.5 4.5 9.5 3.119 9.5 2 10.619 2 12 2 13.381 3.119 14.5 4.5 14.5ZM7 12H17M19.5 14.5C20.881 14.5 22 13.381 22 12 22 10.619 20.881 9.5 19.5 9.5 18.119 9.5 17 10.619 17 12 17 13.381 18.119 14.5 19.5 14.5ZM13.8 17.7 17.7 13.8M12 22C13.381 22 14.5 20.881 14.5 19.5 14.5 18.119 13.381 17 12 17 10.619 17 9.5 18.119 9.5 19.5 9.5 20.881 10.619 22 12 22Z"
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
          d="M12 7C13.381 7 14.5 5.881 14.5 4.5 14.5 3.119 13.381 2 12 2 10.619 2 9.5 3.119 9.5 4.5 9.5 5.881 10.619 7 12 7ZM10.2 6.3 6.3 10.2M4.5 14.5C5.881 14.5 7 13.381 7 12 7 10.619 5.881 9.5 4.5 9.5 3.119 9.5 2 10.619 2 12 2 13.381 3.119 14.5 4.5 14.5ZM7 12H17M19.5 14.5C20.881 14.5 22 13.381 22 12 22 10.619 20.881 9.5 19.5 9.5 18.119 9.5 17 10.619 17 12 17 13.381 18.119 14.5 19.5 14.5ZM13.8 17.7 17.7 13.8M12 22C13.381 22 14.5 20.881 14.5 19.5 14.5 18.119 13.381 17 12 17 10.619 17 9.5 18.119 9.5 19.5 9.5 20.881 10.619 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Waypoints doesn't support ${type}`);
  return null;
});

Waypoints.displayName = "Waypoints";

Waypoints.metadata = {
  name: "Waypoints",
  category: "stroke/navigation",
  tags: ["waypoints", "icon"],
  description: "Waypoints icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Waypoints;
