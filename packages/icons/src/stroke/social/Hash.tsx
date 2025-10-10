import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HashProps extends IconProps {
  type?: "stroke";
}

export const Hash: IconComponent<HashProps> = React.forwardRef<
  SVGSVGElement,
  HashProps
>(function Hash(
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
          d="M4 9H20M4 15H20M10 3 8 21M16 3 14 21"
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
          d="M4 9H20M4 15H20M10 3 8 21M16 3 14 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Hash doesn't support ${type}`);
  return null;
});

Hash.displayName = "Hash";

Hash.metadata = {
  name: "Hash",
  category: "stroke/social",
  tags: ["hash", "icon"],
  description: "Hash icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Hash;
