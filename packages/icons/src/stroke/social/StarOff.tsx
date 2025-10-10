import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface StarOffProps extends IconProps {
  type?: "stroke";
}

export const StarOff: IconComponent<StarOffProps> = React.forwardRef<
  SVGSVGElement,
  StarOffProps
>(function StarOff(
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
          d="M8.34 8.34 2 9.27 7 14.14 5.82 21 12 17.77 18.18 21 17.59 17.57M18.42 12.76 22 9.27 15.09 8.27 12 2 10.56 4.91M2 2 22 22"
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
          d="M8.34 8.34 2 9.27 7 14.14 5.82 21 12 17.77 18.18 21 17.59 17.57M18.42 12.76 22 9.27 15.09 8.27 12 2 10.56 4.91M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`StarOff doesn't support ${type}`);
  return null;
});

StarOff.displayName = "StarOff";

StarOff.metadata = {
  name: "StarOff",
  category: "stroke/social",
  tags: ["star", "off", "icon"],
  description: "StarOff icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default StarOff;
