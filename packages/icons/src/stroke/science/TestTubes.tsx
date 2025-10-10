import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TestTubes: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TestTubes(
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
        d="M9 2V19.5C9 20.163 8.737 20.799 8.268 21.268 7.799 21.737 7.163 22 6.5 22 5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5V2M20 2V19.5C20 20.163 19.737 20.799 19.268 21.268 18.799 21.737 18.163 22 17.5 22 16.837 22 16.201 21.737 15.732 21.268 15.263 20.799 15 20.163 15 19.5V2M3 2H10M14 2H21M9 16H4M20 16H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TestTubes.displayName = "TestTubes";

TestTubes.metadata = {
  name: "TestTubes",
  category: "stroke/science",
  tags: ["test", "tubes", "icon"],
  description: "TestTubes icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TestTubes;
