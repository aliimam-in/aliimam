import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const IterationCcw: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function IterationCcw(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M16 14L20 18L16 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10C20 8.41775 19.5308 6.87103 18.6518 5.55544C17.7727 4.23985 16.5233 3.21447 15.0615 2.60897C13.5997 2.00347 11.9911 1.84504 10.4393 2.15372C8.88743 2.4624 7.46197 3.22433 6.34315 4.34315C5.22433 5.46197 4.4624 6.88743 4.15372 8.43928C3.84504 9.99113 4.00347 11.5997 4.60897 13.0615C5.21447 14.5233 6.23985 15.7727 7.55544 16.6518C8.87103 17.5308 10.4178 18 12 18H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

IterationCcw.displayName = "IterationCcw";

IterationCcw.metadata = {
  name: "IterationCcw",
  category: "stroke/arrows",
  tags: ["iteration", "ccw", "icon"],
  description: "IterationCcw icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default IterationCcw;
