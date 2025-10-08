import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface WandSparklesProps extends IconProps {
  type?: "stroke";
}

export const WandSparkles: IconComponent<WandSparklesProps> = React.forwardRef<
  SVGSVGElement,
  WandSparklesProps
>(function WandSparkles(
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
          d="M21.64 3.64 20.36 2.36C20.248 2.246 20.114 2.156 19.966 2.094 19.818 2.033 19.66 2.001 19.5 2.001 19.34 2.001 19.182 2.033 19.034 2.094 18.887 2.156 18.753 2.246 18.64 2.36L2.36 18.64C2.246 18.753 2.156 18.887 2.095 19.034 2.033 19.182 2.001 19.34 2.001 19.5 2.001 19.66 2.033 19.818 2.095 19.966 2.156 20.114 2.246 20.248 2.36 20.36L3.64 21.64C3.752 21.755 3.886 21.846 4.033 21.909 4.181 21.971 4.34 22.003 4.5 22.003 4.66 22.003 4.819 21.971 4.967 21.909 5.115 21.846 5.248 21.755 5.36 21.64L21.64 5.36C21.755 5.248 21.846 5.114 21.909 4.967 21.971 4.819 22.003 4.66 22.003 4.5 22.003 4.34 21.971 4.181 21.909 4.033 21.846 3.886 21.755 3.752 21.64 3.64ZM14 7 17 10M5 6V10M19 14V18M10 2V4M7 8H3M21 16H17M11 3H9"
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
          d="M21.64 3.64 20.36 2.36C20.248 2.246 20.114 2.156 19.966 2.095 19.818 2.033 19.66 2.001 19.5 2.001 19.34 2.001 19.182 2.033 19.034 2.095 18.887 2.156 18.753 2.246 18.64 2.36L2.36 18.64C2.246 18.753 2.156 18.887 2.095 19.034 2.033 19.182 2.001 19.34 2.001 19.5 2.001 19.66 2.033 19.818 2.095 19.966 2.156 20.114 2.246 20.248 2.36 20.36L3.64 21.64C3.752 21.755 3.886 21.846 4.033 21.909 4.181 21.971 4.34 22.003 4.5 22.003 4.66 22.003 4.819 21.971 4.967 21.909 5.115 21.846 5.248 21.755 5.36 21.64L21.64 5.36C21.755 5.248 21.846 5.115 21.909 4.967 21.971 4.819 22.003 4.66 22.003 4.5 22.003 4.34 21.971 4.181 21.909 4.033 21.846 3.886 21.755 3.752 21.64 3.64ZM14 7 17 10M5 6V10M19 14V18M10 2V4M7 8H3M21 16H17M11 3H9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`WandSparkles doesn't support ${type}`);
  return null;
});

WandSparkles.displayName = "WandSparkles";

WandSparkles.metadata = {
  name: "WandSparkles",
  category: "stroke/gaming",
  tags: ["wand", "sparkles", "icon"],
  description: "WandSparkles icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WandSparkles;
