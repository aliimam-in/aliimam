import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract23: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract23(
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
        d="M0.490331 12.653C5.69766 14.1893 9.80137 18.2958 11.3415 23.5103C11.534 24.1632 12.466 24.1632 12.6585 23.5103C14.1986 18.2958 18.3043 14.1893 23.5097 12.653C24.1634 12.4588 24.1634 11.5412 23.5097 11.347C18.3023 9.81065 14.1967 5.7042 12.6585 0.489747C12.466 -0.163249 11.534 -0.163249 11.3415 0.489747C9.80137 5.7042 5.69575 9.81065 0.490331 11.347C-0.163444 11.5412 -0.163444 12.4588 0.490331 12.653Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract23.displayName = "Abstract23";

Abstract23.metadata = {
  name: "Abstract23",
  category: "shapes/abstract",
  tags: ["abstract", "23", "icon"],
  description: "Abstract23 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract23;
