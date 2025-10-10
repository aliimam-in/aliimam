import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AntennaProps extends IconProps {
  type?: "stroke";
}

export const Antenna: IconComponent<AntennaProps> = React.forwardRef<
  SVGSVGElement,
  AntennaProps
>(function Antenna(
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
          d="M2 12 7 2M7 12 12 2M12 12 17 2M17 12 22 2M4.5 7H19.5M12 16V22"
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
          d="M2 12 7 2M7 12 12 2M12 12 17 2M17 12 22 2M4.5 7H19.5M12 16V22"
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
          d="M2 12 7 2M7 12 12 2M12 12 17 2M17 12 22 2M4.5 7H19.5M12 16V22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Antenna doesn't support ${type}`);
  return null;
});

Antenna.displayName = "Antenna";

Antenna.metadata = {
  name: "Antenna",
  category: "stroke/multimedia",
  tags: ["antenna", "icon"],
  description: "Antenna icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Antenna;
