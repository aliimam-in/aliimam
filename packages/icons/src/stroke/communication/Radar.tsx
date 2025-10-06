import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Radar: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Radar(
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
          d="M19.07 4.93C17.513 3.371 15.485 2.37 13.3 2.083 11.116 1.795 8.897 2.237 6.99 3.34M4 6H4.01M2.29 9.62C1.915 11.147 1.906 12.741 2.262 14.272 2.619 15.804 3.332 17.23 4.343 18.434 5.354 19.638 6.634 20.587 8.081 21.204 9.527 21.82 11.099 22.087 12.668 21.982 14.237 21.877 15.759 21.404 17.111 20.601 18.462 19.797 19.606 18.687 20.447 17.359 21.289 16.031 21.806 14.523 21.956 12.957 22.106 11.392 21.885 9.814 21.31 8.35"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.24 7.76C15.665 7.181 14.977 6.726 14.22 6.422 13.462 6.118 12.65 5.972 11.834 5.992 11.018 6.013 10.215 6.199 9.474 6.541 8.733 6.883 8.069 7.372 7.523 7.979 6.977 8.586 6.561 9.298 6.3 10.071 6.039 10.845 5.939 11.663 6.005 12.477 6.071 13.29 6.303 14.082 6.685 14.803 7.068 15.524 7.593 16.159 8.23 16.67M12 18H12.01M17.99 11.66C18.044 12.611 17.871 13.562 17.485 14.433 17.099 15.304 16.511 16.071 15.77 16.67"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14C13.105 14 14 13.105 14 12 14 10.895 13.105 10 12 10 10.895 10 10 10.895 10 12 10 13.105 10.895 14 12 14ZM13.41 10.59 19.07 4.93"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Radar.displayName = "Radar";

Radar.metadata = {
  name: "Radar",
  category: "stroke/communication",
  tags: ["radar", "icon"],
  description: "Radar icon from stroke/communication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Radar;
