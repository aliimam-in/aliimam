import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ToiletProps extends IconProps {
  type?: "stroke";
}

export const Toilet: IconComponent<ToiletProps> = React.forwardRef<
  SVGSVGElement,
  ToiletProps
>(function Toilet(
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
    type = "stroke",
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
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
          d="M6.99998 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13C21 14.3261 20.4732 15.5979 19.5355 16.5355C18.5978 17.4732 17.3261 18 16 18H15.402C15.3127 18 15.2251 18.0239 15.1482 18.0692C15.0713 18.1145 15.0079 18.1796 14.9647 18.2576C14.9214 18.3357 14.8998 18.4239 14.9022 18.5131C14.9045 18.6023 14.9307 18.6893 14.978 18.765L16.522 21.235C16.5693 21.3107 16.5955 21.3977 16.5978 21.4869C16.6002 21.5761 16.5786 21.6643 16.5353 21.7424C16.492 21.8204 16.4287 21.8855 16.3518 21.9308C16.2749 21.9761 16.1872 22 16.098 22H5.40198C5.31273 22 5.2251 21.9761 5.1482 21.9308C5.0713 21.8855 5.00792 21.8204 4.96466 21.7424C4.92139 21.6643 4.89981 21.5761 4.90215 21.4869C4.90449 21.3977 4.93068 21.3107 4.97798 21.235L6.99998 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 18C6.67392 18 5.40215 17.4732 4.46447 16.5355C3.52678 15.5979 3 14.3261 3 13V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "stroke") {
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
          d="M7.0001 12H20.0001C20.2653 12 20.5197 12.1054 20.7072 12.2929C20.8947 12.4804 21.0001 12.7348 21.0001 13C21.0001 14.3261 20.4733 15.5979 19.5356 16.5355C18.598 17.4732 17.3262 18 16.0001 18H15.4021C15.3128 18 15.2252 18.0239 15.1483 18.0692C15.0714 18.1145 15.008 18.1796 14.9648 18.2576C14.9215 18.3357 14.8999 18.4239 14.9023 18.5131C14.9046 18.6023 14.9308 18.6893 14.9781 18.765L16.5221 21.235C16.5694 21.3107 16.5956 21.3977 16.5979 21.4869C16.6003 21.5761 16.5787 21.6643 16.5354 21.7424C16.4922 21.8204 16.4288 21.8855 16.3519 21.9308C16.275 21.9761 16.1874 22 16.0981 22H5.4021C5.31285 22 5.22522 21.9761 5.14832 21.9308C5.07142 21.8855 5.00805 21.8204 4.96478 21.7424C4.92151 21.6643 4.89993 21.5761 4.90227 21.4869C4.90461 21.3977 4.9308 21.3107 4.9781 21.235L7.0001 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 18C6.67392 18 5.40215 17.4732 4.46447 16.5355C3.52678 15.5979 3 14.3261 3 13V4C3 3.46957 3.21071 2.96086 3.58579 2.58579C3.96086 2.21071 4.46957 2 5 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Toilet doesn't support ${type}`);
  return null;
});

Toilet.displayName = "Toilet";

Toilet.metadata = {
  name: "Toilet",
  category: "stroke/home",
  tags: ["toilet", "icon"],
  description: "Toilet icon from stroke/home category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Toilet;
