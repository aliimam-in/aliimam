import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DrumProps extends IconProps {
  type?: "stroke";
}

export const Drum: IconComponent<DrumProps> = React.forwardRef<
  SVGSVGElement,
  DrumProps
>(function Drum(
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
          d="M2 2 10 10M22 2 14 10M12 14C17.523 14 22 11.761 22 9 22 6.239 17.523 4 12 4 6.477 4 2 6.239 2 9 2 11.761 6.477 14 12 14ZM7 13.4V21.3M12 14V22M17 13.4V21.3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9V17C2 18.3261 3.05357 19.5979 4.92893 20.5355C6.8043 21.4732 9.34784 22 12 22C14.6522 22 17.1957 21.4732 19.0711 20.5355C20.9464 19.5979 22 18.3261 22 17V9"
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
          d="M2 2 10 10M22 2 14 10M12 14C17.523 14 22 11.761 22 9 22 6.239 17.523 4 12 4 6.477 4 2 6.239 2 9 2 11.761 6.477 14 12 14ZM7 13.4V21.3M12 14V22M17 13.4V21.3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9V17C2 18.3261 3.05357 19.5979 4.92893 20.5355C6.8043 21.4732 9.34784 22 12 22C14.6522 22 17.1957 21.4732 19.0711 20.5355C20.9464 19.5979 22 18.3261 22 17V9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Drum doesn't support ${type}`);
  return null;
});

Drum.displayName = "Drum";

Drum.metadata = {
  name: "Drum",
  category: "stroke/multimedia",
  tags: ["drum", "icon"],
  description: "Drum icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Drum;
