import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MapPinned: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MapPinned(
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
        d="M18 8C18 11.613 14.131 15.429 12.607 16.795C12.4327 16.9282 12.2194 17.0003 12 17.0003C11.7806 17.0003 11.5673 16.9282 11.393 16.795C9.87 15.429 6 11.613 6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10C13.105 10 14 9.105 14 8 14 6.895 13.105 6 12 6 10.895 6 10 6.895 10 8 10 9.105 10.895 10 12 10ZM8.714 14H5.004C4.794 14 4.59 14.066 4.42 14.189 4.25 14.311 4.122 14.484 4.056 14.683L2.052 20.683C2.002 20.833 1.988 20.993 2.012 21.15 2.036 21.307 2.096 21.456 2.189 21.584 2.281 21.713 2.403 21.818 2.544 21.89 2.685 21.962 2.842 22 3 22H21C21.158 22 21.314 21.962 21.455 21.89 21.596 21.818 21.718 21.713 21.811 21.585 21.903 21.456 21.964 21.307 21.988 21.151 22.012 20.994 21.998 20.834 21.948 20.684L19.948 14.684C19.882 14.485 19.754 14.312 19.584 14.189 19.414 14.066 19.209 14 18.999 14H15.287"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MapPinned.displayName = "MapPinned";

MapPinned.metadata = {
  name: "MapPinned",
  category: "stroke/accountsAccess",
  tags: ["map", "pinned", "icon"],
  description: "MapPinned icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MapPinned;
