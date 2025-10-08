import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FlaskConicalOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FlaskConicalOff(
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
        d="M10 2V4.343M14 2V8.343M2 2 22 22M20 20C20 20.53 19.789 21.039 19.414 21.414 19.039 21.789 18.53 22 18 22H6C5.653 22 5.311 21.91 5.01 21.738 4.708 21.566 4.456 21.319 4.279 21.02 4.102 20.721 4.006 20.382 4 20.035 3.994 19.687 4.078 19.345 4.245 19.04L9.472 9.477M6.453 15H15M8.5 2H15.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FlaskConicalOff.displayName = "FlaskConicalOff";

FlaskConicalOff.metadata = {
  name: "FlaskConicalOff",
  category: "stroke/gaming",
  tags: ["flask", "conical", "off", "icon"],
  description: "FlaskConicalOff icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlaskConicalOff;
