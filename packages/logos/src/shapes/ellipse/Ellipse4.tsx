import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ellipse4: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ellipse4(
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
      <g fill="currentColor" clipPath="url(#undefined-clip0_2068_768)">
        <path d="M18 6C18 9.314 15.314 12 12 12 8.686 12 6 9.314 6 6 6 2.686 8.686 0 12 0 15.314 0 18 2.686 18 6ZM18 18.001C18 21.315 15.314 24.001 12 24.001 8.686 24.001 6 21.315 6 18.001 6 14.687 8.686 12 12 12 15.314 12 18 14.687 18 18.001Z" />
        <path d="M0 24.001C1.591 24.001 3.117 23.369 4.243 22.244 5.368 21.118 6 19.592 6 18.001 6 16.409 5.368 14.883 4.243 13.758 3.117 12.633 1.591 12.001 0 12.001L0 24.001ZM24 24.001C22.409 24.001 20.883 23.369 19.757 22.244 18.632 21.118 18 19.592 18 18.001 18 16.409 18.632 14.883 19.757 13.758 20.883 12.633 22.409 12.001 24 12.001V24.001ZM0 12.001C1.591 12.001 3.117 11.368 4.243 10.243 5.368 9.118 6 7.592 6 6 6 4.409 5.368 2.883 4.243 1.757 3.117.632 1.591 0 0 0V12.001ZM24 12.001C22.409 12.001 20.883 11.368 19.757 10.243 18.632 9.118 18 7.592 18 6 18 4.409 18.632 2.883 19.757 1.757 20.883.632 22.409 0 24 0V12.001Z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_768">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Ellipse4.displayName = "Ellipse4";

Ellipse4.metadata = {
  name: "Ellipse4",
  category: "shapes/ellipse",
  tags: ["ellipse", "icon"],
  description: "Ellipse4 icon from shapes/ellipse category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ellipse4;
