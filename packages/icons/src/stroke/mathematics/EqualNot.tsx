import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface EqualNotProps extends IconProps {
  type?: "stroke";
}

export const EqualNot: IconComponent<EqualNotProps> = React.forwardRef<
  SVGSVGElement,
  EqualNotProps
>(function EqualNot(
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
          d="M5 9H19M5 15H19M19 5 5 19"
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
          d="M5 9H19M5 15H19M19 5 5 19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`EqualNot doesn't support ${type}`);
  return null;
});

EqualNot.displayName = "EqualNot";

EqualNot.metadata = {
  name: "EqualNot",
  category: "stroke/mathematics",
  tags: ["equal", "not", "icon"],
  description: "EqualNot icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EqualNot;
