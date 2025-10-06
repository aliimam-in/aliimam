import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BookUp2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function BookUp2(
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
        d="M12 13V7M18 2H19C19.265 2 19.52 2.105 19.707 2.293 19.895 2.48 20 2.735 20 3V21C20 21.265 19.895 21.52 19.707 21.707 19.52 21.895 19.265 22 19 22H6.5C5.837 22 5.201 21.737 4.732 21.268 4.263 20.799 4 20.163 4 19.5 4 18.837 4.263 18.201 4.732 17.732 5.201 17.263 5.837 17 6.5 17H20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 19.5V4.5C4 3.837 4.263 3.201 4.732 2.732 5.201 2.263 5.837 2 6.5 2M9 10 12 7 15 10M9 5 12 2 15 5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

BookUp2.displayName = "BookUp2";

BookUp2.metadata = {
  name: "BookUp2",
  category: "stroke/codingDevelopment",
  tags: ["book", "up", "icon"],
  description: "BookUp2 icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BookUp2;
