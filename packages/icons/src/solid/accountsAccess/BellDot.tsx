import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BellDotProps extends IconProps {
  type?: "solid" | "stroke";
}

export const BellDot: IconComponent<BellDotProps> = React.forwardRef<
  SVGSVGElement,
  BellDotProps
>(function BellDot(
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
  if (type === "solid") {
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
          d="M12.433 20.25C12.847 19.533 13.764 19.287 14.482 19.701 15.199 20.115 15.445 21.033 15.031 21.75 14.724 22.282 14.281 22.724 13.749 23.031 13.218 23.338 12.614 23.5 12 23.5 11.386 23.5 10.782 23.338 10.25 23.031 9.718 22.724 9.276 22.282 8.969 21.75 8.555 21.033 8.801 20.115 9.518 19.701 10.235 19.287 11.153 19.533 11.567 20.25 11.611 20.326 11.674 20.389 11.75 20.433 11.826 20.476 11.913 20.5 12 20.5 12.088 20.5 12.175 20.476 12.25 20.433 12.326 20.389 12.389 20.326 12.433 20.25ZM17.5 11C19.433 11 21 9.433 21 7.5 21 5.567 19.433 4 17.5 4 15.567 4 14 5.567 14 7.5 14 9.433 15.567 11 17.5 11Z"
          fill="currentColor"
        />
        <path
          d="M11.9997 2C12.9897 2 13.9545 2.24531 14.8132 2.70117C13.1348 3.64292 11.9997 5.43849 11.9997 7.5C11.9997 10.5375 14.4623 12.9998 17.4997 13C17.9716 13 18.4298 12.9399 18.8669 12.8281C19.3861 13.931 20.0732 14.6399 20.7399 15.3271C20.8703 15.4705 20.956 15.6486 20.987 15.8398C21.018 16.0311 20.9931 16.2271 20.9147 16.4043C20.8363 16.5815 20.708 16.7322 20.5456 16.8379C20.3832 16.9436 20.1935 17.0001 19.9997 17H3.9997C3.80599 16.9998 3.61604 16.9438 3.4538 16.8379C3.29155 16.732 3.1638 16.5806 3.08564 16.4033C3.00752 16.2261 2.98312 16.03 3.01435 15.8389C3.04565 15.6476 3.13176 15.4694 3.2624 15.3262C4.58937 13.9562 5.9997 12.4989 5.9997 8C5.9997 6.40878 6.63239 4.88302 7.75751 3.75781C8.88266 2.63267 10.4085 2.00008 11.9997 2Z"
          fill="currentColor"
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
          d="M10.268 21C10.444 21.304 10.696 21.557 11 21.732 11.304 21.908 11.649 22 12 22 12.351 22 12.696 21.908 13 21.732 13.304 21.557 13.557 21.304 13.732 21M13.916 2.314C13.014 2.01 12.052 1.925 11.11 2.066 10.168 2.208 9.273 2.571 8.5 3.127 7.726 3.682 7.096 4.414 6.661 5.262 6.227 6.109 6 7.048 6 8 6 12.499 4.589 13.956 3.26 15.327 3.13 15.47 3.044 15.649 3.013 15.84 2.982 16.031 3.007 16.227 3.085 16.405 3.164 16.582 3.292 16.732 3.454 16.838 3.617 16.944 3.806 17 4 17H20C20.194 17 20.383 16.944 20.546 16.838 20.708 16.732 20.837 16.582 20.915 16.405 20.993 16.227 21.019 16.031 20.987 15.84 20.956 15.649 20.87 15.47 20.74 15.327 20.534 15.115 20.339 14.893 20.155 14.662"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8C15 9.65685 16.3431 11 18 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BellDot doesn't support ${type}`);
  return null;
});

BellDot.displayName = "BellDot";

BellDot.metadata = {
  name: "BellDot",
  category: "solid/accountsAccess",
  tags: ["bell", "dot", "icon"],
  description: "BellDot icon from solid/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BellDot;
