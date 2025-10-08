import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ShredderProps extends IconProps {
  type?: "stroke";
}

export const Shredder: IconComponent<ShredderProps> = React.forwardRef<
  SVGSVGElement,
  ShredderProps
>(function Shredder(
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
          d="M10 22V17M14 19V17M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M18 20V17M2 13H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 13V7L15 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V13M6 20V17"
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
          d="M10 22V17M14 19V17M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M18 20V17M2 13H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 13V7L15 2H6C5.47 2 4.961 2.211 4.586 2.586 4.211 2.961 4 3.47 4 4V13M6 20V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Shredder doesn't support ${type}`);
  return null;
});

Shredder.displayName = "Shredder";

Shredder.metadata = {
  name: "Shredder",
  category: "stroke/mail",
  tags: ["shredder", "icon"],
  description: "Shredder icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Shredder;
