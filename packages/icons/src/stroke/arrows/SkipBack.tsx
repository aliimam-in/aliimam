import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SkipBack: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SkipBack(
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
        d="M17.971 4.285C18.275 4.103 18.621 4.005 18.975 4 19.329 3.996 19.677 4.085 19.985 4.26 20.293 4.434 20.55 4.687 20.728 4.993 20.906 5.299 21 5.646 21 6V18C21 18.354 20.906 18.702 20.728 19.007 20.55 19.313 20.293 19.566 19.985 19.74 19.677 19.915 19.329 20.004 18.975 20 18.621 19.995 18.275 19.897 17.971 19.715L7.974 13.717C7.677 13.54 7.432 13.289 7.261 12.988 7.09 12.687 7 12.348 7 12.002 7 11.656 7.089 11.316 7.259 11.015 7.429 10.715 7.675 10.463 7.971 10.285L17.971 4.285ZM3 20V4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SkipBack.displayName = "SkipBack";

SkipBack.metadata = {
  name: "SkipBack",
  category: "stroke/arrows",
  tags: ["skip", "back", "icon"],
  description: "SkipBack icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SkipBack;
