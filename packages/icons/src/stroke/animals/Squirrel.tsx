import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Squirrel: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Squirrel(
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
        d="M15.236 22C15.6201 21.5706 15.8725 21.0398 15.9629 20.4708C16.0534 19.9018 15.9781 19.3189 15.7461 18.7916C15.5141 18.2643 15.1351 17.8149 14.6545 17.4972C14.174 17.1795 13.6121 17.0069 13.036 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 20C16 19.204 16.316 18.441 16.879 17.879 17.441 17.316 18.204 17 19 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V13C22 11.939 21.579 10.922 20.828 10.172 20.078 9.421 19.061 9 18 9V4M18 13H18.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 6C16.9391 6 15.9217 6.42143 15.1716 7.17157C14.4214 7.92172 14 8.93913 14 10C12.1435 10 10.363 10.7375 9.05025 12.0503C7.7375 13.363 7 15.1435 7 17C7 12 11 12 11 6.5C11 5.90905 10.8836 5.32389 10.6575 4.77792C10.4313 4.23196 10.0998 3.73588 9.68198 3.31802C9.26412 2.90016 8.76804 2.56869 8.22208 2.34254C7.67611 2.1164 7.09095 2 6.5 2C5.90905 2 5.32389 2.1164 4.77792 2.34254C4.23196 2.56869 3.73588 2.90016 3.31802 3.31802C2.90016 3.73588 2.56869 4.23196 2.34254 4.77792C2.1164 5.32389 2 5.90905 2 6.5C2 7.16304 2.26339 7.79893 2.73223 8.26777C3.20107 8.73661 3.83696 9 4.5 9C5.16304 9 5.79893 8.73661 6.26777 8.26777C6.73661 7.79893 7 7.16304 7 6.5C7 10 3 11 3 17C3 19.8 5.2 22 8 22H18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Squirrel.displayName = "Squirrel";

Squirrel.metadata = {
  name: "Squirrel",
  category: "stroke/animals",
  tags: ["squirrel", "icon"],
  description: "Squirrel icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Squirrel;
