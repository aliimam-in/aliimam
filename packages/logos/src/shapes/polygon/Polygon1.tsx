import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Polygon1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Polygon1(
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
      <g clipPath="url(#undefined-clip0_2068_491)">
        <path
          d="M23.5819 10.2679C24.1394 11.3397 24.1394 12.6603 23.5819 13.7321L19.1423 22.268C18.5848 23.3397 17.5546 24 16.4397 24H7.56035C6.44543 24 5.41521 23.3397 4.85775 22.2679L0.418094 13.7321C-0.139364 12.6603 -0.139365 11.3397 0.418094 10.2679L4.85775 1.73205C5.41521 0.660254 6.44543 -5.40974e-08 7.56035 0L16.4397 4.30837e-07C17.5546 4.84935e-07 18.5848 0.660254 19.1423 1.73205L23.5819 10.2679Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_491">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Polygon1.displayName = "Polygon1";

Polygon1.metadata = {
  name: "Polygon1",
  category: "shapes/polygon",
  tags: ["polygon", "icon"],
  description: "Polygon1 icon from shapes/polygon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polygon1;
