import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Beef: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Beef(
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
          d="M16.4 13.7C17.2202 13.0836 17.8828 12.2818 18.3337 11.3602C18.7846 10.4386 19.0109 9.4234 18.9941 8.39756C18.9773 7.37172 18.718 6.36442 18.2372 5.45805C17.7565 4.55168 17.068 3.77198 16.2281 3.18273C15.3882 2.59348 14.4208 2.21142 13.4049 2.06779C12.389 1.92416 11.3536 2.02305 10.3833 2.35637C9.41295 2.68968 8.53531 3.24795 7.82214 3.98552C7.10896 4.72309 6.58052 5.61901 6.28002 6.59999C5.18002 9.72999 5.50002 10.5 3.10002 12.68C2.62178 13.0721 2.27639 13.6023 2.11113 14.1983C1.94586 14.7942 1.96879 15.4266 2.17679 16.009C2.38478 16.5914 2.76767 17.0953 3.27305 17.4517C3.77843 17.8081 4.38161 17.9996 5.00002 18C9.00002 18 13.4 16.2 16.4 13.7Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 6L20.69 10.5C21.1092 11.7889 21.1137 13.1767 20.7029 14.4683C20.2922 15.7598 19.4867 16.8901 18.4 17.7C15.4 20.2 11 22 7.00002 22C6.44327 21.9992 5.89772 21.8436 5.42441 21.5504C4.9511 21.2572 4.56871 20.8381 4.32002 20.34L2.40002 16.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 11C13.8807 11 15 9.88071 15 8.5C15 7.11929 13.8807 6 12.5 6C11.1193 6 10 7.11929 10 8.5C10 9.88071 11.1193 11 12.5 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Beef.displayName = "Beef";

Beef.metadata = {
  name: "Beef",
  category: "stroke/foodBeverage",
  tags: ["beef", "icon"],
  description: "Beef icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Beef;
