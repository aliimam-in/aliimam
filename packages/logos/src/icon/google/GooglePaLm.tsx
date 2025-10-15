import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GooglePaLm: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GooglePaLm(
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
      <g clipPath="url(#undefined-clip0_2062_2731)">
        <path
          d="M12 21.958C12.9276 21.958 13.679 21.223 13.679 20.3156V6.08154H10.3209V20.3156C10.3209 21.223 11.0723 21.958 12 21.958Z"
          fill="#f9ab00"
        />
        <path
          d="M18.6896 11.2756C16.879 9.50591 14.1743 9.14735 12 10.1984L19.1877 17.2293C19.4843 17.5194 19.9951 17.4045 20.121 17.0144C20.7534 15.0559 20.2763 12.829 18.6896 11.2756Z"
          fill="#5bb974"
        />
        <path
          d="M5.31038 11.2756C7.12098 9.50591 9.82567 9.14735 12 10.1984L4.81229 17.2293C4.51567 17.5194 4.00492 17.4045 3.87901 17.0144C3.24657 15.0559 3.72367 12.829 5.31038 11.2756Z"
          fill="#129eaf"
        />
        <path
          d="M18.1566 5.81885C15.2965 5.81885 12.8689 7.65291 12 10.1986H23.3672C23.8331 10.1986 24.1437 9.71678 23.9325 9.31026C22.8522 7.23676 20.6722 5.81885 18.1566 5.81885Z"
          fill="#af5cf7"
        />
        <path
          d="M13.1879 2.84333C11.1647 4.82237 10.7743 7.79649 12 10.1985L20.0384 2.33557C20.3687 2.01259 20.24 1.45687 19.7964 1.31592C17.5325 0.59734 14.9664 1.10382 13.1879 2.84333Z"
          fill="#ff8bcb"
        />
        <path
          d="M10.8121 2.84333C12.8353 4.82237 13.2257 7.79649 12 10.1985L3.9616 2.33557C3.63132 2.01259 3.76004 1.45687 4.20366 1.31592C6.46754 0.59734 9.03366 1.10382 10.8121 2.84333Z"
          fill="#fa7b17"
        />
        <path
          d="M5.84342 5.81885C8.70345 5.81885 11.1311 7.65291 12 10.1986H0.632792C0.166854 10.1986 -0.14374 9.71678 0.067479 9.31026C1.14785 7.23676 3.32782 5.81885 5.84342 5.81885Z"
          fill="#4285f4"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2731">
          <path fill="#fff" transform="translate(0 1)" d="M0 0H24V21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

GooglePaLm.displayName = "GooglePaLm";

GooglePaLm.metadata = {
  name: "GooglePaLm",
  category: "icon/google",
  tags: ["google", "palm", "icon"],
  description: "GooglePaLm icon from icon/google category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GooglePaLm;
