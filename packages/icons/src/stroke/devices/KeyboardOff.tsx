import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface KeyboardOffProps extends IconProps {
  type?: "stroke";
}

export const KeyboardOff: IconComponent<KeyboardOffProps> = React.forwardRef<
  SVGSVGElement,
  KeyboardOffProps
>(function KeyboardOff(
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
          d="M20 4C20.53 4 21.039 4.211 21.414 4.586 21.789 4.961 22 5.47 22 6M22 6V16.41M7 16H16M9.69 4H20M14 8H14.01M18 8H18.01M2 2 22 22M20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V6C2 5.47 2.211 4.961 2.586 4.586 2.961 4.211 3.47 4 4 4M6 8H6.01M8 12H8.01"
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
          d="M20 4C20.53 4 21.039 4.211 21.414 4.586 21.789 4.961 22 5.47 22 6M22 6V16.41M7 16H16M9.69 4H20M14 8H14.01M18 8H18.01M2 2 22 22M20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V6C2 5.47 2.211 4.961 2.586 4.586 2.961 4.211 3.47 4 4 4M6 8H6.01M8 12H8.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`KeyboardOff doesn't support ${type}`);
  return null;
});

KeyboardOff.displayName = "KeyboardOff";

KeyboardOff.metadata = {
  name: "KeyboardOff",
  category: "stroke/devices",
  tags: ["keyboard", "off", "icon"],
  description: "KeyboardOff icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default KeyboardOff;
