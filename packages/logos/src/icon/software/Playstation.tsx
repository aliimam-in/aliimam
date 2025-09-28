import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Playstation: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Playstation(
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
      <g clipPath="url(#undefined-clip0_2039_629)">
        <path
          d="M0.486428 15.8518C-0.413962 16.4646 -0.113181 17.6284 1.80479 18.1813C3.7833 18.8561 5.94151 19.0397 8.04112 18.6724C8.16026 18.6724 8.28135 18.6105 8.3419 18.6105V16.5245L6.30283 17.1992C5.52354 17.4447 4.74424 17.5066 3.96494 17.321C3.36533 17.1373 3.48448 16.77 4.20518 16.4626L8.3419 14.9914V12.7257L2.58408 14.7478C1.86533 14.9934 1.14463 15.3607 0.486428 15.8518ZM14.3966 6.65718V12.6019C16.8556 13.8276 18.7735 12.6019 18.7735 9.41595C18.7735 6.1681 17.6349 4.69689 14.336 3.5331C12.5978 2.91826 10.7989 2.3673 9.0001 2V19.7124L13.1974 21V6.10622C13.1974 5.4315 13.1974 4.94242 13.6778 5.12608C14.338 5.30973 14.3966 5.98445 14.3966 6.65718ZM22.1935 14.4404C20.4552 13.8276 18.5958 13.5821 16.797 13.7657C15.838 13.8276 14.9376 14.0731 14.0978 14.3785L13.9181 14.4404V16.8319L17.8165 15.3607C18.5958 15.1152 19.3751 15.0533 20.1544 15.2389C20.754 15.4226 20.6349 15.7899 19.9142 16.0973L13.9181 18.365V20.6946L22.1935 17.5685C22.7931 17.323 23.3321 17.0175 23.8126 16.5265C24.2325 15.9116 24.0528 15.0533 22.1935 14.4404Z"
          fill="#0070d1"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2039_629">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Playstation.displayName = "Playstation";

Playstation.metadata = {
  name: "Playstation",
  category: "icon/software",
  tags: ["playstation", "icon"],
  description: "Playstation icon from icon/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Playstation;
