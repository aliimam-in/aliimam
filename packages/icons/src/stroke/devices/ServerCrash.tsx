import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ServerCrashProps extends IconProps {
  type?: "stroke";
}

export const ServerCrash: IconComponent<ServerCrashProps> = React.forwardRef<
  SVGSVGElement,
  ServerCrashProps
>(function ServerCrash(
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
          d="M6 10H4C3.47 10 2.961 9.789 2.586 9.414 2.211 9.039 2 8.53 2 8V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V8C22 8.53 21.789 9.039 21.414 9.414 21.039 9.789 20.53 10 20 10H18M6 14H4C3.47 14 2.961 14.211 2.586 14.586 2.211 14.961 2 15.47 2 16V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H20C20.53 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.53 22 20V16C22 15.47 21.789 14.961 21.414 14.586 21.039 14.211 20.53 14 20 14H18M6 6H6.01M6 18H6.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 6L9 12H15L11 18"
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
          d="M6 10H4C3.47 10 2.961 9.789 2.586 9.414 2.211 9.039 2 8.53 2 8V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V8C22 8.53 21.789 9.039 21.414 9.414 21.039 9.789 20.53 10 20 10H18M6 14H4C3.47 14 2.961 14.211 2.586 14.586 2.211 14.961 2 15.47 2 16V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H20C20.53 22 21.039 21.789 21.414 21.414 21.789 21.039 22 20.53 22 20V16C22 15.47 21.789 14.961 21.414 14.586 21.039 14.211 20.53 14 20 14H18M6 6H6.01M6 18H6.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 6L9 12H15L11 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ServerCrash doesn't support ${type}`);
  return null;
});

ServerCrash.displayName = "ServerCrash";

ServerCrash.metadata = {
  name: "ServerCrash",
  category: "stroke/devices",
  tags: ["server", "crash", "icon"],
  description: "ServerCrash icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ServerCrash;
