import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ToyBrickProps extends IconProps {
  type?: "stroke";
}

export const ToyBrick: IconComponent<ToyBrickProps> = React.forwardRef<
  SVGSVGElement,
  ToyBrickProps
>(function ToyBrick(
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
          d="M20 8H4C3.448 8 3 8.448 3 9V19C3 19.552 3.448 20 4 20H20C20.552 20 21 19.552 21 19V9C21 8.448 20.552 8 20 8ZM10 8V5C10 4.4 9.6 4 9 4H6C5.735 4 5.48 4.105 5.293 4.293 5.105 4.48 5 4.735 5 5V8M19 8V5C19 4.4 18.6 4 18 4H15C14.735 4 14.48 4.105 14.293 4.293 14.105 4.48 14 4.735 14 5V8"
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
          d="M20 8H4C3.448 8 3 8.448 3 9V19C3 19.552 3.448 20 4 20H20C20.552 20 21 19.552 21 19V9C21 8.448 20.552 8 20 8ZM10 8V5C10 4.4 9.6 4 9 4H6C5.735 4 5.48 4.105 5.293 4.293 5.105 4.48 5 4.735 5 5V8M19 8V5C19 4.4 18.6 4 18 4H15C14.735 4 14.48 4.105 14.293 4.293 14.105 4.48 14 4.735 14 5V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ToyBrick doesn't support ${type}`);
  return null;
});

ToyBrick.displayName = "ToyBrick";

ToyBrick.metadata = {
  name: "ToyBrick",
  category: "stroke/gaming",
  tags: ["toy", "brick", "icon"],
  description: "ToyBrick icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ToyBrick;
