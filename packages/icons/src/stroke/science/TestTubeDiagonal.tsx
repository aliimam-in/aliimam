import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TestTubeDiagonal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TestTubeDiagonal(
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
        d="M21 7 6.82 21.18C6.289 21.706 5.571 22 4.823 21.998 4.076 21.996 3.359 21.698 2.83 21.17 2.3 20.639 2.002 19.92 2.002 19.17 2.002 18.42 2.3 17.701 2.83 17.17L17 3M16 2 22 8M12 16H4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TestTubeDiagonal.displayName = "TestTubeDiagonal";

TestTubeDiagonal.metadata = {
  name: "TestTubeDiagonal",
  category: "stroke/science",
  tags: ["test", "tube", "diagonal", "icon"],
  description: "TestTubeDiagonal icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TestTubeDiagonal;
