import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronsLeftRightEllipsis: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronsLeftRightEllipsis(
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
        d="M12 12H12.01M16 12H16.01M17 7 22 12 17 17M7 7 2 12 7 17M8 12H8.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronsLeftRightEllipsis.displayName = "ChevronsLeftRightEllipsis";

ChevronsLeftRightEllipsis.metadata = {
  name: "ChevronsLeftRightEllipsis",
  category: "stroke/communication",
  tags: ["chevrons", "left", "right", "ellipsis", "icon"],
  description:
    "ChevronsLeftRightEllipsis icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsLeftRightEllipsis;
