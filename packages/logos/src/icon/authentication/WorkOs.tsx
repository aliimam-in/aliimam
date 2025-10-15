import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WorkOs: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function WorkOs(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_2062_2080)">
          <path d="M0 11.5C0 11.9812 0.129964 12.4187 0.34657 12.8125L4.54874 20.1625C4.98195 20.9062 5.63177 21.5187 6.45487 21.7812C8.01444 22.3062 9.70397 21.65 10.5271 20.25L11.5235 18.4563L7.53791 11.4563L11.7834 4.0625L12.7798 2.3125C13.083 1.7875 13.4729 1.35 13.9495 1H7.45126C6.32491 1 5.24188 1.6125 4.6787 2.61875L0.34657 10.1875C0.129964 10.5813 0 11.0188 0 11.5Z" />
          <path d="M24 11.5C24 11.0188 23.87 10.5813 23.6534 10.1875L19.4079 2.75001C18.5848 1.30626 16.8953 0.693763 15.3357 1.21876C14.5126 1.48126 13.8628 2.09376 13.4296 2.83751L12.4332 4.50001L16.4621 11.5L12.2166 18.8938L11.2202 20.6875C10.917 21.2125 10.5271 21.65 10.0505 22H16.5921C17.7184 22 18.8014 21.3875 19.3646 20.3813L23.6967 12.8125C23.87 12.4188 24 11.9813 24 11.5Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2062_2080">
            <path fill="#fff" transform="translate(0 1)" d="M0 0H24V21H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

WorkOs.displayName = "WorkOs";

WorkOs.metadata = {
  name: "WorkOs",
  category: "icon/authentication",
  tags: ["workos", "icon"],
  description: "WorkOs icon from icon/authentication category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WorkOs;
