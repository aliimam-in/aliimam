import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Donut: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Donut(
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
          d="M20.5 9.99998C20.1335 9.99274 19.773 9.90498 19.4442 9.74292C19.1154 9.58086 18.8262 9.34846 18.5972 9.0622C18.3682 8.77594 18.205 8.44282 18.119 8.08644C18.0331 7.73006 18.0266 7.35915 18.1 6.99998H18C17.482 7.00543 16.9717 6.87438 16.5204 6.62C16.0691 6.36562 15.6928 5.99689 15.4292 5.55089C15.1657 5.1049 15.0242 4.59737 15.0191 4.07935C15.014 3.56134 15.1453 3.0511 15.4 2.59998C13.3091 1.83553 11.0229 1.79065 8.90365 2.47245C6.78438 3.15424 4.95321 4.52373 3.70027 6.36393C2.44734 8.20413 1.84429 10.4098 1.98667 12.6315C2.12904 14.8532 3.00871 16.9638 4.48629 18.629C5.96387 20.2943 7.95487 21.4188 10.1438 21.8245C12.3328 22.2302 14.5946 21.8939 16.5708 20.8688C18.547 19.8437 20.1246 18.1885 21.0537 16.1654C21.9828 14.1423 22.2102 11.867 21.7 9.69998C21.4 9.89998 20.9 9.99998 20.5 9.99998Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Donut.displayName = "Donut";

Donut.metadata = {
  name: "Donut",
  category: "stroke/foodBeverage",
  tags: ["donut", "icon"],
  description: "Donut icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Donut;
