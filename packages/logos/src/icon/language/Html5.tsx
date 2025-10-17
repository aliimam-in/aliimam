import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Html5: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Html5(
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
        <g clipPath="url(#undefined-clip0_2066_1151)">
          <path
            d="M2.90487 21.2308L1 0H21.9535L20.0487 21.2308L11.4535 23.6308"
            fill="#e34f26"
          />
          <path
            d="M11.5 21.7846L18.4226 19.8923L20.0487 1.70764H11.5"
            fill="#ef652a"
          />
          <path
            d="M11.5 9.60004H8.01548L7.78318 6.92312H11.5V4.3385H4.90265L5.59955 12.2308H11.5V9.60004ZM11.5 16.3847L8.52654 15.6L8.3407 13.5231H5.73893L6.06415 17.6308L11.5 19.1077V16.3847Z"
            fill="#ecedee"
          />
          <path
            d="M11.5 12.2308H14.7058L14.3805 15.6L11.5 16.3847V19.1077L16.8429 17.6308L17.5863 9.60004H11.5V12.2308ZM11.5 4.3385V6.92312H17.8186L18.0509 4.3385H11.5Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_1151">
            <path fill="#fff" transform="translate(1)" d="M0 0H21V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Html5.displayName = "Html5";

Html5.metadata = {
  name: "Html5",
  category: "icon/language",
  tags: ["html", "icon"],
  description: "Html5 icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Html5;
