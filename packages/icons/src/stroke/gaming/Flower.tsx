import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flower: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Flower(
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
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16.5C12 17.39 11.736 18.26 11.242 19 10.747 19.74 10.044 20.317 9.222 20.658 8.4 20.998 7.495 21.087 6.622 20.914 5.749 20.74 4.947 20.311 4.318 19.682 3.689 19.053 3.26 18.251 3.086 17.378 2.913 16.505 3.002 15.6 3.343 14.778 3.683 13.956 4.26 13.253 5 12.758 5.74 12.264 6.61 12 7.5 12 6.61 12 5.74 11.736 5 11.242 4.26 10.747 3.683 10.044 3.343 9.222 3.002 8.4 2.913 7.495 3.086 6.622 3.26 5.749 3.689 4.947 4.318 4.318 4.947 3.689 5.749 3.26 6.622 3.086 7.495 2.913 8.4 3.002 9.222 3.343 10.044 3.683 10.747 4.26 11.242 5 11.736 5.74 12 6.61 12 7.5 12 6.61 12.264 5.74 12.758 5 13.253 4.26 13.956 3.683 14.778 3.343 15.6 3.002 16.505 2.913 17.378 3.086 18.251 3.26 19.053 3.689 19.682 4.318 20.311 4.947 20.74 5.749 20.914 6.622 21.087 7.495 20.998 8.4 20.658 9.222 20.317 10.044 19.74 10.747 19 11.242 18.26 11.736 17.39 12 16.5 12 17.39 12 18.26 12.264 19 12.758 19.74 13.253 20.317 13.956 20.658 14.778 20.998 15.6 21.087 16.505 20.914 17.378 20.74 18.251 20.311 19.053 19.682 19.682 19.053 20.311 18.251 20.74 17.378 20.914 16.505 21.087 15.6 20.998 14.778 20.658 13.956 20.317 13.253 19.74 12.758 19 12.264 18.26 12 17.39 12 16.5ZM12 7.5V9M7.5 12H9M16.5 12H15M12 16.5V15M8 8 9.88 9.88M14.12 9.88 16 8M8 16 9.88 14.12M14.12 14.12 16 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Flower.displayName = "Flower";

Flower.metadata = {
  name: "Flower",
  category: "stroke/gaming",
  tags: ["flower", "icon"],
  description: "Flower icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flower;
