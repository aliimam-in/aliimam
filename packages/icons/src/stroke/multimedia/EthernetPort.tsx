import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface EthernetPortProps extends IconProps {
  type?: "stroke";
}

export const EthernetPort: IconComponent<EthernetPortProps> = React.forwardRef<
  SVGSVGElement,
  EthernetPortProps
>(function EthernetPort(
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
          d="M15 20 18 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V6C22 5.47 21.789 4.961 21.414 4.586 21.039 4.211 20.53 4 20 4H4C3.47 4 2.961 4.211 2.586 4.586 2.211 4.961 2 5.47 2 6V15C2 15.53 2.211 16.039 2.586 16.414 2.961 16.789 3.47 17 4 17H6L9 20H15ZM6 8V9M10 8V9M14 8V9M18 8V9"
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
          d="M15 20 18 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V6C22 5.47 21.789 4.961 21.414 4.586 21.039 4.211 20.53 4 20 4H4C3.47 4 2.961 4.211 2.586 4.586 2.211 4.961 2 5.47 2 6V15C2 15.53 2.211 16.039 2.586 16.414 2.961 16.789 3.47 17 4 17H6L9 20H15ZM6 8V9M10 8V9M14 8V9M18 8V9"
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
          d="M15 20 18 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V6C22 5.47 21.789 4.961 21.414 4.586 21.039 4.211 20.53 4 20 4H4C3.47 4 2.961 4.211 2.586 4.586 2.211 4.961 2 5.47 2 6V15C2 15.53 2.211 16.039 2.586 16.414 2.961 16.789 3.47 17 4 17H6L9 20H15ZM6 8V9M10 8V9M14 8V9M18 8V9"
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
          d="M15 20 18 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V6C22 5.47 21.789 4.961 21.414 4.586 21.039 4.211 20.53 4 20 4H4C3.47 4 2.961 4.211 2.586 4.586 2.211 4.961 2 5.47 2 6V15C2 15.53 2.211 16.039 2.586 16.414 2.961 16.789 3.47 17 4 17H6L9 20H15ZM6 8V9M10 8V9M14 8V9M18 8V9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`EthernetPort doesn't support ${type}`);
  return null;
});

EthernetPort.displayName = "EthernetPort";

EthernetPort.metadata = {
  name: "EthernetPort",
  category: "stroke/multimedia",
  tags: ["ethernet", "port", "icon"],
  description: "EthernetPort icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EthernetPort;
