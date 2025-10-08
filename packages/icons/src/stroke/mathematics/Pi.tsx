import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PiProps extends IconProps {
  type?: "stroke";
}

export const Pi: IconComponent<PiProps> = React.forwardRef<
  SVGSVGElement,
  PiProps
>(function Pi(
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
          d="M9 4V20M4 7C4 5.3 5.3 4 7 4H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 20C16.3 20 15 18.7 15 17V4"
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
          d="M9 4V20M4 7C4 5.3 5.3 4 7 4H20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 20C16.3 20 15 18.7 15 17V4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Pi doesn't support ${type}`);
  return null;
});

Pi.displayName = "Pi";

Pi.metadata = {
  name: "Pi",
  category: "stroke/mathematics",
  tags: ["pi", "icon"],
  description: "Pi icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pi;
