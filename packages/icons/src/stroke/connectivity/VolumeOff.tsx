import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface VolumeOffProps extends IconProps {
  type?: "stroke";
}

export const VolumeOff: IconComponent<VolumeOffProps> = React.forwardRef<
  SVGSVGElement,
  VolumeOffProps
>(function VolumeOff(
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
          d="M16 9C16.504 9.672 16.831 10.461 16.95 11.293M19.364 5.636C20.643 6.914 21.507 8.548 21.844 10.325 22.181 12.101 21.975 13.938 21.253 15.596M2 2 22 22M7 7 6.413 7.587C6.282 7.718 6.127 7.823 5.956 7.893 5.785 7.964 5.601 8.001 5.416 8H3C2.735 8 2.48 8.105 2.293 8.293 2.105 8.48 2 8.735 2 9V15C2 15.265 2.105 15.52 2.293 15.707 2.48 15.895 2.735 16 3 16H5.416C5.601 16 5.785 16.036 5.956 16.107 6.127 16.177 6.282 16.282 6.413 16.413L9.796 19.797C9.895 19.896 10.02 19.963 10.157 19.99 10.294 20.018 10.436 20.004 10.565 19.95 10.694 19.897 10.804 19.806 10.882 19.69 10.959 19.574 11 19.438 11 19.298V11M9.828 4.172C9.924 4.076 10.046 4.01 10.179 3.983 10.313 3.957 10.451 3.97 10.576 4.022 10.702 4.074 10.809 4.162 10.885 4.275 10.96 4.388 11 4.521 11 4.657V5.343"
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
          d="M16 9C16.504 9.672 16.831 10.461 16.95 11.293M19.364 5.636C20.643 6.914 21.507 8.548 21.844 10.325 22.181 12.101 21.975 13.938 21.253 15.596M2 2 22 22M7 7 6.413 7.587C6.282 7.718 6.127 7.823 5.956 7.893 5.785 7.964 5.601 8.001 5.416 8H3C2.735 8 2.48 8.105 2.293 8.293 2.105 8.48 2 8.735 2 9V15C2 15.265 2.105 15.52 2.293 15.707 2.48 15.895 2.735 16 3 16H5.416C5.601 16 5.785 16.036 5.956 16.107 6.127 16.177 6.282 16.282 6.413 16.413L9.796 19.797C9.895 19.896 10.02 19.963 10.157 19.99 10.294 20.018 10.436 20.004 10.565 19.95 10.694 19.897 10.804 19.806 10.882 19.69 10.959 19.574 11 19.438 11 19.298V11M9.828 4.172C9.924 4.076 10.046 4.01 10.179 3.983 10.313 3.957 10.451 3.97 10.576 4.022 10.702 4.074 10.809 4.162 10.885 4.275 10.96 4.388 11 4.521 11 4.657V5.343"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`VolumeOff doesn't support ${type}`);
  return null;
});

VolumeOff.displayName = "VolumeOff";

VolumeOff.metadata = {
  name: "VolumeOff",
  category: "stroke/connectivity",
  tags: ["volume", "off", "icon"],
  description: "VolumeOff icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default VolumeOff;
