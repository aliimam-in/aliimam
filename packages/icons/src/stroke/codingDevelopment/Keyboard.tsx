import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Keyboard: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Keyboard(
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
        d="M10 8H10.01M12 12H12.01M14 8H14.01M16 12H16.01M18 8H18.01M6 8H6.01M7 16H17M8 12H8.01M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Keyboard.displayName = "Keyboard";

Keyboard.metadata = {
  name: "Keyboard",
  category: "stroke/codingDevelopment",
  tags: ["keyboard", "icon"],
  description: "Keyboard icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Keyboard;
