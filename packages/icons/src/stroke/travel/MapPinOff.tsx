import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MapPinOffProps extends IconProps {
  type?: "stroke";
}

export const MapPinOff: IconComponent<MapPinOffProps> = React.forwardRef<
  SVGSVGElement,
  MapPinOffProps
>(function MapPinOff(
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
          d="M12.75 7.09C13.271 7.224 13.746 7.495 14.126 7.875 14.506 8.254 14.776 8.73 14.91 9.25M17.072 17.072C15.438 19.242 13.545 20.984 12.601 21.799 12.428 21.929 12.217 22 12 22 11.783 22 11.572 21.929 11.399 21.799 9.539 20.193 4 14.993 4 10 4 8.367 4.5 6.773 5.432 5.432M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.475 2.818C9.695 2.219 11.047 1.941 12.404 2.01 13.761 2.078 15.078 2.491 16.231 3.21 17.384 3.929 18.335 4.929 18.995 6.117 19.654 7.305 20 8.641 20 10 20 11.183 19.69 12.377 19.19 13.533M9.13 9.13C8.973 9.65 8.96 10.202 9.092 10.729 9.224 11.255 9.496 11.736 9.88 12.12 10.264 12.504 10.745 12.776 11.271 12.908 11.798 13.04 12.35 13.027 12.87 12.87"
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
          d="M12.75 7.09C13.271 7.224 13.746 7.495 14.126 7.875 14.506 8.254 14.776 8.73 14.91 9.25M17.072 17.072C15.438 19.242 13.545 20.984 12.601 21.799 12.428 21.929 12.217 22 12 22 11.783 22 11.572 21.929 11.399 21.799 9.539 20.193 4 14.993 4 10 4 8.367 4.5 6.773 5.432 5.432M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.475 2.818C9.695 2.219 11.047 1.941 12.404 2.01 13.761 2.078 15.078 2.491 16.231 3.21 17.384 3.929 18.335 4.929 18.995 6.117 19.654 7.305 20 8.641 20 10 20 11.183 19.69 12.377 19.19 13.533M9.13 9.13C8.973 9.65 8.96 10.202 9.092 10.729 9.224 11.255 9.496 11.736 9.88 12.12 10.264 12.504 10.745 12.776 11.271 12.908 11.798 13.04 12.35 13.027 12.87 12.87"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MapPinOff doesn't support ${type}`);
  return null;
});

MapPinOff.displayName = "MapPinOff";

MapPinOff.metadata = {
  name: "MapPinOff",
  category: "stroke/travel",
  tags: ["map", "pin", "off", "icon"],
  description: "MapPinOff icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MapPinOff;
