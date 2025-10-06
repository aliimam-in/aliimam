import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Telescope: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Telescope(
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
        d="M10.065 12.493 3.885 13.811C3.645 13.863 3.394 13.819 3.187 13.687 2.98 13.556 2.832 13.348 2.777 13.109L2.24 10.959C2.177 10.7 2.213 10.427 2.34 10.193 2.468 9.959 2.679 9.781 2.931 9.694L16.435 5.254M13.56 11.747 17.892 10.823M16 21 12.895 14.79"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.485 5.94C16.356 5.425 16.438 4.881 16.71 4.426 16.983 3.971 17.426 3.644 17.94 3.515L19.03 3.243C19.287 3.179 19.559 3.219 19.786 3.356 20.014 3.492 20.178 3.713 20.242 3.97L21.757 10.03C21.821 10.287 21.781 10.56 21.645 10.787 21.508 11.015 21.287 11.179 21.03 11.243L19.94 11.515C19.425 11.644 18.881 11.563 18.426 11.29 17.971 11.017 17.644 10.575 17.515 10.06L16.485 5.94ZM6.158 8.633 7.272 13.089M8 21 11.105 14.79M12 15C13.105 15 14 14.105 14 13 14 11.895 13.105 11 12 11 10.895 11 10 11.895 10 13 10 14.105 10.895 15 12 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Telescope.displayName = "Telescope";

Telescope.metadata = {
  name: "Telescope",
  category: "stroke/codingDevelopment",
  tags: ["telescope", "icon"],
  description: "Telescope icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Telescope;
