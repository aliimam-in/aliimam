import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FlagOffProps extends IconProps {
  type?: "stroke";
}

export const FlagOff: IconComponent<FlagOffProps> = React.forwardRef<
  SVGSVGElement,
  FlagOffProps
>(function FlagOff(
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
          d="M16 16C13 16 11 14 8 14 6.524 14 5.1 14.544 4 15.528M2 2 22 22M4 22V4M7.656 2H8C11 2 13 4 15.333 4 16.666 4 17.689 3.733 18.4 3.2 18.549 3.089 18.725 3.021 18.91 3.004 19.095 2.987 19.281 3.023 19.447 3.106 19.613 3.189 19.753 3.316 19.851 3.474 19.948 3.632 20 3.814 20 4V14.347"
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
          d="M16 16C13 16 11 14 8 14 6.524 14 5.1 14.544 4 15.528M2 2 22 22M4 22V4M7.656 2H8C11 2 13 4 15.333 4 16.666 4 17.689 3.733 18.4 3.2 18.549 3.089 18.725 3.021 18.91 3.004 19.095 2.987 19.281 3.023 19.447 3.106 19.613 3.189 19.753 3.316 19.851 3.474 19.948 3.632 20 3.814 20 4V14.347"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`FlagOff doesn't support ${type}`);
  return null;
});

FlagOff.displayName = "FlagOff";

FlagOff.metadata = {
  name: "FlagOff",
  category: "stroke/social",
  tags: ["flag", "off", "icon"],
  description: "FlagOff icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlagOff;
