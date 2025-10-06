import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Star: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Star(
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
          d="M11.525 2.295C11.5688 2.20646 11.6365 2.13193 11.7205 2.07983C11.8044 2.02772 11.9012 2.00011 12 2.00011C12.0988 2.00011 12.1956 2.02772 12.2795 2.07983C12.3635 2.13193 12.4312 2.20646 12.475 2.295L14.785 6.974C14.9372 7.28197 15.1618 7.54841 15.4396 7.75045C15.7174 7.9525 16.0401 8.08411 16.38 8.134L21.546 8.89C21.6439 8.90418 21.7358 8.94547 21.8115 9.0092C21.8871 9.07293 21.9434 9.15655 21.974 9.25061C22.0046 9.34467 22.0083 9.44541 21.9846 9.54144C21.9609 9.63747 21.9108 9.72495 21.84 9.794L18.104 13.432C17.8576 13.6721 17.6733 13.9685 17.5668 14.2956C17.4604 14.6228 17.4351 14.9709 17.493 15.31L18.375 20.45C18.3923 20.5478 18.3817 20.6486 18.3445 20.7407C18.3073 20.8328 18.2449 20.9126 18.1645 20.971C18.0842 21.0294 17.989 21.064 17.8899 21.0709C17.7908 21.0778 17.6917 21.0567 17.604 21.01L12.986 18.582C12.6817 18.4222 12.3432 18.3388 11.9995 18.3388C11.6558 18.3388 11.3173 18.4222 11.013 18.582L6.396 21.01C6.30833 21.0564 6.2094 21.0773 6.11045 21.0703C6.0115 21.0632 5.91652 21.0286 5.83629 20.9702C5.75607 20.9119 5.69383 20.8322 5.65666 20.7402C5.61948 20.6483 5.60886 20.5477 5.626 20.45L6.507 15.311C6.5652 14.9717 6.53998 14.6234 6.43354 14.296C6.32709 13.9687 6.14261 13.6722 5.896 13.432L2.16 9.795C2.08859 9.72603 2.03799 9.6384 2.01396 9.54207C1.98993 9.44575 1.99344 9.34462 2.02408 9.25019C2.05472 9.15576 2.11127 9.07184 2.18728 9.00798C2.26329 8.94413 2.3557 8.9029 2.454 8.889L7.619 8.134C7.95926 8.0845 8.28239 7.95306 8.56058 7.75099C8.83878 7.54892 9.0637 7.28227 9.216 6.974L11.525 2.295Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Star.displayName = "Star";

Star.metadata = {
  name: "Star",
  category: "stroke/accountsAccess",
  tags: ["star", "icon"],
  description: "Star icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Star;
