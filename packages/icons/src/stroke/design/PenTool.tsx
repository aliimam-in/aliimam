import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PenTool: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PenTool(
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
        d="M15.707 21.293C15.52 21.481 15.265 21.586 15 21.586 14.735 21.586 14.481 21.481 14.293 21.293L12.707 19.707C12.52 19.52 12.414 19.265 12.414 19 12.414 18.735 12.52 18.481 12.707 18.293L18.293 12.707C18.481 12.52 18.735 12.414 19 12.414 19.265 12.414 19.52 12.52 19.707 12.707L21.293 14.293C21.481 14.481 21.586 14.735 21.586 15 21.586 15.265 21.481 15.52 21.293 15.707L15.707 21.293ZM18 13 16.625 6.126C16.588 5.939 16.498 5.767 16.365 5.629 16.233 5.492 16.064 5.395 15.879 5.35L3.235 2.028C3.068 1.988 2.894 1.991 2.729 2.037 2.564 2.084 2.414 2.172 2.293 2.293 2.172 2.414 2.084 2.564 2.037 2.729 1.991 2.894 1.988 3.068 2.028 3.235L5.35 15.879C5.395 16.064 5.492 16.233 5.629 16.365 5.767 16.498 5.939 16.588 6.126 16.625L13 18M2.3 2.3 9.586 9.586"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PenTool.displayName = "PenTool";

PenTool.metadata = {
  name: "PenTool",
  category: "stroke/design",
  tags: ["pen", "tool", "icon"],
  description: "PenTool icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PenTool;
