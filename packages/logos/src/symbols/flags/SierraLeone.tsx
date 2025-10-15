import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SierraLeone: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SierraLeone(
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#81cbfa"
      />
      <path d="M16 7L23.281 25L16 23.281L8.71899 25L16 7Z" fill="#fff" />
      <path d="M16 9.427L21.604 23.281H10.396L16 9.427Z" fill="currentColor" />
      <path d="M16 16L23.281 25H8.71899L16 16Z" fill="#f4d24b" />
    </svg>
  );
});

SierraLeone.displayName = "SierraLeone";

SierraLeone.metadata = {
  name: "SierraLeone",
  category: "symbols/flags",
  tags: ["sierra", "leone", "icon"],
  description: "SierraLeone icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SierraLeone;
