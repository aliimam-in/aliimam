import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ServerProps extends IconProps {
  type?: "stroke";
}

export const Server: IconComponent<ServerProps> = React.forwardRef<
  SVGSVGElement,
  ServerProps
>(function Server(
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
          d="M20 2H4C2.895 2 2 2.895 2 4V8C2 9.105 2.895 10 4 10H20C21.105 10 22 9.105 22 8V4C22 2.895 21.105 2 20 2ZM20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 6H6.01M6 18H6.01"
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
          d="M20 2H4C2.895 2 2 2.895 2 4V8C2 9.105 2.895 10 4 10H20C21.105 10 22 9.105 22 8V4C22 2.895 21.105 2 20 2ZM20 14H4C2.895 14 2 14.895 2 16V20C2 21.105 2.895 22 4 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM6 6H6.01M6 18H6.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Server doesn't support ${type}`);
  return null;
});

Server.displayName = "Server";

Server.metadata = {
  name: "Server",
  category: "stroke/devices",
  tags: ["server", "icon"],
  description: "Server icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Server;
