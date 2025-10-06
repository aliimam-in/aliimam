import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SeparatorVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SeparatorVertical(
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
        d="M12 3V21M16 16 20 12 16 8M8 8 4 12 8 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SeparatorVertical.displayName = "SeparatorVertical";

SeparatorVertical.metadata = {
  name: "SeparatorVertical",
  category: "stroke/arrows",
  tags: ["separator", "vertical", "icon"],
  description: "SeparatorVertical icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SeparatorVertical;
