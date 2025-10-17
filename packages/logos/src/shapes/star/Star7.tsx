import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star7: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star7(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_122)">
          <path d="M17.991 6C14.68 6.01 12 8.693 12 12 12 8.693 9.32 6.01 6.009 6 9.32 5.99 12 3.307 12 0 12 3.307 14.68 5.99 17.991 6ZM11.981 12C8.671 12.01 5.991 14.693 5.991 18 5.991 14.693 3.31 12.01 0 12 3.31 11.99 5.991 9.307 5.991 6 5.991 9.307 8.671 11.99 11.981 12ZM24 12C20.69 12.01 18.01 14.693 18.01 18 18.01 14.693 15.329 12.01 12.019 12 15.329 11.99 18.01 9.307 18.01 6 18.01 9.307 20.69 11.99 24 12ZM17.991 18C14.68 18.01 12 20.693 12 24 12 20.693 9.32 18.01 6.009 18 9.32 17.99 12 15.308 12 12 12 15.308 14.68 17.99 17.991 18Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_122">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Star7.displayName = "Star7";

Star7.metadata = {
  name: "Star7",
  category: "shapes/star",
  tags: ["star", "icon"],
  description: "Star7 icon from shapes/star category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star7;
