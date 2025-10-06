import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircuitBoard: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircuitBoard(
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
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 9H15C15.53 9 16.039 8.789 16.414 8.414 16.789 8.039 17 7.53 17 7V3M9 11C10.105 11 11 10.105 11 9 11 7.895 10.105 7 9 7 7.895 7 7 7.895 7 9 7 10.105 7.895 11 9 11ZM7 21V17C7 16.47 7.211 15.961 7.586 15.586 7.961 15.211 8.47 15 9 15H13M15 17C16.105 17 17 16.105 17 15 17 13.895 16.105 13 15 13 13.895 13 13 13.895 13 15 13 16.105 13.895 17 15 17Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircuitBoard.displayName = "CircuitBoard";

CircuitBoard.metadata = {
  name: "CircuitBoard",
  category: "stroke/codingDevelopment",
  tags: ["circuit", "board", "icon"],
  description: "CircuitBoard icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircuitBoard;
