import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ALargeSmallProps extends IconProps {
  type?: "stroke";
}

export const ALargeSmall: IconComponent<ALargeSmallProps> = React.forwardRef<
  SVGSVGElement,
  ALargeSmallProps
>(function ALargeSmall(
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
          d="M15 16 17.536 8.672C17.605 8.472 17.735 8.298 17.908 8.175 18.081 8.051 18.288 7.985 18.5 7.985 18.712 7.985 18.919 8.051 19.092 8.175 19.265 8.298 19.395 8.472 19.464 8.672L22 16M15.697 14H21.303M2 16 6.039 6.31C6.077 6.219 6.141 6.141 6.223 6.086 6.305 6.032 6.402 6.002 6.501 6.002 6.599 6.002 6.696 6.032 6.778 6.086 6.86 6.141 6.924 6.219 6.962 6.31L11 16M3.304 13H9.696"
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
          d="M15 16 17.536 8.672C17.605 8.472 17.735 8.298 17.908 8.175 18.081 8.051 18.288 7.985 18.5 7.985 18.712 7.985 18.919 8.051 19.092 8.175 19.265 8.298 19.395 8.472 19.464 8.672L22 16M15.697 14H21.303M2 16 6.039 6.31C6.077 6.219 6.141 6.141 6.223 6.086 6.305 6.032 6.402 6.002 6.501 6.002 6.599 6.002 6.696 6.032 6.778 6.086 6.86 6.141 6.924 6.219 6.962 6.31L11 16M3.304 13H9.696"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ALargeSmall doesn't support ${type}`);
  return null;
});

ALargeSmall.displayName = "ALargeSmall";

ALargeSmall.metadata = {
  name: "ALargeSmall",
  category: "stroke/textFormatting",
  tags: ["large", "small", "icon"],
  description: "ALargeSmall icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ALargeSmall;
