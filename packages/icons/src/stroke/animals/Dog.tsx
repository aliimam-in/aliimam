import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Dog: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Dog(
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
          d="M11.25 16.25H12.75L12 17 11.25 16.25ZM16 14V14.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.42 11.247C4.14 12.328 3.999 13.44 4 14.556 4 18.728 7.582 21 12 21 16.418 21 20 18.728 20 14.556 19.995 13.435 19.829 12.321 19.507 11.247M8 14V14.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.49998 8.5C8.11598 9.55 7.41698 10.528 6.15598 11C4.22498 11.722 2.57998 10.703 2.49998 10C2.38698 9.006 3.67698 3.47 6.49998 3C8.42298 2.679 10.151 3.845 10.151 5.235C11.4158 4.91378 12.7425 4.92826 14 5.277C14 3.887 15.844 2.679 17.767 3C20.59 3.47 21.88 9.006 21.767 10C21.687 10.703 20.042 11.722 18.111 11C16.85 10.528 16.256 9.55 15.872 8.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Dog.displayName = "Dog";

Dog.metadata = {
  name: "Dog",
  category: "stroke/animals",
  tags: ["dog", "icon"],
  description: "Dog icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dog;
