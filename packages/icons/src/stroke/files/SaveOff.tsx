import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SaveOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SaveOff(
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
      <g
        stroke={color}
        clipPath="url(#undefined-clip0_80_10724)"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 13H8C7.735 13 7.48 13.105 7.293 13.293 7.105 13.48 7 13.735 7 14V21M14 8H15M17 21V17M2 2 22 22" />
        <path d="M20.41 20.41C20.037 20.786 19.53 20.998 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3.002 4.47 3.214 3.963 3.59 3.59M9 3H15.2C15.728 3.008 16.231 3.223 16.6 3.6L20.4 7.4C20.777 7.769 20.993 8.272 21 8.8V15" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_80_10724">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

SaveOff.displayName = "SaveOff";

SaveOff.metadata = {
  name: "SaveOff",
  category: "stroke/files",
  tags: ["save", "off", "icon"],
  description: "SaveOff icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SaveOff;
