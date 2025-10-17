import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HeroUi: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function HeroUi(
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
        <g clipPath="url(#undefined-clip0_2066_938)">
          <path
            d="M17.627 0.0269775H6.34573C2.84108 0.0269775 0 2.86806 0 6.37271V17.6537C0 21.1587 2.84108 24.0001 6.34573 24.0001H17.627C21.1317 24.0001 23.9728 21.159 23.9728 17.6543V6.37238C23.9728 2.86806 21.1317 0.0269775 17.627 0.0269775Z"
            fill="#111"
          />
          <path
            d="M16.4231 17.0485V6.87606H17.6805V17.0485H16.4231ZM10.2911 17.2606C9.50462 17.2606 8.80992 17.0981 8.20732 16.7731C7.61641 16.4596 7.12468 15.9874 6.78743 15.4097C6.44819 14.821 6.27856 14.1312 6.27856 13.3398V6.88319L7.55024 6.87606V13.2341C7.55024 13.7141 7.63035 14.1335 7.79024 14.4915C7.95532 14.8447 8.17197 15.1389 8.44051 15.3743C8.69939 15.6042 8.99875 15.7839 9.32332 15.9043C9.63408 16.0149 9.96127 16.0722 10.2911 16.0739C10.6239 16.0724 10.9539 16.0126 11.266 15.8971C11.5905 15.7797 11.8901 15.6023 12.1492 15.3743C12.4174 15.1389 12.6318 14.8424 12.792 14.4844C12.9519 14.1263 13.032 13.7096 13.032 13.2341V6.87573H14.3036V13.3395C14.3036 14.126 14.1318 14.8136 13.788 15.4022C13.4564 15.9837 12.9665 16.459 12.3752 16.7728C11.7723 17.0978 11.0779 17.2606 10.2911 17.2606Z"
            fill="#fff"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_938">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

HeroUi.displayName = "HeroUi";

HeroUi.metadata = {
  name: "HeroUi",
  category: "icon/library",
  tags: ["hero", "ui", "icon"],
  description: "HeroUi icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HeroUi;
