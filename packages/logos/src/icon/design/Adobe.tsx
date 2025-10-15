import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Adobe: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Adobe(
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
        <g fill="#eb1000" clipPath="url(#undefined-clip0_2062_3167)">
          <path d="M15.025 1H23.85V22L15.025 1ZM8.825 1H0V22L8.825 1ZM11.916 8.735 17.544 22H13.864L12.184 17.786H8.075L11.916 8.735Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_3167">
            <path fill="#fff" transform="translate(0 1)" d="M0 0H24V21H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Adobe.displayName = "Adobe";

Adobe.metadata = {
  name: "Adobe",
  category: "icon/design",
  tags: ["adobe", "icon"],
  description: "Adobe icon from icon/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Adobe;
