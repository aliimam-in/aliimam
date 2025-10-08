import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const KeyboardMusic: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function KeyboardMusic(
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
        d="M20 4H4C2.895 4 2 4.895 2 6V18C2 19.105 2.895 20 4 20H20C21.105 20 22 19.105 22 18V6C22 4.895 21.105 4 20 4ZM6 8H10M14 8H14.01M18 8H18.01M2 12H22M6 12V16M10 12V16M14 12V16M18 12V16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

KeyboardMusic.displayName = "KeyboardMusic";

KeyboardMusic.metadata = {
  name: "KeyboardMusic",
  category: "stroke/devices",
  tags: ["keyboard", "music", "icon"],
  description: "KeyboardMusic icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default KeyboardMusic;
