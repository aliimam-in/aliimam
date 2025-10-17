import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Blitz: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Blitz(
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
        <g clipPath="url(#undefined-clip0_2066_402)">
          <path
            d="M8.06637 11.9809C8.82964 11.981 9.58245 12.1539 10.2654 12.486C10.9484 12.8182 11.5428 13.3005 12.0017 13.8948L16.0128 19.09C16.05 19.1381 16.0724 19.1955 16.0776 19.2555C16.0828 19.3155 16.0705 19.3757 16.0422 19.4292L13.7301 23.7952C13.6191 24.0048 13.3217 24.0293 13.1761 23.8411L4 11.9809H8.06637ZM10.8239 0.127374L20 11.9876H15.9336C15.1704 11.9876 14.4175 11.8147 13.7346 11.4825C13.0516 11.1504 12.4572 10.6681 11.9983 10.0737L7.98719 4.87852C7.95005 4.8304 7.9276 4.77305 7.9224 4.71306C7.9172 4.65306 7.92948 4.59286 7.95781 4.53935L10.2699 0.173242C10.3808 -0.0362402 10.6782 -0.0608493 10.8239 0.127374Z"
            fill="#6700eb"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_402">
            <path fill="#fff" transform="translate(4)" d="M0 0H16V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Blitz.displayName = "Blitz";

Blitz.metadata = {
  name: "Blitz",
  category: "icon/framework",
  tags: ["blitz", "icon"],
  description: "Blitz icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Blitz;
