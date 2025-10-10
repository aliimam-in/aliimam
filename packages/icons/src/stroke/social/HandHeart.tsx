import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HandHeart: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HandHeart(
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
      <path
        d="M11 14H13C13.5304 14 14.0391 13.7893 14.4142 13.4142C14.7893 13.0391 15 12.5304 15 12C15 11.4696 14.7893 10.9609 14.4142 10.5858C14.0391 10.2107 13.5304 10 13 10H10C9.4 10 8.9 10.2 8.6 10.6L3 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.45 13.39 19.5 8.696C20.196 8 21 6.85 21 5.75 21 5.193 20.831 4.65 20.516 4.191 20.201 3.732 19.753 3.38 19.234 3.181 18.714 2.982 18.146 2.946 17.605 3.076 17.063 3.207 16.575 3.499 16.203 3.913 16.177 3.941 16.146 3.963 16.111 3.979 16.076 3.994 16.038 4.002 16 4.002 15.962 4.002 15.924 3.994 15.889 3.979 15.854 3.963 15.823 3.941 15.797 3.913 15.425 3.499 14.937 3.207 14.396 3.076 13.854 2.946 13.286 2.982 12.767 3.181 12.247 3.38 11.8 3.732 11.484 4.191 11.169 4.65 11 5.193 11 5.75 11 6.95 11.802 7.998 12.5 8.696L16 11.95M2 15 8 21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 20L8.6 18.6C8.9 18.2 9.4 18 10 18H14C15.1 18 16.1 17.6 16.8 16.8L21.4 12.4C21.7859 12.0354 22.0111 11.5323 22.0261 11.0016C22.0411 10.4709 21.8447 9.95592 21.48 9.57003C21.1153 9.18414 20.6123 8.95892 20.0816 8.94392C19.5508 8.92891 19.0359 9.12535 18.65 9.49003"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HandHeart.displayName = "HandHeart";

HandHeart.metadata = {
  name: "HandHeart",
  category: "stroke/social",
  tags: ["hand", "heart", "icon"],
  description: "HandHeart icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HandHeart;
