import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LineSquiggleProps extends IconProps {
  type?: "stroke";
}

export const LineSquiggle: IconComponent<LineSquiggleProps> = React.forwardRef<
  SVGSVGElement,
  LineSquiggleProps
>(function LineSquiggle(
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
          d="M6.99998 3.49998C12 1.49998 14 5.99998 9.99998 7.49998C1.49998 9.99998 1.99998 15 4.99998 16C9.99998 18 14 5.99998 19 8.99998C24 12 19.5 22.5 15 21C9.99998 18.5 15.5 9.99998 21 19"
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
          d="M7.0001 3.49998C12.0001 1.49998 14.0001 5.99998 10.0001 7.49998C1.5001 9.99998 2.0001 15 5.0001 16C10.0001 18 14.0001 5.99998 19.0001 8.99998C24.0001 12 19.5001 22.5 15.0001 21C10.0001 18.5 15.5001 9.99998 21.0001 19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`LineSquiggle doesn't support ${type}`);
  return null;
});

LineSquiggle.displayName = "LineSquiggle";

LineSquiggle.metadata = {
  name: "LineSquiggle",
  category: "stroke/mathematics",
  tags: ["line", "squiggle", "icon"],
  description: "LineSquiggle icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LineSquiggle;
