import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DrillProps extends IconProps {
  type?: "stroke";
}

export const Drill: IconComponent<DrillProps> = React.forwardRef<
  SVGSVGElement,
  DrillProps
>(function Drill(
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
          d="M10 18C10.265 18 10.52 18.105 10.707 18.293 10.895 18.48 11 18.735 11 19V21C11 21.265 10.895 21.52 10.707 21.707 10.52 21.895 10.265 22 10 22H5C4.204 22 3.441 21.684 2.879 21.121 2.316 20.559 2 19.796 2 19 2 18.735 2.105 18.48 2.293 18.293 2.48 18.105 2.735 18 3 18H10ZM13 10H4C3.47 10 2.961 9.789 2.586 9.414 2.211 9.039 2 8.53 2 8V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H13C13.265 2 13.52 2.105 13.707 2.293 13.895 2.48 14 2.735 14 3V9C14 9.265 13.895 9.52 13.707 9.707 13.52 9.895 13.265 10 13 10ZM13 10 12.19 13.242C12.136 13.458 12.011 13.651 11.836 13.788 11.66 13.925 11.443 14 11.22 14H8M14 4H17C17.265 4 17.52 4.105 17.707 4.293 17.895 4.48 18 4.735 18 5V7C18 7.265 17.895 7.52 17.707 7.707 17.52 7.895 17.265 8 17 8H14M18 6H22M5 10 3 18M7 18 9 10"
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
          d="M10 18C10.265 18 10.52 18.105 10.707 18.293 10.895 18.48 11 18.735 11 19V21C11 21.265 10.895 21.52 10.707 21.707 10.52 21.895 10.265 22 10 22H5C4.204 22 3.441 21.684 2.879 21.121 2.316 20.559 2 19.796 2 19 2 18.735 2.105 18.48 2.293 18.293 2.48 18.105 2.735 18 3 18H10ZM13 10H4C3.47 10 2.961 9.789 2.586 9.414 2.211 9.039 2 8.53 2 8V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H13C13.265 2 13.52 2.105 13.707 2.293 13.895 2.48 14 2.735 14 3V9C14 9.265 13.895 9.52 13.707 9.707 13.52 9.895 13.265 10 13 10ZM13 10 12.19 13.242C12.136 13.458 12.011 13.651 11.836 13.788 11.66 13.925 11.443 14 11.22 14H8M14 4H17C17.265 4 17.52 4.105 17.707 4.293 17.895 4.48 18 4.735 18 5V7C18 7.265 17.895 7.52 17.707 7.707 17.52 7.895 17.265 8 17 8H14M18 6H22M5 10 3 18M7 18 9 10"
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
          d="M10 18C10.265 18 10.52 18.105 10.707 18.293 10.895 18.48 11 18.735 11 19V21C11 21.265 10.895 21.52 10.707 21.707 10.52 21.895 10.265 22 10 22H5C4.204 22 3.441 21.684 2.879 21.121 2.316 20.559 2 19.796 2 19 2 18.735 2.105 18.48 2.293 18.293 2.48 18.105 2.735 18 3 18H10ZM13 10H4C3.47 10 2.961 9.789 2.586 9.414 2.211 9.039 2 8.53 2 8V4C2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H13C13.265 2 13.52 2.105 13.707 2.293 13.895 2.48 14 2.735 14 3V9C14 9.265 13.895 9.52 13.707 9.707 13.52 9.895 13.265 10 13 10ZM13 10 12.19 13.242C12.136 13.458 12.011 13.651 11.836 13.788 11.66 13.925 11.443 14 11.22 14H8M14 4H17C17.265 4 17.52 4.105 17.707 4.293 17.895 4.48 18 4.735 18 5V7C18 7.265 17.895 7.52 17.707 7.707 17.52 7.895 17.265 8 17 8H14M18 6H22M5 10 3 18M7 18 9 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Drill doesn't support ${type}`);
  return null;
});

Drill.displayName = "Drill";

Drill.metadata = {
  name: "Drill",
  category: "stroke/tools",
  tags: ["drill", "icon"],
  description: "Drill icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Drill;
