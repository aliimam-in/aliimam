import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Dices: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Dices(
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
          d="M12 10H4C2.895 10 2 10.895 2 12V20C2 21.105 2.895 22 4 22H12C13.105 22 14 21.105 14 20V12C14 10.895 13.105 10 12 10ZM17.92 14 21.42 10.5C21.791 10.089 21.996 9.554 21.996 9 21.996 8.446 21.791 7.912 21.42 7.5L16.42 2.58C16.009 2.209 15.474 2.004 14.92 2.004 14.366 2.004 13.832 2.209 13.42 2.58L10 6M6 18H6.01M10 14H10.01M15 6H15.01M18 9H18.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Dices.displayName = "Dices";

Dices.metadata = {
  name: "Dices",
  category: "stroke/gaming",
  tags: ["dices", "icon"],
  description: "Dices icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Dices;
