import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowLeftProps extends IconProps {
  type?: "stroke";
}

export const ArrowLeft: IconComponent<ArrowLeftProps> = React.forwardRef<
  SVGSVGElement,
  ArrowLeftProps
>(function ArrowLeft(
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
          d="M12 19 5 12 12 5M19 12H5"
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
          d="M12 19 5 12 12 5M19 12H5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ArrowLeft doesn't support ${type}`);
  return null;
});

ArrowLeft.displayName = "ArrowLeft";

ArrowLeft.metadata = {
  name: "ArrowLeft",
  category: "stroke/navigation",
  tags: ["arrow", "left", "icon"],
  description: "ArrowLeft icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowLeft;
