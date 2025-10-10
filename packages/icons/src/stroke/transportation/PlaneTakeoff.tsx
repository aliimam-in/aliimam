import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PlaneTakeoffProps extends IconProps {
  type?: "stroke";
}

export const PlaneTakeoff: IconComponent<PlaneTakeoffProps> = React.forwardRef<
  SVGSVGElement,
  PlaneTakeoffProps
>(function PlaneTakeoff(
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
          d="M2 22H22M6.36 17.4 4 17 2 13 3.1 12.45C3.379 12.309 3.687 12.236 4 12.236 4.313 12.236 4.621 12.309 4.9 12.45L5.07 12.55C5.349 12.691 5.657 12.764 5.97 12.764 6.283 12.764 6.591 12.691 6.87 12.55L8 12 5 6 5.9 5.55C6.233 5.386 6.604 5.318 6.973 5.354 7.342 5.389 7.694 5.526 7.99 5.75L12.01 8.75C12.307 8.976 12.66 9.114 13.032 9.149 13.403 9.185 13.776 9.116 14.11 8.95L18.3 6.89C18.835 6.62 19.452 6.559 20.03 6.72L21 7C21.2 7.056 21.386 7.155 21.543 7.292 21.7 7.428 21.825 7.598 21.908 7.788 21.992 7.979 22.031 8.185 22.025 8.393 22.018 8.601 21.965 8.805 21.87 8.99L21.49 9.75C21.26 10.21 20.89 10.59 20.42 10.83L7.58 17.2C7.202 17.387 6.775 17.45 6.36 17.38V17.4Z"
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
          d="M2 22H22M6.36 17.4 4 17 2 13 3.1 12.45C3.379 12.309 3.687 12.236 4 12.236 4.313 12.236 4.621 12.309 4.9 12.45L5.07 12.55C5.349 12.691 5.657 12.764 5.97 12.764 6.283 12.764 6.591 12.691 6.87 12.55L8 12 5 6 5.9 5.55C6.233 5.386 6.604 5.318 6.973 5.354 7.342 5.389 7.694 5.526 7.99 5.75L12.01 8.75C12.307 8.976 12.66 9.114 13.032 9.149 13.403 9.185 13.776 9.116 14.11 8.95L18.3 6.89C18.835 6.62 19.452 6.559 20.03 6.72L21 7C21.2 7.056 21.386 7.155 21.543 7.292 21.7 7.428 21.825 7.598 21.908 7.788 21.992 7.979 22.031 8.185 22.025 8.393 22.018 8.601 21.965 8.805 21.87 8.99L21.49 9.75C21.26 10.21 20.89 10.59 20.42 10.83L7.58 17.2C7.202 17.387 6.775 17.45 6.36 17.38V17.4Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PlaneTakeoff doesn't support ${type}`);
  return null;
});

PlaneTakeoff.displayName = "PlaneTakeoff";

PlaneTakeoff.metadata = {
  name: "PlaneTakeoff",
  category: "stroke/transportation",
  tags: ["plane", "takeoff", "icon"],
  description: "PlaneTakeoff icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PlaneTakeoff;
