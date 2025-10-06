import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Codepen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Codepen(
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
        d="M12 2 22 8.5V15.5L12 22 2 15.5V8.5L12 2ZM12 22V15.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 8.5L12 15.5L2 8.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 15.5 12 8.5 22 15.5M12 2V8.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Codepen.displayName = "Codepen";

Codepen.metadata = {
  name: "Codepen",
  category: "stroke/codingDevelopment",
  tags: ["codepen", "icon"],
  description: "Codepen icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Codepen;
