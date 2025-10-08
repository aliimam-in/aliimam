import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Hamburger: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Hamburger(
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
        d="M12 16H4C3.47 16 2.961 15.789 2.586 15.414 2.211 15.039 2 14.53 2 14 2 13.47 2.211 12.961 2.586 12.586 2.961 12.211 3.47 12 4 12H20C20.53 12 21.039 12.211 21.414 12.586 21.789 12.961 22 13.47 22 14 22 14.53 21.789 15.039 21.414 15.414 21.039 15.789 20.53 16 20 16H15.75M5 12C4.47 12 3.961 11.789 3.586 11.414 3.211 11.039 3 10.53 3 10 3 8.143 3.948 6.363 5.636 5.05 7.324 3.738 9.613 3 12 3 14.387 3 16.676 3.738 18.364 5.05 20.052 6.363 21 8.143 21 10 21 10.53 20.789 11.039 20.414 11.414 20.039 11.789 19.53 12 19 12M5 16C4.47 16 3.961 16.211 3.586 16.586 3.211 16.961 3 17.47 3 18 3 18.796 3.316 19.559 3.879 20.121 4.441 20.684 5.204 21 6 21H18C18.796 21 19.559 20.684 20.121 20.121 20.684 19.559 21 18.796 21 18 21 17.47 20.789 16.961 20.414 16.586 20.039 16.211 19.53 16 19 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66998 12L12.8 16.6C13.2243 16.9183 13.7577 17.0549 14.2828 16.9799C14.5428 16.9428 14.793 16.8548 15.019 16.7209C15.245 16.5871 15.4424 16.4101 15.6 16.2L18.75 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Hamburger.displayName = "Hamburger";

Hamburger.metadata = {
  name: "Hamburger",
  category: "stroke/foodBeverage",
  tags: ["hamburger", "icon"],
  description: "Hamburger icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hamburger;
