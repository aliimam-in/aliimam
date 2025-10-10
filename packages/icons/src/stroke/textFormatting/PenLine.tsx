import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PenLineProps extends IconProps {
  type?: "stroke";
}

export const PenLine: IconComponent<PenLineProps> = React.forwardRef<
  SVGSVGElement,
  PenLineProps
>(function PenLine(
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
          d="M13 21H21M21.174 6.812C21.703 6.283 22 5.566 22 4.819 22 4.071 21.703 3.354 21.174 2.826 20.646 2.297 19.929 2 19.181 2 18.434 2 17.717 2.296 17.188 2.825L3.842 16.174C3.61 16.406 3.438 16.691 3.342 17.004L2.021 21.356C1.995 21.443 1.993 21.534 2.015 21.622 2.037 21.709 2.083 21.789 2.147 21.853 2.211 21.917 2.291 21.962 2.378 21.984 2.466 22.006 2.557 22.004 2.644 21.978L6.997 20.658C7.31 20.563 7.595 20.392 7.827 20.161L21.174 6.812Z"
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
          d="M13 21H21M21.174 6.812C21.703 6.283 22 5.566 22 4.819 22 4.071 21.703 3.354 21.174 2.826 20.646 2.297 19.929 2 19.181 2 18.434 2 17.717 2.296 17.188 2.825L3.842 16.174C3.61 16.406 3.438 16.691 3.342 17.004L2.021 21.356C1.995 21.443 1.993 21.534 2.015 21.622 2.037 21.709 2.083 21.789 2.147 21.853 2.211 21.917 2.291 21.962 2.378 21.984 2.466 22.006 2.557 22.004 2.644 21.978L6.997 20.658C7.31 20.563 7.595 20.392 7.827 20.161L21.174 6.812Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PenLine doesn't support ${type}`);
  return null;
});

PenLine.displayName = "PenLine";

PenLine.metadata = {
  name: "PenLine",
  category: "stroke/textFormatting",
  tags: ["pen", "line", "icon"],
  description: "PenLine icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PenLine;
