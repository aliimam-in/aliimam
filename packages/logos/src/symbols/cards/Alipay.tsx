import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Alipay: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Alipay(
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
          d="M20.25 5.25H3.75C2.50736 5.25 1.5 6.25736 1.5 7.5V16.5C1.5 17.7426 2.50736 18.75 3.75 18.75H20.25C21.4926 18.75 22.5 17.7426 22.5 16.5V7.5C22.5 6.25736 21.4926 5.25 20.25 5.25Z"
          fill="#fff"
        />
        <path
          d="M15.033 7.5H8.96775C8.178 7.5 7.53825 8.145 7.53825 8.9415V15.0577C7.53825 15.8535 8.178 16.4993 8.96775 16.4993H15.033C15.8228 16.4993 16.4618 15.8535 16.4618 15.0577V8.9415C16.4618 8.145 15.8228 7.5 15.033 7.5Z"
          fill="#1677ff"
        />
        <path
          d="M14.8853 13.1514C14.5283 13.0306 14.049 12.8461 13.515 12.6519C13.8353 12.0901 14.0918 11.4504 14.2598 10.7544H12.501V10.1154H14.6558V9.75836H12.501V8.69336H11.6213C11.4668 8.69336 11.4667 8.84711 11.4667 8.84711V9.75836H9.28725V10.1154H11.4667V10.7544H9.6675V11.1106H13.1572C13.0297 11.5546 12.858 11.9709 12.6547 12.3496C11.5222 11.9731 10.314 11.6671 9.555 11.8554C9.06975 11.9761 8.757 12.1914 8.57325 12.4171C7.73025 13.4514 8.33475 15.0226 10.1153 15.0226C11.1683 15.0226 12.1823 14.4309 12.9683 13.4551C14.1405 14.0236 16.4618 14.9994 16.4618 14.9994V13.6089C16.4618 13.6089 16.17 13.5856 14.8853 13.1514ZM9.9495 14.4211C8.56125 14.4211 8.151 13.3186 8.8365 12.7149C9.06525 12.5109 9.48375 12.4111 9.70725 12.3894C10.5323 12.3069 11.295 12.6241 12.1965 13.0681C11.5635 13.9014 10.7565 14.4211 9.9495 14.4211Z"
          fill="#fff"
        />
      </svg>
    );
  },
);

Alipay.displayName = "Alipay";

Alipay.metadata = {
  name: "Alipay",
  category: "symbols/cards",
  tags: ["alipay", "icon"],
  description: "Alipay icon from symbols/cards category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Alipay;
