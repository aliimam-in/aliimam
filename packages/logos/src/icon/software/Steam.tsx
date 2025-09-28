import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Steam: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Steam(
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
        <g clipPath="url(#undefined-clip0_2039_564)">
          <path
            d="M0.666454 15.3976C2.12639 20.2656 6.64172 23.8153 11.9849 23.8153C18.5103 23.8153 23.8002 18.5254 23.8002 12C23.8002 5.47454 18.5103 0.18457 11.9849 0.18457C5.72344 0.18457 0.599623 5.05583 0.194946 11.215C0.960731 12.4988 1.25796 13.293 0.665715 15.3976H0.666454Z"
            fill="url(#undefined-paint0_linear_2039_564)"
          />
          <path
            d="M11.3759 9.04055L11.377 9.09889L8.48594 13.2989C8.01776 13.2775 7.54809 13.3598 7.10206 13.5433C6.9079 13.6222 6.72252 13.7212 6.54896 13.8387L0.200032 11.222C0.200032 11.222 0.0530782 13.6389 0.665263 15.4401L5.15363 17.2921C5.37517 18.2994 6.06932 19.1826 7.08914 19.6072C7.89146 19.9406 8.79329 19.9419 9.59657 19.6108C10.3998 19.2797 11.0389 18.6434 11.3733 17.8415C11.5518 17.4144 11.6378 16.9544 11.6259 16.4916L15.7587 13.5359L15.8602 13.5378C18.3359 13.5378 20.3482 11.5196 20.3482 9.04055C20.3482 6.56153 18.3396 4.5507 15.8602 4.54553C13.3856 4.54553 11.3722 6.56153 11.3722 9.04055H11.3759ZM10.6818 17.5513C10.1449 18.8436 8.66354 19.4517 7.37603 18.9153C6.80469 18.6751 6.34159 18.2333 6.07486 17.6739L7.53591 18.2794C7.76161 18.3734 8.00361 18.4219 8.24809 18.4223C8.49257 18.4227 8.73472 18.3749 8.96072 18.2817C9.18672 18.1885 9.39214 18.0516 9.56523 17.879C9.73832 17.7063 9.8757 17.5013 9.96951 17.2755C10.1595 16.8193 10.1606 16.3064 9.97263 15.8494C9.78467 15.3924 9.42299 15.0287 8.96705 14.8382L7.4532 14.2124C8.03585 13.9908 8.69825 13.9834 9.31782 14.2408C9.94551 14.5004 10.4255 14.9892 10.6825 15.6143C10.9395 16.2394 10.938 16.9288 10.6788 17.5513M15.8643 12.0369C15.071 12.0347 14.3109 11.7182 13.7504 11.1568C13.19 10.5953 12.8749 9.83459 12.8742 9.04129C12.8751 8.24811 13.1903 7.4876 13.7507 6.92628C14.3111 6.36497 15.0711 6.0486 15.8643 6.04646C16.6576 6.04841 17.4178 6.36469 17.9783 6.92602C18.5389 7.48736 18.8542 8.24798 18.855 9.04129C18.8544 9.83472 18.5392 10.5955 17.9786 11.157C17.418 11.7185 16.6577 12.0349 15.8643 12.0369ZM13.6238 9.03649C13.6233 8.44044 13.8595 7.86858 14.2804 7.44659C14.7014 7.0246 15.2727 6.787 15.8687 6.78602C17.1075 6.78602 18.1151 7.79402 18.1151 9.03649C18.1154 9.63266 17.8789 10.2046 17.4577 10.6264C17.0364 11.0483 16.4649 11.2856 15.8687 11.2862C15.2727 11.2853 14.7015 11.0479 14.2805 10.626C13.8594 10.2042 13.6235 9.63247 13.6238 9.03649Z"
            fill="#fff"
          />
        </g>
        <defs>
          <linearGradient
            id="undefined-paint0_linear_2039_564"
            x1="1180.46"
            y1=".185"
            x2="1180.46"
            y2="2363.26"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#111d2e" />
            <stop offset=".212" stopColor="#051839" />
            <stop offset=".407" stopColor="#0a1b48" />
            <stop offset=".581" stopColor="#132e62" />
            <stop offset=".738" stopColor="#144b7e" />
            <stop offset=".873" stopColor="#136497" />
            <stop offset="1" stopColor="#1387b8" />
          </linearGradient>
          <clipPath id="undefined-clip0_2039_564">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Steam.displayName = "Steam";

Steam.metadata = {
  name: "Steam",
  category: "icon/software",
  tags: ["steam", "icon"],
  description: "Steam icon from icon/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Steam;
