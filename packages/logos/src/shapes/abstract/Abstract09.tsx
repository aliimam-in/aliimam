import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract09: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract09(
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
        d="M2.99905 24C1.34208 24 0 22.6563 0 20.9998C0 19.3432 1.344 17.9995 2.99905 17.9995C4.6541 17.9995 6.00002 19.3432 6.00002 20.9998C6.00002 22.6563 4.65602 24 2.99905 24ZM23.9924 20.7291C23.9118 22.52 22.4353 23.9597 20.642 23.9981C18.7143 24.0384 17.1399 22.4893 17.1399 20.5717C17.1399 20.3797 17.1553 20.1935 17.186 20.0112C17.2225 19.8461 17.2494 19.6772 17.2916 19.562C17.3454 19.3624 17.3818 19.2914 17.4682 19.1071C19.7991 12.6536 20.0314 8.31353 16.1146 6.70112L15.049 6.33448C13.2941 5.77397 6.93314 3.47053 6.93314 7.79909C6.96386 9.03335 6.76804 9.9912 9.80357 10.2791C9.93413 10.2926 10.0647 10.2926 10.1972 10.2887C10.226 10.2887 10.2567 10.2887 10.2855 10.2887C10.5082 10.2887 10.7232 10.3118 10.9344 10.3502C10.9344 10.3502 10.9364 10.3502 10.9383 10.3502C12.5472 10.6611 13.7569 12.095 13.7127 13.8053C13.6685 15.5828 12.2477 17.0455 10.4717 17.1396C8.49412 17.2451 6.85634 15.6711 6.85634 13.717C6.74114 11.3618 7.6109 10.0776 3.82848 10.2638C3.696 10.2791 3.56353 10.2868 3.42721 10.2868C1.53408 10.2868 0 8.75117 0 6.85851C0 4.96584 1.53408 3.43021 3.42721 3.43021C3.58849 3.43021 3.74403 3.44174 3.89955 3.46286C3.89955 3.46286 3.90529 3.46286 3.90721 3.46286C4.12609 3.49357 4.33922 3.54539 4.54274 3.61449C7.8202 4.48597 10.921 5.36704 14.4001 1.33792L14.5249 1.21315C14.6477 1.06727 14.7821 0.934812 14.9261 0.811961L14.9319 0.80813C15.529 0.305211 16.2989 0 17.1418 0C19.035 0 20.569 1.53563 20.569 3.42829C20.569 3.62409 20.5518 3.81413 20.521 4.00225C19.8471 12.4617 21.7959 16.1817 23.2225 18.4007C23.3742 18.5869 23.5067 18.7884 23.618 19.0034C23.618 19.0054 23.6219 19.0092 23.6238 19.0111C23.8868 19.5236 24.025 20.1091 23.9962 20.7291H23.9924Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract09.displayName = "Abstract09";

Abstract09.metadata = {
  name: "Abstract09",
  category: "shapes/abstract",
  tags: ["abstract", "09", "icon"],
  description: "Abstract09 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract09;
