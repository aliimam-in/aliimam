import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Guitar: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Guitar(
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
          d="M11.9 12.1 16.414 7.586M20.1 2.3C19.913 2.117 19.662 2.014 19.4 2.014 19.138 2.014 18.887 2.117 18.7 2.3L17.586 3.414C17.211 3.789 17 4.298 17 4.828V6.172C17 6.702 16.789 7.211 16.414 7.586 16.789 7.211 17.298 7 17.828 7H19.172C19.703 7 20.211 6.789 20.586 6.414L21.7 5.3C21.883 5.113 21.986 4.862 21.986 4.6 21.986 4.338 21.883 4.087 21.7 3.9L20.1 2.3ZM6 16 8 18M8.23 9.85C8.457 9.302 8.842 8.835 9.335 8.505 9.828 8.176 10.407 8 11 8 12.326 8 13.598 8.527 14.536 9.464 15.473 10.402 16 11.674 16 13 16 13.593 15.824 14.172 15.495 14.665 15.166 15.158 14.698 15.543 14.15 15.77L13.23 16.15C12.865 16.302 12.553 16.559 12.335 16.889 12.116 17.218 11.999 17.605 12 18 12 19.061 11.579 20.078 10.828 20.828 10.078 21.579 9.061 22 8 22 6.409 22 4.883 21.368 3.757 20.243 2.632 19.117 2 17.591 2 16 2 14.939 2.421 13.922 3.172 13.172 3.922 12.421 4.939 12 6 12 6.395 12.001 6.782 11.884 7.111 11.666 7.441 11.447 7.698 11.135 7.85 10.77L8.23 9.85Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Guitar.displayName = "Guitar";

Guitar.metadata = {
  name: "Guitar",
  category: "stroke/multimedia",
  tags: ["guitar", "icon"],
  description: "Guitar icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Guitar;
