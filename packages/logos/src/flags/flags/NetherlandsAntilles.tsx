import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NetherlandsAntilles: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NetherlandsAntilles(
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
        fill="#fff"
      />
      <path d="M20 4H12V28H20V4Z" fill="#dd1216" />
      <path d="M31 20V12L1 12V20H31Z" fill="#022588" />
      <path
        d="M14.675 19.514 14.079 19.034 13.487 19.494 13.722 18.785 13.127 18.306H13.842L14.093 17.597 14.32 18.306H15.043L14.47 18.785 14.675 19.514ZM18.507 19.514 17.912 19.034 17.319 19.494 17.555 18.785 16.959 18.306H17.675L17.925 17.597 18.153 18.306H18.876L18.303 18.785 18.507 19.514ZM14.675 14.403 14.079 13.924 13.487 14.384 13.722 13.675 13.127 13.196H13.842L14.093 12.487 14.32 13.196H15.043L14.47 13.675 14.675 14.403ZM18.354 14.403 17.759 13.924 17.166 14.384 17.402 13.675 16.806 13.196H17.522L17.772 12.487 18 13.196H18.723L18.15 13.675 18.354 14.403ZM11.478 16.958 10.883 16.479 10.291 16.939 10.526 16.23 9.93 15.751H10.646L10.896 15.042 11.124 15.751H11.847L11.274 16.23 11.478 16.958ZM21.701 16.958 21.106 16.479 20.514 16.939 20.749 16.23 20.153 15.751H20.869L21.119 15.042 21.347 15.751H22.07L21.497 16.23 21.701 16.958Z"
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
});

NetherlandsAntilles.displayName = "NetherlandsAntilles";

NetherlandsAntilles.metadata = {
  name: "NetherlandsAntilles",
  category: "flags/flags",
  tags: ["netherlands", "antilles", "icon"],
  description: "NetherlandsAntilles icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NetherlandsAntilles;
