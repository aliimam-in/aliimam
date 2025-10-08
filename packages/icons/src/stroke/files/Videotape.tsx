import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface VideotapeProps extends IconProps {
  type?: "stroke";
}

export const Videotape: IconComponent<VideotapeProps> = React.forwardRef<
  SVGSVGElement,
  VideotapeProps
>(function Videotape(
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
          d="M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM2 8H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 16C9.105 16 10 15.105 10 14 10 12.895 9.105 12 8 12 6.895 12 6 12.895 6 14 6 15.105 6.895 16 8 16ZM8 12H16M16 16C17.105 16 18 15.105 18 14 18 12.895 17.105 12 16 12 14.895 12 14 12.895 14 14 14 15.105 14.895 16 16 16Z"
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
          d="M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM2 8H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 16C9.105 16 10 15.105 10 14 10 12.895 9.105 12 8 12 6.895 12 6 12.895 6 14 6 15.105 6.895 16 8 16ZM8 12H16M16 16C17.105 16 18 15.105 18 14 18 12.895 17.105 12 16 12 14.895 12 14 12.895 14 14 14 15.105 14.895 16 16 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Videotape doesn't support ${type}`);
  return null;
});

Videotape.displayName = "Videotape";

Videotape.metadata = {
  name: "Videotape",
  category: "stroke/files",
  tags: ["videotape", "icon"],
  description: "Videotape icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Videotape;
