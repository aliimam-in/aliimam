import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquareStackProps extends IconProps {
  type?: "stroke";
}

export const SquareStack: IconComponent<SquareStackProps> = React.forwardRef<
  SVGSVGElement,
  SquareStackProps
>(function SquareStack(
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
          d="M4 10C2.9 10 2 9.1 2 8V4C2 2.9 2.9 2 4 2H8C9.1 2 10 2.9 10 4M10 16C8.9 16 8 15.1 8 14V10C8 8.9 8.9 8 10 8H14C15.1 8 16 8.9 16 10M20 14H16C14.895 14 14 14.895 14 16V20C14 21.105 14.895 22 16 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14Z"
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
          d="M4 10C2.9 10 2 9.1 2 8V4C2 2.9 2.9 2 4 2H8C9.1 2 10 2.9 10 4M10 16C8.9 16 8 15.1 8 14V10C8 8.9 8.9 8 10 8H14C15.1 8 16 8.9 16 10M20 14H16C14.895 14 14 14.895 14 16V20C14 21.105 14.895 22 16 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SquareStack doesn't support ${type}`);
  return null;
});

SquareStack.displayName = "SquareStack";

SquareStack.metadata = {
  name: "SquareStack",
  category: "stroke/files",
  tags: ["square", "stack", "icon"],
  description: "SquareStack icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareStack;
