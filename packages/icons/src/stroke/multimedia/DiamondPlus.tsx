import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DiamondPlusProps extends IconProps {
  type?: "stroke";
}

export const DiamondPlus: IconComponent<DiamondPlusProps> = React.forwardRef<
  SVGSVGElement,
  DiamondPlusProps
>(function DiamondPlus(
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
          d="M12 8V16M2.7 10.3C2.476 10.524 2.298 10.79 2.177 11.082 2.056 11.375 1.993 11.688 1.993 12.005 1.993 12.322 2.056 12.635 2.177 12.928 2.298 13.22 2.476 13.486 2.7 13.71L10.29 21.3C10.514 21.524 10.78 21.702 11.072 21.823 11.365 21.944 11.678 22.007 11.995 22.007 12.312 22.007 12.625 21.944 12.918 21.823 13.21 21.702 13.476 21.524 13.7 21.3L21.29 13.71C21.514 13.486 21.692 13.22 21.813 12.928 21.934 12.635 21.997 12.322 21.997 12.005 21.997 11.688 21.934 11.375 21.813 11.082 21.692 10.79 21.514 10.524 21.29 10.3L13.7 2.71C13.476 2.486 13.21 2.308 12.918 2.187 12.625 2.066 12.312 2.003 11.995 2.003 11.678 2.003 11.365 2.066 11.072 2.187 10.78 2.308 10.514 2.486 10.29 2.71L2.7 10.3ZM8 12H16"
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
          d="M12 8V16M2.7 10.3C2.476 10.524 2.298 10.79 2.177 11.082 2.056 11.375 1.993 11.688 1.993 12.005 1.993 12.322 2.056 12.635 2.177 12.928 2.298 13.22 2.476 13.486 2.7 13.71L10.29 21.3C10.514 21.524 10.78 21.702 11.072 21.823 11.365 21.944 11.678 22.007 11.995 22.007 12.312 22.007 12.625 21.944 12.918 21.823 13.21 21.702 13.476 21.524 13.7 21.3L21.29 13.71C21.514 13.486 21.692 13.22 21.813 12.928 21.934 12.635 21.997 12.322 21.997 12.005 21.997 11.688 21.934 11.375 21.813 11.082 21.692 10.79 21.514 10.524 21.29 10.3L13.7 2.71C13.476 2.486 13.21 2.308 12.918 2.187 12.625 2.066 12.312 2.003 11.995 2.003 11.678 2.003 11.365 2.066 11.072 2.187 10.78 2.308 10.514 2.486 10.29 2.71L2.7 10.3ZM8 12H16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`DiamondPlus doesn't support ${type}`);
  return null;
});

DiamondPlus.displayName = "DiamondPlus";

DiamondPlus.metadata = {
  name: "DiamondPlus",
  category: "stroke/multimedia",
  tags: ["diamond", "plus", "icon"],
  description: "DiamondPlus icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DiamondPlus;
