import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Madagascar: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Madagascar(
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
      <path d="M27 4H12V16H31V8C31 5.791 29.209 4 27 4Z" fill="#e65143" />
      <path d="M12 15V28H27C29.209 28 31 26.209 31 24V15H12Z" fill="#3a8343" />
      <path
        d="M5 4H13V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z"
        fill="#fff"
      />
    </svg>
  );
});

Madagascar.displayName = "Madagascar";

Madagascar.metadata = {
  name: "Madagascar",
  category: "symbols/flags",
  tags: ["madagascar", "icon"],
  description: "Madagascar icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Madagascar;
