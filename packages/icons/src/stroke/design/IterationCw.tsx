import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface IterationCwProps extends IconProps {
  type?: "stroke";
}

export const IterationCw: IconComponent<IterationCwProps> = React.forwardRef<
  SVGSVGElement,
  IterationCwProps
>(function IterationCw(
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
          d="M4 10C4 8.41775 4.46919 6.87103 5.34824 5.55544C6.22729 4.23985 7.47672 3.21447 8.93853 2.60897C10.4003 2.00347 12.0089 1.84504 13.5607 2.15372C15.1126 2.4624 16.538 3.22433 17.6569 4.34315C18.7757 5.46197 19.5376 6.88743 19.8463 8.43928C20.155 9.99113 19.9965 11.5997 19.391 13.0615C18.7855 14.5233 17.7602 15.7727 16.4446 16.6518C15.129 17.5308 13.5823 18 12 18H4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 22L4 18L8 14"
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
          d="M4 10C4 8.41775 4.46919 6.87103 5.34824 5.55544C6.22729 4.23985 7.47672 3.21447 8.93853 2.60897C10.4003 2.00347 12.0089 1.84504 13.5607 2.15372C15.1126 2.4624 16.538 3.22433 17.6569 4.34315C18.7757 5.46197 19.5376 6.88743 19.8463 8.43928C20.155 9.99113 19.9965 11.5997 19.391 13.0615C18.7855 14.5233 17.7602 15.7727 16.4446 16.6518C15.129 17.5308 13.5823 18 12 18H4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 22L4 18L8 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`IterationCw doesn't support ${type}`);
  return null;
});

IterationCw.displayName = "IterationCw";

IterationCw.metadata = {
  name: "IterationCw",
  category: "stroke/design",
  tags: ["iteration", "cw", "icon"],
  description: "IterationCw icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default IterationCw;
