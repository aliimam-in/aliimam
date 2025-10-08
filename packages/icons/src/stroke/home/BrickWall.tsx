import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BrickWallProps extends IconProps {
  type?: "stroke";
}

export const BrickWall: IconComponent<BrickWallProps> = React.forwardRef<
  SVGSVGElement,
  BrickWallProps
>(function BrickWall(
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
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM12 9V15M16 15V21M16 3V9M3 15H21M3 9H21M8 15V21M8 3V9"
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
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM12 9V15M16 15V21M16 3V9M3 15H21M3 9H21M8 15V21M8 3V9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BrickWall doesn't support ${type}`);
  return null;
});

BrickWall.displayName = "BrickWall";

BrickWall.metadata = {
  name: "BrickWall",
  category: "stroke/home",
  tags: ["brick", "wall", "icon"],
  description: "BrickWall icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BrickWall;
