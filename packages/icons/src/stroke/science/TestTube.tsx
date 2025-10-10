import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TestTube: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TestTube(
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
        d="M14.5 2V19.5C14.5 20.9 13.4 22 12 22 10.6 22 9.5 20.9 9.5 19.5V2M8.5 2H15.5M14.5 16H9.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TestTube.displayName = "TestTube";

TestTube.metadata = {
  name: "TestTube",
  category: "stroke/science",
  tags: ["test", "tube", "icon"],
  description: "TestTube icon from stroke/science category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TestTube;
