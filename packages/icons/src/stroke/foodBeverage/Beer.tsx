import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Beer: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Beer(
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
          d="M17 11H18C18.796 11 19.559 11.316 20.121 11.879 20.684 12.441 21 13.204 21 14 21 14.796 20.684 15.559 20.121 16.121 19.559 16.684 18.796 17 18 17H17M9 12V18M13 12V18M14 7.5C13 7.5 12.56 8 11 8 9.44 8 9 7.5 8 7.5 7 7.5 6.28 8 5.5 8 4.837 8 4.201 7.737 3.732 7.268 3.263 6.799 3 6.163 3 5.5 3 4.837 3.263 4.201 3.732 3.732 4.201 3.263 4.837 3 5.5 3 6.28 3 7.07 3.5 8 3.5 8.93 3.5 9.44 2 11 2 12.56 2 13 3.5 14 3.5 15 3.5 15.72 3 16.5 3 17.163 3 17.799 3.263 18.268 3.732 18.737 4.201 19 4.837 19 5.5 19 6.163 18.737 6.799 18.268 7.268 17.799 7.737 17.163 8 16.5 8 15.72 8 15 7.5 14 7.5Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 8V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Beer.displayName = "Beer";

Beer.metadata = {
  name: "Beer",
  category: "stroke/foodBeverage",
  tags: ["beer", "icon"],
  description: "Beer icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Beer;
