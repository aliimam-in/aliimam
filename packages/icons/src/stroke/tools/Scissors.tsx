import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ScissorsProps extends IconProps {
  type?: "stroke";
}

export const Scissors: IconComponent<ScissorsProps> = React.forwardRef<
  SVGSVGElement,
  ScissorsProps
>(function Scissors(
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
          d="M6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM8.12 8.12 12 12M20 4 8.12 15.88M6 21C7.657 21 9 19.657 9 18 9 16.343 7.657 15 6 15 4.343 15 3 16.343 3 18 3 19.657 4.343 21 6 21ZM14.8 14.8 20 20"
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
          d="M6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM8.12 8.12 12 12M20 4 8.12 15.88M6 21C7.657 21 9 19.657 9 18 9 16.343 7.657 15 6 15 4.343 15 3 16.343 3 18 3 19.657 4.343 21 6 21ZM14.8 14.8 20 20"
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
          d="M6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM8.12 8.12 12 12M20 4 8.12 15.88M6 21C7.657 21 9 19.657 9 18 9 16.343 7.657 15 6 15 4.343 15 3 16.343 3 18 3 19.657 4.343 21 6 21ZM14.8 14.8 20 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Scissors doesn't support ${type}`);
  return null;
});

Scissors.displayName = "Scissors";

Scissors.metadata = {
  name: "Scissors",
  category: "stroke/tools",
  tags: ["scissors", "icon"],
  description: "Scissors icon from stroke/tools category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Scissors;
