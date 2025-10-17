import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Lua: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Lua(
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
        <g clipPath="url(#undefined-clip0_2066_1143)">
          <path
            d="M21.1742 12.0025C21.1742 6.93891 17.0636 2.82825 12 2.82825C6.93643 2.82825 2.82577 6.93891 2.82577 12.0025C2.82577 17.0661 6.93643 21.1767 12 21.1767C17.0636 21.1767 21.1742 17.0661 21.1742 12.0025Z"
            fill="navy"
          />
          <path
            d="M18.4879 8.20103C18.4879 6.71845 17.2841 5.51465 15.8015 5.51465C14.3189 5.51465 13.1151 6.71845 13.1151 8.20103C13.1151 9.6836 14.3189 10.8874 15.8015 10.8874C17.2841 10.8874 18.4879 9.6836 18.4879 8.20103Z"
            fill="#fff"
          />
          <path
            d="M23.8606 2.82578C23.8606 1.34321 22.6568 0.139404 21.1742 0.139404C19.6917 0.139404 18.4879 1.34321 18.4879 2.82578C18.4879 4.30836 19.6917 5.51216 21.1742 5.51216C22.6568 5.51216 23.8606 4.31089 23.8606 2.82578Z"
            fill="navy"
          />
          <path
            d="M6.541 15.911H9.514V16.587H5.773V10.568H6.541V15.911ZM13.064 16.587V15.984C12.659 16.554 12.256 16.777 11.62 16.777 10.779 16.777 10.241 16.316 10.241 15.596V12.261H10.925V15.325C10.925 15.845 11.273 16.177 11.818 16.177 12.535 16.177 12.999 15.599 12.999 14.714V12.261H13.683V16.587H13.064ZM18.713 16.704C18.49 16.762 18.384 16.777 18.242 16.777 17.796 16.777 17.581 16.58 17.532 16.141 17.046 16.587 16.607 16.777 16.063 16.777 15.188 16.777 14.643 16.283 14.643 15.497 14.643 14.935 14.899 14.547 15.404 14.342 15.667 14.235 15.817 14.202 16.79 14.078 17.335 14.012 17.507 13.888 17.507 13.599V13.417C17.507 13.004 17.16 12.773 16.542 12.773 15.898 12.773 15.584 13.011 15.525 13.541H14.831C14.849 13.113 14.93 12.864 15.127 12.641 15.416 12.319 15.936 12.137 16.564 12.137 17.629 12.137 18.191 12.55 18.191 13.318V15.862C18.191 16.078 18.323 16.202 18.564 16.202 18.604 16.202 18.637 16.202 18.713 16.184V16.704ZM17.507 14.448C17.277 14.555 17.127 14.588 16.4 14.686 15.665 14.793 15.358 15.026 15.358 15.48 15.358 15.918 15.672 16.174 16.209 16.174 16.615 16.174 16.952 16.042 17.233 15.786 17.439 15.596 17.507 15.457 17.507 15.224V14.448Z"
            fill="#fff"
          />
          <path
            d="M22.5706 6.61456C23.4196 8.28214 23.8631 10.1271 23.8631 12C23.8631 18.5487 18.5487 23.8631 12 23.8631C5.45132 23.8631 0.136856 18.5487 0.136856 12C0.136856 5.45131 5.45132 0.136841 12 0.136841C14.106 0.136841 16.1715 0.696925 17.9861 1.75627"
            stroke="gray"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeDasharray="40.85 40.85"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1143">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Lua.displayName = "Lua";

Lua.metadata = {
  name: "Lua",
  category: "icon/language",
  tags: ["lua", "icon"],
  description: "Lua icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Lua;
