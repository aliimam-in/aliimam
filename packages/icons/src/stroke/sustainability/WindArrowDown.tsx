import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WindArrowDownProps extends IconProps {
  type?: "stroke";
}

export const WindArrowDown: IconComponent<WindArrowDownProps> =
  React.forwardRef<SVGSVGElement, WindArrowDownProps>(function WindArrowDown(
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
            d="M10 2V10M12.8 21.6C13.054 21.79 13.349 21.917 13.661 21.971 13.973 22.025 14.294 22.004 14.596 21.909 14.899 21.815 15.175 21.65 15.401 21.428 15.627 21.206 15.797 20.933 15.897 20.633 15.998 20.332 16.025 20.012 15.977 19.698 15.929 19.385 15.808 19.088 15.623 18.831 15.437 18.574 15.194 18.364 14.911 18.22 14.629 18.075 14.317 18 14 18H2M17.5 10C17.756 9.659 18.094 9.389 18.484 9.216 18.873 9.043 19.3 8.972 19.725 9.01 20.149 9.048 20.557 9.195 20.909 9.435 21.261 9.675 21.546 10.001 21.736 10.382 21.927 10.763 22.017 11.187 21.998 11.612 21.978 12.038 21.851 12.452 21.627 12.814 21.403 13.177 21.09 13.476 20.717 13.684 20.345 13.891 19.926 14 19.5 14H2M6 6 10 10 14 6"
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
            d="M10 2V10M12.8 21.6C13.054 21.79 13.349 21.917 13.661 21.971 13.973 22.025 14.294 22.004 14.596 21.909 14.899 21.815 15.175 21.65 15.401 21.428 15.627 21.206 15.797 20.933 15.897 20.633 15.998 20.332 16.025 20.012 15.977 19.698 15.929 19.385 15.808 19.088 15.623 18.831 15.437 18.574 15.194 18.364 14.911 18.22 14.629 18.075 14.317 18 14 18H2M17.5 10C17.756 9.659 18.094 9.389 18.484 9.216 18.873 9.043 19.3 8.972 19.725 9.01 20.149 9.048 20.557 9.195 20.909 9.435 21.261 9.675 21.546 10.001 21.736 10.382 21.927 10.763 22.017 11.187 21.998 11.612 21.978 12.038 21.851 12.452 21.627 12.814 21.403 13.177 21.09 13.476 20.717 13.684 20.345 13.891 19.926 14 19.5 14H2M6 6 10 10 14 6"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`WindArrowDown doesn't support ${type}`);
    return null;
  });

WindArrowDown.displayName = "WindArrowDown";

WindArrowDown.metadata = {
  name: "WindArrowDown",
  category: "stroke/sustainability",
  tags: ["wind", "arrow", "down", "icon"],
  description: "WindArrowDown icon from stroke/sustainability category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WindArrowDown;
