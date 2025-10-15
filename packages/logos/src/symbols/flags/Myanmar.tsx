import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Myanmar: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Myanmar(
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
      <path d="M1 11H31V21H1V11Z" fill="#5cb145" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
        fill="#f6ce46"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#d83b3f"
      />
      <path
        d="M18.578 16.9741L22.75 13.9431H17.593L16 9.03906L14.407 13.9431H9.25L13.422 16.9741L11.828 21.8781L16 18.8471L20.172 21.8781L18.578 16.9741Z"
        fill="#fff"
      />
    </svg>
  );
});

Myanmar.displayName = "Myanmar";

Myanmar.metadata = {
  name: "Myanmar",
  category: "symbols/flags",
  tags: ["myanmar", "icon"],
  description: "Myanmar icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Myanmar;
