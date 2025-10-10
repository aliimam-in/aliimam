import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquircleDashedProps extends IconProps {
  type?: "stroke";
}

export const SquircleDashed: IconComponent<SquircleDashedProps> =
  React.forwardRef<SVGSVGElement, SquircleDashedProps>(function SquircleDashed(
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
            d="M13.77 3.043C12.591 2.982 11.409 2.982 10.23 3.043M13.771 20.956C12.592 21.02 11.41 21.02 10.23 20.957M20.18 17.74C19.67 18.89 18.89 19.67 17.741 20.18M20.18 6.259C19.67 5.111 18.889 4.33 17.74 3.821M20.957 10.23C21.02 11.409 21.02 12.591 20.957 13.77M3.043 10.23C2.982 11.41 2.982 12.592 3.044 13.771M6.26 20.179C5.11 19.671 4.33 18.889 3.82 17.741M6.26 3.82C5.111 4.33 4.33 5.111 3.82 6.26"
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
            d="M13.77 3.043C12.591 2.982 11.409 2.982 10.23 3.043M13.771 20.956C12.592 21.02 11.41 21.02 10.23 20.957M20.18 17.74C19.67 18.89 18.89 19.67 17.741 20.18M20.18 6.259C19.67 5.111 18.889 4.33 17.74 3.821M20.957 10.23C21.02 11.409 21.02 12.591 20.957 13.77M3.043 10.23C2.982 11.41 2.982 12.592 3.044 13.771M6.26 20.179C5.11 19.671 4.33 18.889 3.82 17.741M6.26 3.82C5.111 4.33 4.33 5.111 3.82 6.26"
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
            d="M13.77 3.043C12.591 2.982 11.409 2.982 10.23 3.043M13.771 20.956C12.592 21.02 11.41 21.02 10.23 20.957M20.18 17.74C19.67 18.89 18.89 19.67 17.741 20.18M20.18 6.259C19.67 5.111 18.889 4.33 17.74 3.821M20.957 10.23C21.02 11.409 21.02 12.591 20.957 13.77M3.043 10.23C2.982 11.41 2.982 12.592 3.044 13.771M6.26 20.179C5.11 19.671 4.33 18.889 3.82 17.741M6.26 3.82C5.111 4.33 4.33 5.111 3.82 6.26"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`SquircleDashed doesn't support ${type}`);
    return null;
  });

SquircleDashed.displayName = "SquircleDashed";

SquircleDashed.metadata = {
  name: "SquircleDashed",
  category: "stroke/shapes",
  tags: ["squircle", "dashed", "icon"],
  description: "SquircleDashed icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquircleDashed;
