import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Haze: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Haze(
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
          d="M5.2 6.2 6.6 7.6M2 13H4M20 13H22M17.4 7.6 18.8 6.2M22 17H2M22 21H2M16 13C16 11.939 15.579 10.922 14.828 10.172 14.078 9.421 13.061 9 12 9 10.939 9 9.922 9.421 9.172 10.172 8.421 10.922 8 11.939 8 13M12 5V2.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Haze.displayName = "Haze";

Haze.metadata = {
  name: "Haze",
  category: "stroke/weather",
  tags: ["haze", "icon"],
  description: "Haze icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Haze;
