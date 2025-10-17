import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mantine: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Mantine(
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
      <g clipPath="url(#undefined-clip0_2066_929)">
        <path
          d="M23.8766 12C23.8766 5.37261 18.5317 0 11.9385 0C5.34493 0 0 5.37261 0 12C0 18.6272 5.34493 24 11.9383 24C18.5317 24 23.8766 18.6272 23.8766 12Z"
          fill="#339af0"
        />
        <path
          d="M9.71531 6.33849C9.60832 6.48386 9.54657 6.65755 9.53777 6.83783C9.52897 7.01811 9.57352 7.19699 9.66584 7.35208C9.7271 7.45462 9.80807 7.54399 9.90408 7.61505C11.2946 8.65103 12.0929 10.235 12.0929 11.9616C12.0929 13.6881 11.2946 15.2721 9.90408 16.3081C9.80819 16.3792 9.72733 16.4685 9.66614 16.571C9.54197 16.7788 9.50523 17.0272 9.56395 17.262C9.59285 17.3782 9.64428 17.4875 9.71531 17.5839C9.82195 17.7288 9.96932 17.8387 10.1386 17.8995C10.308 17.9603 10.4916 17.9693 10.666 17.9253C10.7819 17.8962 10.8908 17.8444 10.9866 17.7729C11.4149 17.4537 11.8072 17.0889 12.1567 16.6848H14.7323C15.2338 16.6848 15.6414 16.2767 15.6414 15.7728C15.6414 15.269 15.2347 14.8608 14.7323 14.8608H13.3108C13.7081 13.9461 13.9122 12.9591 13.9102 11.9617C13.9123 10.9643 13.7083 9.97714 13.3109 9.06227H14.7332C15.2347 9.06227 15.6421 8.65427 15.6421 8.15027C15.6421 7.64642 15.2355 7.23842 14.7332 7.23842H12.1582C11.8085 6.83403 11.4159 6.46884 10.9873 6.14929C10.8917 6.07798 10.7829 6.02628 10.6672 5.99715C10.5515 5.96801 10.4313 5.96202 10.3133 5.97952C10.0745 6.01538 9.85982 6.14448 9.7162 6.33849H9.71531Z"
          fill="#fff"
        />
        <path
          d="M8.28018 11.6895C8.27584 11.508 8.30746 11.3275 8.37323 11.1583C8.43875 10.9895 8.5372 10.8355 8.66285 10.7052C8.78798 10.5755 8.93789 10.4722 9.10369 10.4014C9.26902 10.331 9.44689 10.2947 9.62661 10.2947C9.80633 10.2947 9.98419 10.331 10.1495 10.4014C10.3154 10.4721 10.4653 10.5754 10.5905 10.7052C10.7162 10.8355 10.8146 10.9895 10.8801 11.1583C10.9768 11.4076 10.9988 11.6797 10.9432 11.9413C10.8876 12.2029 10.757 12.4426 10.5672 12.6311C10.3169 12.8789 9.97893 13.018 9.62668 13.0183C9.27433 13.0181 8.93628 12.8789 8.68582 12.6311C8.43378 12.3816 8.28836 12.044 8.28018 11.6895Z"
          fill="#fff"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_929">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Mantine.displayName = "Mantine";

Mantine.metadata = {
  name: "Mantine",
  category: "icon/library",
  tags: ["mantine", "icon"],
  description: "Mantine icon from icon/library category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mantine;
