import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AlignHorizontalJustifyEnd: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AlignHorizontalJustifyEnd(
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
        d="M6 5H4C2.895 5 2 5.895 2 7V17C2 18.105 2.895 19 4 19H6C7.105 19 8 18.105 8 17V7C8 5.895 7.105 5 6 5ZM16 7H14C12.895 7 12 7.895 12 9V15C12 16.105 12.895 17 14 17H16C17.105 17 18 16.105 18 15V9C18 7.895 17.105 7 16 7ZM22 2V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AlignHorizontalJustifyEnd.displayName = "AlignHorizontalJustifyEnd";

AlignHorizontalJustifyEnd.metadata = {
  name: "AlignHorizontalJustifyEnd",
  category: "stroke/layout",
  tags: ["align", "horizontal", "justify", "end", "icon"],
  description: "AlignHorizontalJustifyEnd icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AlignHorizontalJustifyEnd;
