import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PanelBottomDashed: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PanelBottomDashed(
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
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM14 15H15M19 15H21M3 15H5M9 15H10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PanelBottomDashed.displayName = "PanelBottomDashed";

PanelBottomDashed.metadata = {
  name: "PanelBottomDashed",
  category: "stroke/layout",
  tags: ["panel", "bottom", "dashed", "icon"],
  description: "PanelBottomDashed icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PanelBottomDashed;
