import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Iceland: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Iceland(
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
        fill="#205098"
      />
      <path d="M31 12H17V4H9V12H1V20H9V28H17V20H31V12Z" fill="#fff" />
      <path d="M31 14H15V4H11V14H1V18H11V28H15V18H31V14Z" fill="#cb333a" />
    </svg>
  );
});

Iceland.displayName = "Iceland";

Iceland.metadata = {
  name: "Iceland",
  category: "symbols/flags",
  tags: ["iceland", "icon"],
  description: "Iceland icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Iceland;
