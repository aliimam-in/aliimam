import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowUpp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowUpp(
  {
    color = "currentColor",
    fill,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    variant = "stroke",
    ...props
  },
  forwardedRef,
) {
  return (
    <svg
      width="24"
      height="24"
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
        d="M3.2 20 11.2 12 3.2 4M14.2 20 21.2 12 14.2 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ArrowUpp.displayName = "ArrowUpp";

ArrowUpp.metadata = {
  name: "ArrowUpp",
  category: "stroke/arrows",
  tags: ["arrow", "upp", "icon"],
  description: "ArrowUpp icon from stroke/arrows category",
  variants: ["stroke", "solid"],
} as IconMetadata;

export default ArrowUpp;
