import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Remix: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Remix(
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
        <g clipPath="url(#undefined-clip0_2066_412)">
          <path
            d="M12.6218 0C18.8867 0 22 2.93737 22 7.62941C22 11.1389 19.8092 13.4276 16.8497 13.8091C19.3479 14.3051 20.8084 15.7165 21.0776 18.5013L21.1164 19.0133L21.1505 19.492L21.1799 19.9399L21.2003 20.2776L21.2222 20.676L21.2335 20.9034L21.2497 21.2646L21.2628 21.6057L21.2693 21.8019L21.278 22.116L21.2856 22.4753L21.2883 22.6489L21.2932 23.152L21.2949 23.6769V23.9909H14.8342L14.8346 23.86L14.8369 23.6057L14.8407 23.358L14.8519 22.7581L14.8547 22.5569L14.857 22.2416L14.8566 22.0399L14.8547 21.8284L14.8521 21.6625L14.8469 21.4301L14.8392 21.1836L14.8289 20.9216L14.8158 20.6424L14.8079 20.4959L14.7948 20.267L14.7795 20.0265L14.756 19.6868L14.7357 19.4167C14.73 19.3353 14.7233 19.2539 14.7155 19.1727L14.6989 19.0164C14.4856 17.1718 13.7428 16.4179 12.4707 16.1664L12.3635 16.1466C12.2898 16.1339 12.2158 16.1229 12.1416 16.1136L12.0271 16.1004C12.0077 16.0983 11.9883 16.0963 11.9688 16.0945L11.8505 16.0842L11.7299 16.0759L11.6066 16.0693L11.4824 16.0646L11.3558 16.0615L11.2267 16.06L1 16.0598V11.0626H11.4688C11.6399 11.0626 11.8058 11.0594 11.9664 11.0529L12.1252 11.0453L12.2805 11.0354L12.4323 11.0233C12.4573 11.021 12.4822 11.0187 12.5069 11.0163L12.6533 11.0007C12.7476 10.9898 12.8418 10.977 12.9356 10.9623L13.0716 10.9397C14.7703 10.6363 15.6197 9.74788 15.6197 8.01446C15.6197 6.06901 14.2361 4.88994 11.4687 4.88994H1V0H12.6218ZM7.83123 20.2655C8.67886 20.2655 9.03357 20.7291 9.15989 21.1729L9.17655 21.2368L9.19025 21.3L9.19919 21.3498L9.20296 21.3745L9.20936 21.4233L9.21412 21.4709L9.216 21.4944L9.21855 21.5404L9.21937 21.5628L9.22002 21.6065V23.9909H1V20.2655H7.83123Z"
            fill="#121212"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_412">
            <path fill="#fff" transform="translate(1)" d="M0 0H21V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Remix.displayName = "Remix";

Remix.metadata = {
  name: "Remix",
  category: "icon/framework",
  tags: ["remix", "icon"],
  description: "Remix icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Remix;
