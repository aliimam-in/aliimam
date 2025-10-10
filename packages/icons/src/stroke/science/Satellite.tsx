import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SatelliteProps extends IconProps {
  type?: "stroke";
}

export const Satellite: IconComponent<SatelliteProps> = React.forwardRef<
  SVGSVGElement,
  SatelliteProps
>(function Satellite(
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
          d="M13.5 6.5 10.352 3.352C10.126 3.126 9.819 2.999 9.5 2.999 9.18 2.999 8.874 3.126 8.648 3.352L6.352 5.648C6.126 5.874 5.999 6.18 5.999 6.5 5.999 6.82 6.126 7.126 6.352 7.352L9.5 10.5M16.5 7.5 19 5M17.5 10.5 20.648 13.648C20.874 13.874 21.001 14.18 21.001 14.5 21.001 14.82 20.874 15.126 20.648 15.352L18.352 17.648C18.126 17.874 17.82 18.001 17.5 18.001 17.18 18.001 16.874 17.874 16.648 17.648L13.5 14.5M9 21C9 19.409 8.368 17.883 7.243 16.757 6.117 15.632 4.591 15 3 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.3519 10.648C9.12595 10.874 8.99902 11.1805 8.99902 11.5C8.99902 11.8196 9.12595 12.126 9.3519 12.352L11.6479 14.648C11.8739 14.874 12.1803 15.0009 12.4999 15.0009C12.8195 15.0009 13.1259 14.874 13.3519 14.648L17.6479 10.352C17.8738 10.126 18.0008 9.81957 18.0008 9.50002C18.0008 9.18046 17.8738 8.87399 17.6479 8.64802L15.3519 6.35202C15.1259 6.12608 14.8195 5.99915 14.4999 5.99915C14.1803 5.99915 13.8739 6.12608 13.6479 6.35202L9.3519 10.648Z"
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
          d="M13.5 6.5 10.352 3.352C10.126 3.126 9.82 2.999 9.5 2.999 9.18 2.999 8.874 3.126 8.648 3.352L6.352 5.648C6.126 5.874 5.999 6.18 5.999 6.5 5.999 6.82 6.126 7.126 6.352 7.352L9.5 10.5M16.5 7.5 19 5M17.5 10.5 20.648 13.648C20.874 13.874 21.001 14.18 21.001 14.5 21.001 14.82 20.874 15.126 20.648 15.352L18.352 17.648C18.126 17.874 17.82 18.001 17.5 18.001 17.18 18.001 16.874 17.874 16.648 17.648L13.5 14.5M9 21C9 19.409 8.368 17.883 7.243 16.757 6.117 15.632 4.591 15 3 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.35202 10.648C9.12608 10.874 8.99915 11.1805 8.99915 11.5C8.99915 11.8196 9.12608 12.126 9.35202 12.352L11.648 14.648C11.874 14.874 12.1805 15.0009 12.5 15.0009C12.8196 15.0009 13.126 14.874 13.352 14.648L17.648 10.352C17.874 10.126 18.0009 9.81957 18.0009 9.50002C18.0009 9.18046 17.874 8.87399 17.648 8.64802L15.352 6.35202C15.126 6.12608 14.8196 5.99915 14.5 5.99915C14.1805 5.99915 13.874 6.12608 13.648 6.35202L9.35202 10.648Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Satellite doesn't support ${type}`);
  return null;
});

Satellite.displayName = "Satellite";

Satellite.metadata = {
  name: "Satellite",
  category: "stroke/science",
  tags: ["satellite", "icon"],
  description: "Satellite icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Satellite;
