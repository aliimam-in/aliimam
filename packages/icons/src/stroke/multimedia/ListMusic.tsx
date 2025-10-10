import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ListMusic: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ListMusic(
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
        d="M16 5H3M11 12H3M11 19H3M21 16V5M18 19C19.657 19 21 17.657 21 16 21 14.343 19.657 13 18 13 16.343 13 15 14.343 15 16 15 17.657 16.343 19 18 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ListMusic.displayName = "ListMusic";

ListMusic.metadata = {
  name: "ListMusic",
  category: "stroke/multimedia",
  tags: ["list", "music", "icon"],
  description: "ListMusic icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListMusic;
