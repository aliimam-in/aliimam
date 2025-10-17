import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Fortran: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Fortran(
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
      <g clipPath="url(#undefined-clip0_2066_1157)">
        <path
          d="M3.5208 23.9989C2.10192 23.9994 0 21.5225 0 20.4556V3.4984C0 2.06256 2.48408 0 3.55616 0L20.5448 0.0012C22.0109 0.00128 24 2.39256 24 3.532V20.5058C24 22.178 21.7598 23.9926 20.4967 23.993L3.52072 23.9988L3.5208 23.9989Z"
          fill="#734f96"
        />
        <path
          d="M3.29496 19.3295L4.21712 19.273C6.08976 19.1507 6.07096 19.1601 6.16504 17.6921C6.24976 16.2994 6.14304 5.39519 6.08032 5.17655C5.97712 4.81647 5.58952 4.60935 4.43352 4.60959L3.29496 4.60255V2.56055H20.7979V10.3804L18.737 10.3498C18.7182 10.331 18.6618 9.77815 18.6242 9.26999C18.4077 6.87983 17.8714 5.50463 16.8362 4.96823C16.2904 4.68591 15.4382 4.60263 12.7084 4.60183L10.1644 4.60255V10.4651H10.6161C11.3783 10.4557 12.3475 10.2769 12.6675 10.0793C13.0815 9.82519 13.4297 9.09119 13.5521 8.20663C13.6442 7.56103 13.7154 7.07807 13.7154 7.07807L15.7164 7.07743V16.3936H13.6462V16.0266C13.6462 15.4244 13.3638 14.0222 13.1662 13.5988C12.8557 12.9495 12.3287 12.7237 10.8325 12.5825L10.1455 12.5166L10.1832 15.5373C10.2114 18.4074 10.2302 18.5673 10.409 18.8121C10.6349 19.1132 10.8795 19.1697 12.3758 19.2825L13.3801 19.3303L13.3733 21.381H3.29488V19.3296L3.29496 19.3295Z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_1157">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Fortran.displayName = "Fortran";

Fortran.metadata = {
  name: "Fortran",
  category: "icon/language",
  tags: ["fortran", "icon"],
  description: "Fortran icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Fortran;
