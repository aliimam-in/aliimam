import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Frame24: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Frame24(
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
      <g clipPath="url(#undefined-clip0_2062_3090)">
        <path
          d="M14.3916 18.5492C17.6558 18.1823 20.7333 16.4223 22.4277 13.4849C21.6253 20.7505 13.7736 25.3427 7.36453 22.5232C6.77408 22.2642 6.26574 21.8331 5.91697 21.2789C4.4766 18.9905 4.0033 16.0787 4.68342 13.4362C6.6271 16.8303 10.579 18.9109 14.3916 18.5492Z"
          fill="#f3b01c"
        />
        <path
          d="M4.56422 11.3043C3.241 14.3983 3.18386 18.0207 4.8059 21.0018C-0.902772 16.656 -0.84042 7.35598 4.73618 3.05362C5.25188 2.65598 5.86498 2.41998 6.5079 2.38398C9.15164 2.24289 11.8378 3.27671 13.7216 5.20344C9.89429 5.24198 6.16649 7.72289 4.56422 11.3043Z"
          fill="#8d2676"
        />
        <path
          d="M15.5675 6.1554C13.6364 3.43085 10.6139 1.57595 7.30225 1.51958C13.7036 -1.42042 21.5777 3.34631 22.435 10.3936C22.5148 11.0478 22.41 11.7149 22.1234 12.3049C20.9274 14.7627 18.7097 16.6689 16.1183 17.3743C18.017 13.8109 17.7827 9.45722 15.5675 6.1554Z"
          fill="#ee342f"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_3090">
          <path fill="#fff" d="M0 0H23V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Frame24.displayName = "Frame24";

Frame24.metadata = {
  name: "Frame24",
  category: "icon/database",
  tags: ["frame", "24", "icon"],
  description: "Frame24 icon from icon/database category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Frame24;
