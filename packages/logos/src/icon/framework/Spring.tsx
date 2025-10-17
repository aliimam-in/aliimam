import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Spring: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Spring(
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
        <g clipPath="url(#undefined-clip0_2066_406)">
          <path
            d="M21.825 1.26184C21.4889 2.06778 21.0585 2.83109 20.5429 3.53584C19.4173 2.40553 18.0782 1.51026 16.6035 0.902084C15.1288 0.293909 13.548 -0.0150391 11.9528 -0.00679736C10.3576 0.00144434 8.78005 0.326711 7.31172 0.950092C5.84339 1.57347 4.51364 2.48253 3.39977 3.62441C2.2859 4.76629 1.41014 6.11821 0.823415 7.60156C0.236686 9.08491 -0.0493064 10.6701 -0.017936 12.265C0.0134344 13.8598 0.361542 15.4326 1.00615 16.8917C1.65075 18.3508 2.579 19.6673 3.73691 20.7645L4.18166 21.1571C5.87886 22.5872 7.93859 23.5199 10.133 23.852C12.3274 24.1841 14.5708 23.9028 16.6152 23.039C18.6596 22.1753 20.4252 20.7628 21.7167 18.9579C23.0082 17.153 23.7752 15.026 23.9329 12.8122C24.261 9.74846 23.3614 5.87096 21.8254 1.26221L21.825 1.26184ZM5.44878 20.8342C5.32071 20.9925 5.14859 21.1092 4.95418 21.1695C4.75977 21.2299 4.55182 21.2313 4.35663 21.1735C4.16144 21.1157 3.98779 21.0012 3.85765 20.8447C3.7275 20.6882 3.64672 20.4965 3.62551 20.2941C3.6043 20.0916 3.64363 19.8874 3.73851 19.7073C3.83339 19.5272 3.97956 19.3793 4.15853 19.2822C4.3375 19.1852 4.54122 19.1435 4.74393 19.1623C4.94663 19.1811 5.1392 19.2596 5.29728 19.3878C5.50902 19.5597 5.64391 19.8085 5.67231 20.0797C5.70072 20.3509 5.62032 20.6223 5.44878 20.8342ZM21.7755 17.2305C18.8055 21.1867 12.4643 19.8517 8.39853 20.0437C8.39853 20.0437 7.67778 20.0861 6.95216 20.205C6.95216 20.205 7.22591 20.0887 7.57578 19.9563C10.431 18.9626 11.7807 18.7713 13.515 17.8788C16.7805 16.2187 20.0108 12.5831 20.682 8.80383C19.4397 12.4395 15.6672 15.5658 12.2333 16.8356C9.87978 17.703 5.62803 18.5478 5.62803 18.5478L5.45666 18.456C2.56391 17.0497 2.47466 10.7846 7.73553 8.76409C10.0392 7.87684 12.243 8.36396 14.7308 7.77034C17.3873 7.13921 20.4608 5.14909 21.7114 2.55184C23.1102 6.70684 24.7954 13.2101 21.7737 17.2331L21.7755 17.2305Z"
            fill="#68bd45"
          />
        </g>
        <defs>
          <clipPath id="undefined-clip0_2066_406">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

Spring.displayName = "Spring";

Spring.metadata = {
  name: "Spring",
  category: "icon/framework",
  tags: ["spring", "icon"],
  description: "Spring icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Spring;
