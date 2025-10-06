import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Combine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Combine(
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
        d="M10 18H5C4.204 18 3.441 17.684 2.879 17.121 2.316 16.559 2 15.796 2 15V14M14 2C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V8C16 8.53 15.789 9.039 15.414 9.414 15.039 9.789 14.53 10 14 10M20 2C20.53 2 21.039 2.211 21.414 2.586 21.789 2.961 22 3.47 22 4V8C22 8.53 21.789 9.039 21.414 9.414 21.039 9.789 20.53 10 20 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 21 10 18 7 15M20 14H16C14.895 14 14 14.895 14 16V20C14 21.105 14.895 22 16 22H20C21.105 22 22 21.105 22 20V16C22 14.895 21.105 14 20 14ZM8 2H4C2.895 2 2 2.895 2 4V8C2 9.105 2.895 10 4 10H8C9.105 10 10 9.105 10 8V4C10 2.895 9.105 2 8 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Combine.displayName = "Combine";

Combine.metadata = {
  name: "Combine",
  category: "stroke/codingDevelopment",
  tags: ["combine", "icon"],
  description: "Combine icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Combine;
