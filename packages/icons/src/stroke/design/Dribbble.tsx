import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Dribbble: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Dribbble(
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94M21.75 12.84C15.13 11.43 9.61 13.84 5.37 19.16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.56006 2.75C12.9301 8.75 14.5601 12.17 16.5601 20.47"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Dribbble.displayName = "Dribbble";

Dribbble.metadata = {
  name: "Dribbble",
  category: "stroke/design",
  tags: ["dribbble", "icon"],
  description: "Dribbble icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dribbble;
