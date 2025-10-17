import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Zig: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Zig(
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
        <g clipPath="url(#undefined-clip0_2066_1156)">
          <path
            d="M12.6716 9.43028H6.87016V6.86558H15.2674L20.9914 5L11.3819 14.5723H17.2015V17.1413H8.80384L3.07984 18.9434L12.6716 9.43028ZM0 14.5684V6.86558H5.73968V9.43466H2.58288V14.5727H6.4584L3.87472 17.1417H0V14.5684ZM21.4167 9.43028H17.5407L20.1244 6.86136H24V17.137H18.2603V14.568H21.4206L21.4167 9.43028Z"
            fill="#f7a41d"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1156">
            <path fill="#fff" transform="translate(0 5)" d="M0 0H24V14H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Zig.displayName = "Zig";

Zig.metadata = {
  name: "Zig",
  category: "icon/language",
  tags: ["zig", "icon"],
  description: "Zig icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Zig;
