import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FlashlightProps extends IconProps {
  type?: "stroke";
}

export const Flashlight: IconComponent<FlashlightProps> = React.forwardRef<
  SVGSVGElement,
  FlashlightProps
>(function Flashlight(
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
          d="M18 6C18 8 16 8 16 10V20C16 20.53 15.789 21.039 15.414 21.414 15.039 21.789 14.53 22 14 22H10C9.47 22 8.961 21.789 8.586 21.414 8.211 21.039 8 20.53 8 20V10C8 8 6 8 6 6V2H18V6ZM6 6H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r=".5" fill="currentColor" />
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
          d="M18 6C18 8 16 8 16 10V20C16 20.53 15.789 21.039 15.414 21.414 15.039 21.789 14.53 22 14 22H10C9.47 22 8.961 21.789 8.586 21.414 8.211 21.039 8 20.53 8 20V10C8 8 6 8 6 6V2H18V6ZM6 6H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r=".5" fill="currentColor" />
      </svg>
    );
  }

  console.error(`Flashlight doesn't support ${type}`);
  return null;
});

Flashlight.displayName = "Flashlight";

Flashlight.metadata = {
  name: "Flashlight",
  category: "stroke/photography",
  tags: ["flashlight", "icon"],
  description: "Flashlight icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flashlight;
