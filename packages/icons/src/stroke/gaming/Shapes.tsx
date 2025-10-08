import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Shapes: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Shapes(
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
          d="M8.3 10C8.171 10.007 8.043 9.978 7.929 9.917 7.816 9.856 7.721 9.764 7.656 9.652 7.592 9.541 7.559 9.413 7.562 9.284 7.565 9.155 7.604 9.029 7.674 8.921L11.4 3C11.459 2.895 11.543 2.806 11.646 2.743 11.749 2.68 11.866 2.645 11.987 2.64 12.107 2.636 12.227 2.663 12.334 2.718 12.441 2.774 12.532 2.856 12.598 2.957L16.3 8.9C16.373 9.005 16.416 9.128 16.424 9.255 16.432 9.382 16.406 9.51 16.347 9.623 16.288 9.736 16.199 9.831 16.09 9.898 15.981 9.964 15.856 10 15.728 10H8.3ZM9 14H4C3.448 14 3 14.448 3 15V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V15C10 14.448 9.552 14 9 14ZM17.5 21C19.433 21 21 19.433 21 17.5 21 15.567 19.433 14 17.5 14 15.567 14 14 15.567 14 17.5 14 19.433 15.567 21 17.5 21Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Shapes.displayName = "Shapes";

Shapes.metadata = {
  name: "Shapes",
  category: "stroke/gaming",
  tags: ["shapes", "icon"],
  description: "Shapes icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Shapes;
