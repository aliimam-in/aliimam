import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bahrain: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Bahrain(
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
      viewBox="0 0 32 32"
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
        d="M27 4H9V28H27C29.209 28 31 26.209 31 24V8C31 5.791 29.209 4 27 4Z"
        fill="#ea3323"
      />
      <path
        d="M10 23.2L16 20.8L10 18.4L16 16L10 13.6L16 11.2L10 8.8L16 6.4L10 4H5C2.791 4 1 5.791 1 8V24C1 26.209 2.791 28 5 28H10L16 25.6L10 23.2Z"
        fill="#fff"
      />
    </svg>
  );
});

Bahrain.displayName = "Bahrain";

Bahrain.metadata = {
  name: "Bahrain",
  category: "flags/flags",
  tags: ["bahrain", "icon"],
  description: "Bahrain icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bahrain;
