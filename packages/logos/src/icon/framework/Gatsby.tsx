import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Gatsby: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Gatsby(
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
        <g clipPath="url(#undefined-clip0_2066_414)">
          <path
            d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0ZM2.475 12L12 21.525C6.73125 21.525 2.475 17.2687 2.475 12ZM14.1375 21.2812L2.71875 9.84375C3.69375 5.625 7.48125 2.475 12 2.475C15.1125 2.475 17.8687 3.95625 19.5938 6.2625L18.1875 7.6125C16.8188 5.6625 14.5688 4.40625 12 4.40625C8.7 4.40625 5.90625 6.50625 4.85625 9.43125C6.20625 10.6875 14.1375 18.525 14.6437 19.125C17.025 18.2437 18.825 16.2188 19.4062 13.7062H15.3563V11.9438L21.5438 11.9813C21.525 16.5375 18.375 20.325 14.1375 21.2812Z"
            fill="#64328b"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_414">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Gatsby.displayName = "Gatsby";

Gatsby.metadata = {
  name: "Gatsby",
  category: "icon/framework",
  tags: ["gatsby", "icon"],
  description: "Gatsby icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gatsby;
