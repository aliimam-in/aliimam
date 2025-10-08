import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ServerOffProps extends IconProps {
  type?: "stroke";
}

export const ServerOff: IconComponent<ServerOffProps> = React.forwardRef<
  SVGSVGElement,
  ServerOffProps
>(function ServerOff(
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
          d="M7 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V8C22 8.53 21.789 9.039 21.414 9.414 21.039 9.789 20.53 10 20 10H15M10 10 2.5 2.5C2 2 2 2.5 2 5V8C2 8.53 2.211 9.039 2.586 9.414 2.961 9.789 3.47 10 4 10H10ZM22 17V16C22 15.47 21.789 14.961 21.414 14.586 21.039 14.211 20.53 14 20 14H19M4 14C3.47 14 2.961 14.211 2.586 14.586 2.211 14.961 2 15.47 2 16V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H20.5L21.5 21.5 22 22 14 14H4ZM6 18H6.01M2 2 22 22"
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
          d="M7 2H20C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V8C22 8.53 21.789 9.039 21.414 9.414 21.039 9.789 20.53 10 20 10H15M10 10 2.5 2.5C2 2 2 2.5 2 5V8C2 8.53 2.211 9.039 2.586 9.414 2.961 9.789 3.47 10 4 10H10ZM22 17V16C22 15.47 21.789 14.961 21.414 14.586 21.039 14.211 20.53 14 20 14H19M4 14C3.47 14 2.961 14.211 2.586 14.586 2.211 14.961 2 15.47 2 16V20C2 20.53 2.211 21.039 2.586 21.414 2.961 21.789 3.47 22 4 22H20.5L21.5 21.5 22 22 14 14H4ZM6 18H6.01M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ServerOff doesn't support ${type}`);
  return null;
});

ServerOff.displayName = "ServerOff";

ServerOff.metadata = {
  name: "ServerOff",
  category: "stroke/devices",
  tags: ["server", "off", "icon"],
  description: "ServerOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ServerOff;
