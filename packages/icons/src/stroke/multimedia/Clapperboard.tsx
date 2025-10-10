import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Clapperboard: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Clapperboard(
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
        d="M20.2 6 3 11 2.1 8.6C1.8 7.5 2.4 6.4 3.4 6.1L16.9 2.1C18 1.8 19.1 2.4 19.4 3.4L20.2 6ZM6.2 5.3 9.3 9.2M12.4 3.4 15.5 7.4M3 11H21V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V11Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Clapperboard.displayName = "Clapperboard";

Clapperboard.metadata = {
  name: "Clapperboard",
  category: "stroke/multimedia",
  tags: ["clapperboard", "icon"],
  description: "Clapperboard icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Clapperboard;
