import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Twitter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Twitter(
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
        d="M22 3.99999C22 3.99999 21.3 6.09999 20 7.39999C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.59999 3 4.99999C5.2 7.59999 8.6 9.09999 12 8.99999C11.1 4.79999 16 2.39999 19 5.19999C20.1 5.19999 22 3.99999 22 3.99999Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Twitter.displayName = "Twitter";

Twitter.metadata = {
  name: "Twitter",
  category: "stroke/social",
  tags: ["twitter", "icon"],
  description: "Twitter icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Twitter;
