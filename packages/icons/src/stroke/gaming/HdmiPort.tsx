import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HdmiPortProps extends IconProps {
  type?: "stroke";
}

export const HdmiPort: IconComponent<HdmiPortProps> = React.forwardRef<
  SVGSVGElement,
  HdmiPortProps
>(function HdmiPort(
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
          d="M22 9C22 8.735 21.895 8.48 21.707 8.293 21.52 8.105 21.265 8 21 8H3C2.735 8 2.48 8.105 2.293 8.293 2.105 8.48 2 8.735 2 9V13C2 13.265 2.105 13.52 2.293 13.707 2.48 13.895 2.735 14 3 14H4L6 16H18L20 14H21C21.265 14 21.52 13.895 21.707 13.707 21.895 13.52 22 13.265 22 13V9ZM7.5 12H16.5"
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
          d="M22 9C22 8.735 21.895 8.48 21.707 8.293 21.52 8.105 21.265 8 21 8H3C2.735 8 2.48 8.105 2.293 8.293 2.105 8.48 2 8.735 2 9V13C2 13.265 2.105 13.52 2.293 13.707 2.48 13.895 2.735 14 3 14H4L6 16H18L20 14H21C21.265 14 21.52 13.895 21.707 13.707 21.895 13.52 22 13.265 22 13V9ZM7.5 12H16.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`HdmiPort doesn't support ${type}`);
  return null;
});

HdmiPort.displayName = "HdmiPort";

HdmiPort.metadata = {
  name: "HdmiPort",
  category: "stroke/gaming",
  tags: ["hdmi", "port", "icon"],
  description: "HdmiPort icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HdmiPort;
