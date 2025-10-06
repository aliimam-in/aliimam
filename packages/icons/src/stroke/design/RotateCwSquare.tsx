import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RotateCwSquareProps extends IconProps {
  type?: "stroke";
}

export const RotateCwSquare: IconComponent<RotateCwSquareProps> =
  React.forwardRef<SVGSVGElement, RotateCwSquareProps>(function RotateCwSquare(
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
            d="M12 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V10"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8 12 5 9 2M4 14V18C4 18.53 4.211 19.039 4.586 19.414 4.961 19.789 5.47 20 6 20H18C18.53 20 19.039 19.789 19.414 19.414 19.789 19.039 20 18.53 20 18V7C20 6.47 19.789 5.961 19.414 5.586 19.039 5.211 18.53 5 18 5H16"
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
            d="M12 5H6C5.46957 5 4.96086 5.21071 4.58579 5.58579C4.21071 5.96086 4 6.46957 4 7V10"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 8 12 5 9 2M4 14V18C4 18.53 4.211 19.039 4.586 19.414 4.961 19.789 5.47 20 6 20H18C18.53 20 19.039 19.789 19.414 19.414 19.789 19.039 20 18.53 20 18V7C20 6.47 19.789 5.961 19.414 5.586 19.039 5.211 18.53 5 18 5H16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`RotateCwSquare doesn't support ${type}`);
    return null;
  });

RotateCwSquare.displayName = "RotateCwSquare";

RotateCwSquare.metadata = {
  name: "RotateCwSquare",
  category: "stroke/design",
  tags: ["rotate", "cw", "square", "icon"],
  description: "RotateCwSquare icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RotateCwSquare;
