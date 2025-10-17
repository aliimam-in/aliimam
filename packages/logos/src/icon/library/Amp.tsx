import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Amp: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Amp(
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
        <g clipPath="url(#undefined-clip0_2066_909)">
          <path
            d="M12 0C18.628 0 24 5.373 24 12C24 18.627 18.628 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0ZM11.08 19.278L16.114 10.901C16.1749 10.8248 16.209 10.7306 16.211 10.633C16.211 10.5123 16.1631 10.3966 16.0777 10.3113C15.9924 10.2259 15.8767 10.178 15.756 10.178L12.905 10.182L13.829 4.714L12.902 4.711L7.884 13.078C7.884 13.078 7.784 13.261 7.784 13.369C7.784 13.62 7.988 13.824 8.239 13.824L11.07 13.82L10.169 19.278H11.08Z"
            fill="#005af0"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_909">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Amp.displayName = "Amp";

Amp.metadata = {
  name: "Amp",
  category: "icon/library",
  tags: ["amp", "icon"],
  description: "Amp icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Amp;
