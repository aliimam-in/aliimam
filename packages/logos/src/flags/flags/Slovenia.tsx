import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Slovenia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Slovenia(
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
      <path d="M1 11H31V21H1V11Z" fill="#0600f5" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
        fill="#fff"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#ea3323"
      />
      <path
        d="M6.61195 8.56909C8.63095 7.68009 10.93 7.68009 12.949 8.56909C13.28 13.2491 12.224 15.9021 9.78095 16.5271C7.33795 15.9021 6.28095 13.2491 6.61195 8.56909Z"
        fill="#0600f5"
      />
      <path
        d="M9.78102 10.646L10.548 12.18L11.059 11.498L12.337 13.203C12.337 13.282 12.326 13.361 12.304 13.437C11.948 14.682 11.005 15.674 9.78002 16.093C8.55502 15.674 7.61202 14.682 7.25602 13.437C7.23402 13.361 7.22302 13.282 7.22302 13.203L8.50102 11.498L9.01202 12.18L9.77902 10.646H9.78102Z"
        fill="#fff"
      />
      <path
        d="M6.37195 8.68009C6.45195 8.64209 6.53195 8.60509 6.61295 8.56909L6.86595 12.6131C6.97395 14.3411 8.13195 15.8261 9.78095 16.3531C11.4309 15.8261 12.5879 14.3411 12.6959 12.6131L12.9489 8.56909C13.0299 8.60509 13.1099 8.64209 13.1899 8.68009L12.9429 12.6291C12.8269 14.4881 11.5649 16.0771 9.78095 16.6131C7.99695 16.0781 6.73495 14.4881 6.61895 12.6291L6.37195 8.68009Z"
        fill="#ea3323"
      />
    </svg>
  );
});

Slovenia.displayName = "Slovenia";

Slovenia.metadata = {
  name: "Slovenia",
  category: "flags/flags",
  tags: ["slovenia", "icon"],
  description: "Slovenia icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Slovenia;
