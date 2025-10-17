import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const T3Stack: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function T3Stack(
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
      <g fill="currentColor" clipPath="url(#undefined-clip0_2066_420)">
        <path
          d="M15.4173 4.39368L17.5766 2.0929H0.043457V4.39368H15.4173Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path d="M15.254 11.197 23.63 2.352 20.577 2.352 13.546 9.711 15.254 11.197ZM21.736 14.548C21.736 16.806 19.952 18.637 17.751 18.637 15.973 18.637 14.466 17.442 13.953 15.791L13.64 14.78 11.845 16.622 12.009 17.022C12.95 19.322 15.166 20.938 17.751 20.938 21.19 20.938 23.978 18.077 23.978 14.548 23.978 12.21 22.735 10.186 20.926 9.074L20.502 8.813 18.858 10.522 19.608 10.928C20.875 11.614 21.736 12.978 21.736 14.548Z" />
        <path
          d="M8.2104 20.3955L8.21041 6.35815H5.96875V20.3955H8.2104Z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_420">
          <path fill="#fff" transform="translate(0 2)" d="M0 0H24V19H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

T3Stack.displayName = "T3Stack";

T3Stack.metadata = {
  name: "T3Stack",
  category: "icon/framework",
  tags: ["stack", "icon"],
  description: "T3Stack icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default T3Stack;
