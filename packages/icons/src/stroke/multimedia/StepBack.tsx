import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface StepBackProps extends IconProps {
  type?: "stroke";
}

export const StepBack: IconComponent<StepBackProps> = React.forwardRef<
  SVGSVGElement,
  StepBackProps
>(function StepBack(
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
          d="M13.971 4.285C14.274 4.103 14.621 4.005 14.975 4 15.329 3.996 15.677 4.085 15.985 4.26 16.293 4.434 16.55 4.687 16.728 4.993 16.906 5.298 17 5.646 17 6V18C17 18.354 16.906 18.702 16.728 19.007 16.55 19.313 16.293 19.566 15.985 19.74 15.677 19.915 15.329 20.004 14.975 20 14.621 19.995 14.274 19.897 13.971 19.715L3.974 13.717C3.677 13.54 3.431 13.289 3.261 12.988 3.09 12.687 3 12.348 3 12.002 2.999 11.656 3.089 11.316 3.259 11.015 3.429 10.715 3.675 10.463 3.971 10.285L13.971 4.285ZM21 20V4"
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
          d="M13.971 4.285C14.275 4.103 14.621 4.005 14.975 4 15.329 3.996 15.677 4.085 15.985 4.26 16.293 4.434 16.55 4.687 16.728 4.993 16.906 5.299 17 5.646 17 6V18C17 18.354 16.906 18.702 16.728 19.007 16.55 19.313 16.293 19.566 15.985 19.74 15.677 19.915 15.329 20.004 14.975 20 14.621 19.995 14.275 19.897 13.971 19.715L3.974 13.717C3.677 13.54 3.432 13.289 3.261 12.988 3.09 12.687 3 12.348 3 12.002 3 11.656 3.089 11.316 3.259 11.015 3.429 10.715 3.675 10.463 3.971 10.285L13.971 4.285ZM21 20V4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`StepBack doesn't support ${type}`);
  return null;
});

StepBack.displayName = "StepBack";

StepBack.metadata = {
  name: "StepBack",
  category: "stroke/multimedia",
  tags: ["step", "back", "icon"],
  description: "StepBack icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default StepBack;
