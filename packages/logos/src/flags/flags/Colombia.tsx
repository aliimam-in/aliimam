import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Colombia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Colombia(
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
        d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V21H1V24Z"
        fill="#b92932"
      />
      <path d="M1 15H31V22H1V15Z" fill="#0f2c83" />
      <path
        d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
        fill="#f8d047"
      />
    </svg>
  );
});

Colombia.displayName = "Colombia";

Colombia.metadata = {
  name: "Colombia",
  category: "flags/flags",
  tags: ["colombia", "icon"],
  description: "Colombia icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Colombia;
