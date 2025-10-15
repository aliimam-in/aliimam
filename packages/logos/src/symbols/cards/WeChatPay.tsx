import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WeChatPay: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WeChatPay(
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
        d="M16.6597 9.86325L10.6013 13.3643C10.419 13.4693 10.1865 13.3942 10.0995 13.203L9.1215 11.0407C9.05475 10.8937 9.22425 10.7527 9.357 10.8442L10.5893 11.6948C10.7055 11.775 10.8555 11.7893 10.9845 11.7315L16.3005 9.369C15.351 8.23875 13.779 7.5 12 7.5C9.1005 7.5 6.75 9.46275 6.75 11.8837C6.75 13.1978 7.443 14.3767 8.54025 15.1807C8.54025 15.1807 8.7555 15.327 8.70825 15.5438C8.661 15.7605 8.45175 16.4932 8.45175 16.4932C8.45175 16.4932 8.38425 16.6575 8.4885 16.7415C8.59275 16.8255 8.6925 16.758 8.74425 16.7288C8.796 16.6995 9.7365 16.1625 9.9195 16.059C10.0537 15.9833 10.191 16.0035 10.2848 16.0282C10.3058 16.0343 10.326 16.0402 10.347 16.0455C10.3552 16.0477 10.3627 16.05 10.3687 16.0515H10.371C10.884 16.191 11.4315 16.2667 12.0007 16.2667C14.9002 16.2667 17.2507 14.304 17.2507 11.883C17.2507 11.154 17.0378 10.467 16.6605 9.8625L16.6597 9.86325Z"
        fill="#00c800"
      />
    </svg>
  );
});

WeChatPay.displayName = "WeChatPay";

WeChatPay.metadata = {
  name: "WeChatPay",
  category: "symbols/cards",
  tags: ["wechat", "pay", "icon"],
  description: "WeChatPay icon from symbols/cards category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WeChatPay;
