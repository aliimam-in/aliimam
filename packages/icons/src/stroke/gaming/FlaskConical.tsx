import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FlaskConical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FlaskConical(
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
        d="M14 2V8C14 8.335 14.084 8.666 14.245 8.96L19.755 19.04C19.922 19.345 20.006 19.687 20 20.035 19.994 20.382 19.898 20.721 19.721 21.02 19.544 21.319 19.292 21.566 18.99 21.738 18.689 21.91 18.347 22 18 22H6C5.653 22 5.311 21.91 5.01 21.738 4.708 21.566 4.456 21.319 4.279 21.02 4.102 20.721 4.006 20.382 4 20.035 3.994 19.687 4.078 19.345 4.245 19.04L9.755 8.96C9.916 8.666 10 8.335 10 8V2M6.453 15H17.547M8.5 2H15.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FlaskConical.displayName = "FlaskConical";

FlaskConical.metadata = {
  name: "FlaskConical",
  category: "stroke/gaming",
  tags: ["flask", "conical", "icon"],
  description: "FlaskConical icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlaskConical;
