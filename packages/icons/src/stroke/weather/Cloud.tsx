import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cloud: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cloud(
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
          d="M17.5002 19H9.00016C7.70202 18.9997 6.42955 18.6384 5.32494 17.9565C4.22032 17.2746 3.32708 16.2989 2.74503 15.1386C2.16298 13.9783 1.91505 12.679 2.02895 11.3858C2.14285 10.0927 2.61409 8.85671 3.39001 7.81598C4.16593 6.77526 5.21596 5.97079 6.42276 5.49249C7.62957 5.01418 8.9456 4.88087 10.2238 5.10747C11.502 5.33406 12.692 5.91162 13.6609 6.77561C14.6297 7.6396 15.3393 8.75598 15.7102 10H17.5002C18.6936 10 19.8382 10.4741 20.6821 11.318C21.5261 12.1619 22.0002 13.3065 22.0002 14.5C22.0002 15.6935 21.5261 16.8381 20.6821 17.682C19.8382 18.5259 18.6936 19 17.5002 19Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cloud.displayName = "Cloud";

Cloud.metadata = {
  name: "Cloud",
  category: "stroke/weather",
  tags: ["cloud", "icon"],
  description: "Cloud icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cloud;
