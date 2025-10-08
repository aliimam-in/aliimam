import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MonitorCogProps extends IconProps {
  type?: "stroke";
}

export const MonitorCog: IconComponent<MonitorCogProps> = React.forwardRef<
  SVGSVGElement,
  MonitorCogProps
>(function MonitorCog(
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
          d="M12 17V21M14.305 7.53 15.228 7.148M15.228 4.852 14.305 4.469M16.852 3.228 16.469 2.304M16.852 8.772 16.469 9.695M19.148 3.228 19.531 2.304M19.53 9.696 19.148 8.772M20.772 4.852 21.696 4.469M20.772 7.148 21.696 7.531M22 13V15C22 15.53 21.789 16.039 21.414 16.414 21.039 16.789 20.53 17 20 17H4C3.47 17 2.961 16.789 2.586 16.414 2.211 16.039 2 15.53 2 15V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H11M8 21H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
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
          d="M12 17V21M14.305 7.53 15.228 7.148M15.228 4.852 14.305 4.469M16.852 3.228 16.469 2.304M16.852 8.772 16.469 9.695M19.148 3.228 19.531 2.304M19.53 9.696 19.148 8.772M20.772 4.852 21.696 4.469M20.772 7.148 21.696 7.531M22 13V15C22 15.53 21.789 16.039 21.414 16.414 21.039 16.789 20.53 17 20 17H4C3.47 17 2.961 16.789 2.586 16.414 2.211 16.039 2 15.53 2 15V5C2 4.47 2.211 3.961 2.586 3.586 2.961 3.211 3.47 3 4 3H11M8 21H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MonitorCog doesn't support ${type}`);
  return null;
});

MonitorCog.displayName = "MonitorCog";

MonitorCog.metadata = {
  name: "MonitorCog",
  category: "stroke/devices",
  tags: ["monitor", "cog", "icon"],
  description: "MonitorCog icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MonitorCog;
