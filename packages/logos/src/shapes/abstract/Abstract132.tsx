import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract132: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract132(
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
      viewBox="0 0 23 23"
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
        d="M4.25982 11.5009H0.180684C0.180684 5.25176 5.24901 0.184476 11.5 0.184476V4.26169C7.50119 4.26169 4.25982 7.50226 4.25982 11.5009ZM11.5 22.8173V18.7401C15.4988 18.7401 18.7402 15.4977 18.7402 11.5009H22.8193C22.8193 17.7519 17.751 22.8192 11.5 22.8192V22.8173ZM11.5 11.5009V4.26169C15.4988 4.26169 18.7402 7.50226 18.7402 11.5009H11.5ZM4.25982 11.5009H11.5V18.7401C7.50119 18.7401 4.25982 15.4977 4.25982 11.5009ZM11.5 0.365341C5.35852 0.365341 0.363194 5.36137 0.363194 11.5009C0.363194 17.6405 5.35852 22.6365 11.5 22.6365C17.6415 22.6365 22.6368 17.6405 22.6368 11.5009C22.6368 5.36137 17.6415 0.365341 11.5 0.365341ZM11.5 23C5.15775 23 0 17.8414 0 11.5009C0 5.16043 5.15958 0 11.5 0C17.8404 0 23 5.1586 23 11.5009C23 17.8432 17.8404 23 11.5 23Z"
        fill="currentColor"
      />
    </svg>
  );
});

Abstract132.displayName = "Abstract132";

Abstract132.metadata = {
  name: "Abstract132",
  category: "shapes/abstract",
  tags: ["abstract", "132", "icon"],
  description: "Abstract132 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract132;
