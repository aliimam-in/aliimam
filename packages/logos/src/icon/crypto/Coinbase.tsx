import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Coinbase: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Coinbase(
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
      <g clipPath="url(#undefined-clip0_2062_2926)">
        <path
          d="M0 5.53845C0 2.47965 2.47965 0 5.53845 0H18.4615C21.5203 0 24 2.47965 24 5.53845V18.4615C24 21.5203 21.5203 24 18.4615 24H5.53845C2.47965 24 0 21.5203 0 18.4615V5.53845Z"
          fill="#0052ff"
        />
        <path
          d="M11.9787 16.25C11.1764 16.2338 10.3949 15.9919 9.72435 15.5522C9.0538 15.1125 8.52135 14.4928 8.18835 13.7645C7.8554 13.0362 7.73535 12.2289 7.8421 11.4356C7.94885 10.6422 8.27805 9.895 8.79175 9.2801C9.3055 8.66515 9.9829 8.20745 10.7459 7.95965C11.509 7.71185 12.3267 7.68405 13.1049 7.87945C13.8832 8.07485 14.5902 8.48545 15.1447 9.06405C15.6993 9.64265 16.0787 10.3658 16.2393 11.15H20.5C20.2814 8.9803 19.2352 6.9773 17.5776 5.55545C15.9201 4.13356 13.7782 3.4015 11.5948 3.51067C9.4113 3.61984 7.3535 4.56189 5.84685 6.142C4.34021 7.7221 3.5 9.8193 3.5 12C3.5 14.1807 4.34021 16.2779 5.84685 17.858C7.3535 19.4381 9.4113 20.3802 11.5948 20.4894C13.7782 20.5985 15.9201 19.8665 17.5776 18.4446C19.2352 17.0227 20.2814 15.0197 20.5 12.85H16.2393C16.2393 14.55 13.6829 16.25 11.9787 16.25Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2926">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Coinbase.displayName = "Coinbase";

Coinbase.metadata = {
  name: "Coinbase",
  category: "icon/crypto",
  tags: ["coinbase", "icon"],
  description: "Coinbase icon from icon/crypto category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Coinbase;
