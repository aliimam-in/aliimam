import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const JapaneseYen: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function JapaneseYen(
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
        d="M12 9.5V21M12 9.5 6 3M12 9.5 18 3M6 15H18M6 11H18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

JapaneseYen.displayName = "JapaneseYen";

JapaneseYen.metadata = {
  name: "JapaneseYen",
  category: "stroke/finance",
  tags: ["japanese", "yen", "icon"],
  description: "JapaneseYen icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default JapaneseYen;
