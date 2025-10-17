import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const KiboUi: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function KiboUi(
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
        <g clipPath="url(#undefined-clip0_2066_932)">
          <path
            d="M6.1206 0H23.9668V6V18L18.018 24V6H0.171875L6.1206 0ZM0.171875 19.808V12H7.91317L0.171875 19.808ZM12.0693 24H4.4285L12.0693 16.2934V24Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_932">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

KiboUi.displayName = "KiboUi";

KiboUi.metadata = {
  name: "KiboUi",
  category: "icon/library",
  tags: ["kibo", "ui", "icon"],
  description: "KiboUi icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default KiboUi;
