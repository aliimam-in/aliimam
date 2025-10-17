import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon7: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon7(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2068_392)">
          <path d="M22.101 12C22.468 12.903 22.632 13.906 22.57 14.946 22.456 16.853 21.588 18.728 20.158 20.158 18.728 21.588 16.853 22.456 14.946 22.57 13.906 22.632 12.903 22.468 12 22.101L22.101 12ZM12 1.899C11.097 1.532 10.094 1.368 9.054 1.43 7.147 1.544 5.272 2.412 3.842 3.842 2.412 5.272 1.544 7.147 1.43 9.054 1.368 10.094 1.532 11.097 1.899 12L12 1.899ZM7.338.346C6.708.086 6.009-.032 5.286.007 3.958.08 2.656.676 1.666 1.666.676 2.656.08 3.958.007 5.286-.032 6.009.086 6.708.346 7.338L7.338.346ZM16.662 23.655C17.292 23.914 17.991 24.032 18.714 23.993 20.042 23.92 21.344 23.324 22.334 22.334 23.324 21.344 23.92 20.042 23.993 18.714 24.032 17.991 23.914 17.292 23.655 16.662L16.662 23.655ZM23.655 7.338C23.914 6.708 24.032 6.009 23.993 5.286 23.92 3.958 23.324 2.656 22.334 1.666 21.344.676 20.042.08 18.714.007 17.991-.032 17.292.086 16.662.346L23.655 7.338ZM.346 16.662C.086 17.292-.032 17.991.007 18.714.08 20.042.676 21.344 1.666 22.334 2.656 23.324 3.958 23.92 5.286 23.993 6.009 24.032 6.708 23.914 7.338 23.655L.346 16.662ZM12 22.101C11.097 22.468 10.094 22.632 9.054 22.57 7.147 22.456 5.272 21.588 3.842 20.158 2.412 18.728 1.544 16.853 1.43 14.946 1.368 13.906 1.532 12.903 1.899 12L12 22.101ZM22.101 12C22.468 11.097 22.632 10.094 22.57 9.054 22.456 7.147 21.588 5.272 20.158 3.842 18.728 2.412 16.853 1.544 14.946 1.43 13.906 1.368 12.903 1.532 12 1.899L22.101 12Z" />
          <path d="M17.0503 6.94971C19.8395 9.73891 19.8395 14.2611 17.0503 17.0503C14.2611 19.8395 9.73892 19.8395 6.94972 17.0503C4.16053 14.2611 4.16053 9.73891 6.94972 6.94971C9.73892 4.16052 14.2611 4.16052 17.0503 6.94971Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2068_392">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Moon7.displayName = "Moon7";

Moon7.metadata = {
  name: "Moon7",
  category: "shapes/moon",
  tags: ["moon", "icon"],
  description: "Moon7 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon7;
