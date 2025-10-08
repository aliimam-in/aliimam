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
          d="M8.5 8.49997C8.116 9.54997 7.417 10.528 6.156 11C4.225 11.722 2.58 10.703 2.5 9.99997C2.387 9.00597 3.677 3.46997 6.5 2.99997C8.423 2.67897 10.151 3.84497 10.151 5.23497C11.4158 4.91375 12.7425 4.92822 14 5.27697C14 3.88697 15.844 2.67897 17.767 2.99997C20.59 3.46997 21.88 9.00597 21.767 9.99997C21.687 10.703 20.042 11.722 18.111 11C16.85 10.528 16.256 9.54997 15.872 8.49997"
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
