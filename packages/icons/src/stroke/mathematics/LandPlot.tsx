import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LandPlotProps extends IconProps {
  type?: "stroke";
}

export const LandPlot: IconComponent<LandPlotProps> = React.forwardRef<
  SVGSVGElement,
  LandPlotProps
>(function LandPlot(
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
          d="M12 8L18 5L12 2V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.99 2.5 15.13C2.346 15.217 2.218 15.344 2.129 15.497 2.04 15.649 1.993 15.823 1.993 16 1.993 16.177 2.04 16.351 2.129 16.504 2.218 16.656 2.346 16.783 2.5 16.87L11 21.73C11.304 21.906 11.649 21.998 12 21.998 12.351 21.998 12.696 21.906 13 21.73L21.5 16.87C21.654 16.783 21.782 16.656 21.871 16.504 21.96 16.351 22.007 16.177 22.007 16 22.007 15.823 21.96 15.649 21.871 15.497 21.782 15.344 21.654 15.217 21.5 15.13L16 12M6.49 12.85 17.51 19.15M17.51 12.85 6.5 19.15"
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
          d="M12 8L18 5L12 2V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.99 2.5 15.13C2.346 15.217 2.218 15.344 2.129 15.497 2.04 15.649 1.993 15.823 1.993 16 1.993 16.177 2.04 16.351 2.129 16.504 2.218 16.656 2.346 16.783 2.5 16.87L11 21.73C11.304 21.906 11.649 21.998 12 21.998 12.351 21.998 12.696 21.906 13 21.73L21.5 16.87C21.654 16.783 21.782 16.656 21.871 16.504 21.96 16.351 22.007 16.177 22.007 16 22.007 15.823 21.96 15.649 21.871 15.497 21.782 15.344 21.654 15.217 21.5 15.13L16 12M6.49 12.85 17.51 19.15M17.51 12.85 6.5 19.15"
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
          d="M12 8L18 5L12 2V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.99 2.5 15.13C2.346 15.217 2.218 15.344 2.129 15.497 2.04 15.649 1.993 15.823 1.993 16 1.993 16.177 2.04 16.351 2.129 16.504 2.218 16.656 2.346 16.783 2.5 16.87L11 21.73C11.304 21.906 11.649 21.998 12 21.998 12.351 21.998 12.696 21.906 13 21.73L21.5 16.87C21.654 16.783 21.782 16.656 21.871 16.504 21.96 16.351 22.007 16.177 22.007 16 22.007 15.823 21.96 15.649 21.871 15.497 21.782 15.344 21.654 15.217 21.5 15.13L16 12M6.49 12.85 17.51 19.15M17.51 12.85 6.5 19.15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`LandPlot doesn't support ${type}`);
  return null;
});

LandPlot.displayName = "LandPlot";

LandPlot.metadata = {
  name: "LandPlot",
  category: "stroke/mathematics",
  tags: ["land", "plot", "icon"],
  description: "LandPlot icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LandPlot;
