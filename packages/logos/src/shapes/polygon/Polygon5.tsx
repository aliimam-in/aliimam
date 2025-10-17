import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Polygon5: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Polygon5(
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
      <g clipPath="url(#undefined-clip0_2068_492)">
        <path
          d="M10.0797 0.64707C11.225 -0.21569 12.775 -0.21569 13.9203 0.647069L22.6507 7.22356C23.7978 8.08772 24.2779 9.62073 23.8394 11.0198L20.5062 21.6561C20.0682 23.0538 18.8131 24 17.3971 24H6.6029C5.18687 24 3.93179 23.0538 3.49378 21.6561L0.160573 11.0198C-0.277883 9.62073 0.202164 8.08772 1.34934 7.22356L10.0797 0.64707Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2068_492">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Polygon5.displayName = "Polygon5";

Polygon5.metadata = {
  name: "Polygon5",
  category: "shapes/polygon",
  tags: ["polygon", "icon"],
  description: "Polygon5 icon from shapes/polygon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Polygon5;
