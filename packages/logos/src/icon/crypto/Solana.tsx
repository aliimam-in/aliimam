import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Solana: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Solana(
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
        <g clipPath="url(#undefined-clip0_2062_2934)">
          <path
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
            fill="#181e33"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2934">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Solana.displayName = "Solana";

Solana.metadata = {
  name: "Solana",
  category: "icon/crypto",
  tags: ["solana", "icon"],
  description: "Solana icon from icon/crypto category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Solana;
