import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GuineaBissau: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GuineaBissau(
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
      <path d="M27 4H12V16H31V8C31 5.7908 29.2092 4 27 4Z" fill="#fdd310" />
      <path
        d="M12 16V28H27C29.2092 28 31 26.2092 31 24V16H12Z"
        fill="#049f48"
      />
      <path
        d="M5 4H13V28H5C2.7923 28 1 26.2077 1 24V8C1 5.7923 2.7923 4 5 4Z"
        fill="#cf0922"
      />
      <path
        d="M9.6449 19.6853L8.7301 16.87L11.125 15.13H8.1648L7.25 12.3147L6.3352 15.13H3.375L5.7699 16.87L4.8551 19.6853L7.25 17.9454L9.6449 19.6853Z"
        fill="currentColor"
      />
    </svg>
  );
});

GuineaBissau.displayName = "GuineaBissau";

GuineaBissau.metadata = {
  name: "GuineaBissau",
  category: "flags/flags",
  tags: ["guinea", "bissau", "icon"],
  description: "GuineaBissau icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GuineaBissau;
