import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UsbProps extends IconProps {
  type?: "stroke";
}

export const Usb: IconComponent<UsbProps> = React.forwardRef<
  SVGSVGElement,
  UsbProps
>(function Usb(
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
          d="M10 8C10.552 8 11 7.552 11 7 11 6.448 10.552 6 10 6 9.448 6 9 6.448 9 7 9 7.552 9.448 8 10 8ZM4 21C4.552 21 5 20.552 5 20 5 19.448 4.552 19 4 19 3.448 19 3 19.448 3 20 3 20.552 3.448 21 4 21ZM4.7 19.3 19 5M21 3 18 4 20 6 21 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.26 7.68 5 12 7 17M10 14 15 16 18.5 12.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12L19 11L20 12L19 13L18 12Z"
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
          d="M10 8C10.552 8 11 7.552 11 7 11 6.448 10.552 6 10 6 9.448 6 9 6.448 9 7 9 7.552 9.448 8 10 8ZM4 21C4.552 21 5 20.552 5 20 5 19.448 4.552 19 4 19 3.448 19 3 19.448 3 20 3 20.552 3.448 21 4 21ZM4.7 19.3 19 5M21 3 18 4 20 6 21 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.26 7.68 5 12 7 17M10 14 15 16 18.5 12.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12L19 11L20 12L19 13L18 12Z"
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
          d="M10 8C10.552 8 11 7.552 11 7 11 6.448 10.552 6 10 6 9.448 6 9 6.448 9 7 9 7.552 9.448 8 10 8ZM4 21C4.552 21 5 20.552 5 20 5 19.448 4.552 19 4 19 3.448 19 3 19.448 3 20 3 20.552 3.448 21 4 21ZM4.7 19.3 19 5M21 3 18 4 20 6 21 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.26 7.68 5 12 7 17M10 14 15 16 18.5 12.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12L19 11L20 12L19 13L18 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Usb doesn't support ${type}`);
  return null;
});

Usb.displayName = "Usb";

Usb.metadata = {
  name: "Usb",
  category: "stroke/multimedia",
  tags: ["usb", "icon"],
  description: "Usb icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Usb;
