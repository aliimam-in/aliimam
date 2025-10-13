import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Brazil: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Brazil(
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
        viewBox="0 0 32 32"
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
        <path
          d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
          fill="#459a45"
        />
        <path d="M3.47205 16L16 24L28.528 16L16 8L3.47205 16Z" fill="#fedf00" />
        <path
          d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z"
          fill="#0a2172"
        />
        <path
          d="M14 14.5C13.003 14.5 12.042 14.649 11.127 14.909C11.049 15.259 11.001 15.619 11 15.992C11.944 15.677 12.951 15.499 13.999 15.499C16.523 15.499 18.815 16.495 20.518 18.107C20.67 17.781 20.794 17.441 20.874 17.081C19.03 15.477 16.629 14.498 13.999 14.498L14 14.5Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Brazil.displayName = "Brazil";

Brazil.metadata = {
  name: "Brazil",
  category: "flags/flags",
  tags: ["brazil", "icon"],
  description: "Brazil icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Brazil;
