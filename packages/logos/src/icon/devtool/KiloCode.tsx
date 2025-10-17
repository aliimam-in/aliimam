import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const KiloCode: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function KiloCode(
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
      <g fill="currentColor" clipPath="url(#undefined-clip0_2066_387)">
        <path d="M17.25 19.5V18H19.5V14.25L18 12.75H15V14.25H12.75V18L14.25 19.5H17.25ZM15 15H17.25V17.25H15V15ZM11.25 12.75H9V15H11.25V12.75ZM19.5 9H17.25V6.75L15 4.5H12.75V6.75H15V9H12.75V11.25H19.5V9Z" />
        <path d="M0 0V24H24V0H0ZM21.75 21.75H2.25V2.25H21.75V21.75Z" />
        <path d="M11.25 19.5V17.25H6.75V12.75H4.5V17.391L6.609 19.5H11.25ZM11.25 4.5H9V6.75H11.25V4.5Z" />
        <path d="M6.75 9H9V11.25H11.25V9L9 6.75H6.75V4.5H4.5V11.25H6.75V9Z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_387">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

KiloCode.displayName = "KiloCode";

KiloCode.metadata = {
  name: "KiloCode",
  category: "icon/devtool",
  tags: ["kilo", "code", "icon"],
  description: "KiloCode icon from icon/devtool category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default KiloCode;
