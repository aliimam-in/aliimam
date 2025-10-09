import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Burundi: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Burundi(
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
      viewBox="0 0 32 32"
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#62af3f"
      />
      <path
        d="M16 16 29.684 5.053C28.973 4.405 28.037 4 27 4H5C3.963 4 3.026 4.405 2.316 5.053L16 16ZM16 16 2.316 26.947C3.027 27.595 3.963 28 5 28H27C28.037 28 28.974 27.595 29.684 26.947L16 16Z"
        fill="#b92932"
      />
      <path
        d="M28.304 4.23608L19.594 11.2041C18.592 10.4521 17.35 10.0001 16 10.0001C14.65 10.0001 13.409 10.4511 12.406 11.2041L3.696 4.23608C2.693 4.58408 1.877 5.31108 1.416 6.25508L10.529 13.5451C10.192 14.2951 10 15.1251 10 16.0001C10 16.8751 10.192 17.7051 10.529 18.4551L1.417 25.7451C1.878 26.6891 2.694 27.4161 3.697 27.7641L12.407 20.7961C13.409 21.5481 14.651 22.0001 16.001 22.0001C17.351 22.0001 18.592 21.5491 19.595 20.7961L28.305 27.7641C29.308 27.4161 30.124 26.6891 30.585 25.7451L21.472 18.4551C21.809 17.7051 22.001 16.8751 22.001 16.0001C22.001 15.1251 21.809 14.2951 21.472 13.5451L30.585 6.25508C30.124 5.31108 29.307 4.58408 28.304 4.23608Z"
        fill="#fff"
      />
      <path
        d="M16.477 12.325 16 11.5 15.523 12.325H14.57L15.047 13.151 14.57 13.976H15.523L16 14.802 16.477 13.976H17.43L16.953 13.151 17.43 12.325H16.477ZM19.529 17.693 20.005 16.868 19.052 16.867 18.575 16.042 18.099 16.867H17.146L17.622 17.693 17.146 18.518 18.099 18.519 18.575 19.344 19.052 18.519 20.005 18.518 19.529 17.693ZM13.901 16.867 13.425 16.042 12.948 16.867 11.995 16.868 12.471 17.693 11.995 18.518 12.948 18.519 13.425 19.344 13.901 18.519 14.854 18.518 14.378 17.693 14.854 16.867H13.901Z"
        fill="#b92932"
      />
    </svg>
  );
});

Burundi.displayName = "Burundi";

Burundi.metadata = {
  name: "Burundi",
  category: "flags/flags",
  tags: ["burundi", "icon"],
  description: "Burundi icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Burundi;
