import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract76: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract76(
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
        d="M15.5269 22.1224C11.7319 22.8491 11.5 21.1675 11.5 15.2303C11.5 21.1693 11.2682 22.8491 7.47315 22.1224C4.43864 20.9725 2.02734 18.5604 0.877335 15.5265C0.150238 11.7309 1.83073 11.5009 7.76992 11.5009C1.83073 11.5009 0.150238 11.2709 0.877335 7.47532C2.02734 4.44141 4.43864 2.0312 7.47315 0.879455C11.2682 0.152713 11.5 1.83433 11.5 7.77154C11.5 1.83249 11.7319 0.152713 15.5269 0.879455C18.5614 2.02936 20.9727 4.44141 22.1227 7.47532C22.8498 11.2709 21.1693 11.5009 15.2301 11.5009C21.1693 11.5009 22.8498 11.7327 22.1227 15.5265C20.9727 18.5604 18.5595 20.9725 15.5269 22.1224ZM11.5 0C5.14903 0 0 5.14975 0 11.4991C0 17.8484 5.14903 23 11.5 23C17.851 23 23 17.8503 23 11.4991C23 5.14791 17.851 0 11.5 0Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract76.displayName = "Abstract76";

Abstract76.metadata = {
  name: "Abstract76",
  category: "shapes/abstract",
  tags: ["abstract", "76", "icon"],
  description: "Abstract76 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract76;
