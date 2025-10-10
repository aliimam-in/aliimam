import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MountainProps extends IconProps {
  type?: "stroke";
}

export const Mountain: IconComponent<MountainProps> = React.forwardRef<
  SVGSVGElement,
  MountainProps
>(function Mountain(
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
          d="M8 3L12 11L17 6L22 21H2L8 3Z"
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
          d="M8 3L12 11L17 6L22 21H2L8 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Mountain doesn't support ${type}`);
  return null;
});

Mountain.displayName = "Mountain";

Mountain.metadata = {
  name: "Mountain",
  category: "stroke/nature",
  tags: ["mountain", "icon"],
  description: "Mountain icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mountain;
