import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PanelRightOpen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PanelRightOpen(
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
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM15 3V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 15L7 12L10 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PanelRightOpen.displayName = "PanelRightOpen";

PanelRightOpen.metadata = {
  name: "PanelRightOpen",
  category: "stroke/arrows",
  tags: ["panel", "right", "open", "icon"],
  description: "PanelRightOpen icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PanelRightOpen;
