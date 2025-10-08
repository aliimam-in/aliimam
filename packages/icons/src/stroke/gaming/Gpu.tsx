import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GpuProps extends IconProps {
  type?: "stroke";
}

export const Gpu: IconComponent<GpuProps> = React.forwardRef<
  SVGSVGElement,
  GpuProps
>(function Gpu(
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
          d="M2 21V3M2 5H20C20.53 5 21.039 5.211 21.414 5.586 21.789 5.961 22 6.47 22 7V15C22 15.53 21.789 16.039 21.414 16.414 21.039 16.789 20.53 17 20 17H2.26M7 17V20C7 20.265 7.105 20.52 7.293 20.707 7.48 20.895 7.735 21 8 21H13C13.265 21 13.52 20.895 13.707 20.707 13.895 20.52 14 20.265 14 20V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 13C17.105 13 18 12.105 18 11 18 9.895 17.105 9 16 9 14.895 9 14 9.895 14 11 14 12.105 14.895 13 16 13ZM8 13C9.105 13 10 12.105 10 11 10 9.895 9.105 9 8 9 6.895 9 6 9.895 6 11 6 12.105 6.895 13 8 13Z"
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
          d="M2 21V3M2 5H20C20.53 5 21.039 5.211 21.414 5.586 21.789 5.961 22 6.47 22 7V15C22 15.53 21.789 16.039 21.414 16.414 21.039 16.789 20.53 17 20 17H2.26M7 17V20C7 20.265 7.105 20.52 7.293 20.707 7.48 20.895 7.735 21 8 21H13C13.265 21 13.52 20.895 13.707 20.707 13.895 20.52 14 20.265 14 20V17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 13C17.105 13 18 12.105 18 11 18 9.895 17.105 9 16 9 14.895 9 14 9.895 14 11 14 12.105 14.895 13 16 13ZM8 13C9.105 13 10 12.105 10 11 10 9.895 9.105 9 8 9 6.895 9 6 9.895 6 11 6 12.105 6.895 13 8 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Gpu doesn't support ${type}`);
  return null;
});

Gpu.displayName = "Gpu";

Gpu.metadata = {
  name: "Gpu",
  category: "stroke/gaming",
  tags: ["gpu", "icon"],
  description: "Gpu icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Gpu;
