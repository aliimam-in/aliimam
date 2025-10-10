import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RepeatProps extends IconProps {
  type?: "stroke";
}

export const Repeat: IconComponent<RepeatProps> = React.forwardRef<
  SVGSVGElement,
  RepeatProps
>(function Repeat(
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
          d="M17 2L21 6L17 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 11V10C3 8.939 3.421 7.922 4.172 7.172 4.922 6.421 5.939 6 7 6H21M7 22 3 18 7 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 13V14C21 15.0609 20.5786 16.0783 19.8284 16.8284C19.0783 17.5786 18.0609 18 17 18H3"
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
          d="M17 2L21 6L17 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 11V10C3 8.939 3.421 7.922 4.172 7.172 4.922 6.421 5.939 6 7 6H21M7 22 3 18 7 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 13V14C21 15.0609 20.5786 16.0783 19.8284 16.8284C19.0783 17.5786 18.0609 18 17 18H3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Repeat doesn't support ${type}`);
  return null;
});

Repeat.displayName = "Repeat";

Repeat.metadata = {
  name: "Repeat",
  category: "stroke/multimedia",
  tags: ["repeat", "icon"],
  description: "Repeat icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Repeat;
