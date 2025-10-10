import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PlaneLandingProps extends IconProps {
  type?: "stroke";
}

export const PlaneLanding: IconComponent<PlaneLandingProps> = React.forwardRef<
  SVGSVGElement,
  PlaneLandingProps
>(function PlaneLanding(
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
          d="M2 22H22M3.77 10.77 2 9 4 4.5 5.1 5.05C5.65 5.33 6 5.89 6 6.5 6 7.11 6.35 7.67 6.9 7.95L8 8.5 11 2.5 12.05 3.03C12.342 3.175 12.594 3.39 12.784 3.655 12.974 3.92 13.096 4.227 13.14 4.55L13.86 9.95C13.904 10.273 14.026 10.58 14.216 10.845 14.406 11.11 14.658 11.325 14.95 11.47L19.35 13.67C19.77 13.89 20.13 14.22 20.36 14.63L20.96 15.66C21.45 16.54 20.9 17.64 19.9 17.76L18.72 17.91C18.25 17.97 17.77 17.89 17.35 17.67L4.29 11.15C4.097 11.052 3.922 10.924 3.77 10.77Z"
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
          d="M2 22H22M3.77 10.77 2 9 4 4.5 5.1 5.05C5.65 5.33 6 5.89 6 6.5 6 7.11 6.35 7.67 6.9 7.95L8 8.5 11 2.5 12.05 3.03C12.342 3.175 12.594 3.39 12.784 3.655 12.974 3.92 13.096 4.227 13.14 4.55L13.86 9.95C13.904 10.273 14.026 10.58 14.216 10.845 14.406 11.11 14.658 11.325 14.95 11.47L19.35 13.67C19.77 13.89 20.13 14.22 20.36 14.63L20.96 15.66C21.45 16.54 20.9 17.64 19.9 17.76L18.72 17.91C18.25 17.97 17.77 17.89 17.35 17.67L4.29 11.15C4.097 11.052 3.922 10.924 3.77 10.77Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PlaneLanding doesn't support ${type}`);
  return null;
});

PlaneLanding.displayName = "PlaneLanding";

PlaneLanding.metadata = {
  name: "PlaneLanding",
  category: "stroke/transportation",
  tags: ["plane", "landing", "icon"],
  description: "PlaneLanding icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PlaneLanding;
