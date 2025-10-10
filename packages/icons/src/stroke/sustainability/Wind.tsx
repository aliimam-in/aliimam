import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WindProps extends IconProps {
  type?: "stroke";
}

export const Wind: IconComponent<WindProps> = React.forwardRef<
  SVGSVGElement,
  WindProps
>(function Wind(
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
          d="M12.8 19.6C13.054 19.79 13.349 19.917 13.661 19.971 13.973 20.025 14.294 20.004 14.596 19.909 14.899 19.815 15.175 19.65 15.401 19.428 15.627 19.206 15.797 18.933 15.897 18.633 15.998 18.332 16.025 18.012 15.977 17.698 15.929 17.385 15.808 17.088 15.623 16.831 15.437 16.574 15.194 16.364 14.911 16.22 14.629 16.075 14.317 16 14 16H2M17.5 8C17.756 7.659 18.094 7.389 18.484 7.216 18.873 7.043 19.3 6.972 19.725 7.01 20.149 7.048 20.557 7.195 20.909 7.435 21.261 7.675 21.546 8.001 21.736 8.382 21.927 8.763 22.017 9.187 21.998 9.612 21.978 10.038 21.851 10.452 21.627 10.814 21.403 11.177 21.09 11.476 20.717 11.684 20.345 11.891 19.926 12 19.5 12H2M9.8 4.4C10.054 4.21 10.349 4.083 10.661 4.029 10.973 3.975 11.294 3.996 11.596 4.091 11.899 4.185 12.175 4.35 12.401 4.572 12.627 4.794 12.797 5.067 12.897 5.368 12.998 5.668 13.025 5.988 12.977 6.302 12.929 6.615 12.808 6.912 12.623 7.169 12.437 7.427 12.194 7.636 11.911 7.78 11.629 7.925 11.317 8 11 8H2"
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
          d="M12.8 19.6C13.054 19.79 13.349 19.917 13.661 19.971 13.973 20.025 14.294 20.004 14.596 19.909 14.899 19.815 15.175 19.65 15.401 19.428 15.627 19.206 15.797 18.933 15.897 18.633 15.998 18.332 16.025 18.012 15.977 17.698 15.929 17.385 15.808 17.088 15.623 16.831 15.437 16.574 15.194 16.364 14.911 16.22 14.629 16.075 14.317 16 14 16H2M17.5 8C17.756 7.659 18.094 7.389 18.484 7.216 18.873 7.043 19.3 6.972 19.725 7.01 20.149 7.048 20.557 7.195 20.909 7.435 21.261 7.675 21.546 8.001 21.736 8.382 21.927 8.763 22.017 9.187 21.998 9.612 21.978 10.038 21.851 10.452 21.627 10.814 21.403 11.177 21.09 11.476 20.717 11.684 20.345 11.891 19.926 12 19.5 12H2M9.8 4.4C10.054 4.21 10.349 4.083 10.661 4.029 10.973 3.975 11.294 3.996 11.596 4.091 11.899 4.185 12.175 4.35 12.401 4.572 12.627 4.794 12.797 5.067 12.897 5.368 12.998 5.668 13.025 5.988 12.977 6.302 12.929 6.615 12.808 6.912 12.623 7.169 12.437 7.427 12.194 7.636 11.911 7.78 11.629 7.925 11.317 8 11 8H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Wind doesn't support ${type}`);
  return null;
});

Wind.displayName = "Wind";

Wind.metadata = {
  name: "Wind",
  category: "stroke/sustainability",
  tags: ["wind", "icon"],
  description: "Wind icon from stroke/sustainability category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Wind;
