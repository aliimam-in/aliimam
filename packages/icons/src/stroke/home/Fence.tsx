import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FenceProps extends IconProps {
  type?: "stroke";
}

export const Fence: IconComponent<FenceProps> = React.forwardRef<
  SVGSVGElement,
  FenceProps
>(function Fence(
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
          d="M4 3 2 5V20C2 20.6 2.4 21 3 21H5C5.6 21 6 20.6 6 20V5L4 3ZM6 8H10M6 18H10M12 3 10 5V20C10 20.6 10.4 21 11 21H13C13.6 21 14 20.6 14 20V5L12 3ZM14 8H18M14 18H18M20 3 18 5V20C18 20.6 18.4 21 19 21H21C21.6 21 22 20.6 22 20V5L20 3Z"
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
          d="M4 3 2 5V20C2 20.6 2.4 21 3 21H5C5.6 21 6 20.6 6 20V5L4 3ZM6 8H10M6 18H10M12 3 10 5V20C10 20.6 10.4 21 11 21H13C13.6 21 14 20.6 14 20V5L12 3ZM14 8H18M14 18H18M20 3 18 5V20C18 20.6 18.4 21 19 21H21C21.6 21 22 20.6 22 20V5L20 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Fence doesn't support ${type}`);
  return null;
});

Fence.displayName = "Fence";

Fence.metadata = {
  name: "Fence",
  category: "stroke/home",
  tags: ["fence", "icon"],
  description: "Fence icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Fence;
