import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleStar: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleStar(
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
        d="M11.051 7.61602C11.1171 7.41336 11.2462 7.23711 11.4194 7.11298C11.5927 6.98886 11.8012 6.92336 12.0143 6.92604C12.2275 6.92872 12.4342 6.99944 12.6043 7.12788C12.7744 7.25632 12.899 7.43576 12.96 7.64002L13.697 9.09202C13.7687 9.23317 13.8729 9.35528 14.001 9.44829C14.1292 9.5413 14.2776 9.60255 14.434 9.62702L16.068 9.88302C16.2784 9.88384 16.4832 9.95101 16.6532 10.075C16.8232 10.1989 16.9498 10.3734 17.015 10.5734C17.0801 10.7735 17.0805 10.989 17.016 11.1893C16.9516 11.3896 16.8256 11.5645 16.656 11.689L15.484 12.857C15.3718 12.9687 15.2877 13.1055 15.2387 13.2561C15.1896 13.4066 15.1771 13.5667 15.202 13.723L15.461 15.336C15.5322 15.5382 15.5366 15.7579 15.4735 15.9628C15.4104 16.1676 15.2832 16.3468 15.1105 16.4738C14.9379 16.6009 14.729 16.6691 14.5146 16.6684C14.3003 16.6677 14.0918 16.5982 13.92 16.47L12.455 15.72C12.3139 15.6477 12.1576 15.61 11.999 15.61C11.8404 15.61 11.6841 15.6477 11.543 15.72L10.078 16.47C9.90617 16.5971 9.69815 16.6658 9.48443 16.6661C9.27072 16.6663 9.06255 16.5981 8.89044 16.4714C8.71833 16.3447 8.59135 16.1662 8.5281 15.962C8.46485 15.7579 8.46866 15.5388 8.53898 15.337L8.79698 13.724C8.82206 13.5675 8.80957 13.4073 8.76054 13.2565C8.71151 13.1058 8.62734 12.9688 8.51498 12.857L7.35898 11.705C7.18364 11.5835 7.05174 11.4092 6.98254 11.2074C6.91335 11.0056 6.91049 10.787 6.97438 10.5835C7.03827 10.38 7.16557 10.2022 7.33767 10.0762C7.50978 9.95017 7.71767 9.88248 7.93098 9.88302L9.56398 9.62702C9.72041 9.60255 9.86879 9.5413 9.99692 9.44829C10.1251 9.35528 10.2293 9.23317 10.301 9.09202L11.051 7.61602Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleStar.displayName = "CircleStar";

CircleStar.metadata = {
  name: "CircleStar",
  category: "stroke/gaming",
  tags: ["circle", "star", "icon"],
  description: "CircleStar icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleStar;
