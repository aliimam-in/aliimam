import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PcCaseProps extends IconProps {
  type?: "stroke";
}

export const PcCase: IconComponent<PcCaseProps> = React.forwardRef<
  SVGSVGElement,
  PcCaseProps
>(function PcCase(
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
          d="M17 2H7C5.895 2 5 2.895 5 4V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V4C19 2.895 18.105 2 17 2ZM15 14H15.01M9 6H15M9 10H15"
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
          d="M17 2H7C5.895 2 5 2.895 5 4V20C5 21.105 5.895 22 7 22H17C18.105 22 19 21.105 19 20V4C19 2.895 18.105 2 17 2ZM15 14H15.01M9 6H15M9 10H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PcCase doesn't support ${type}`);
  return null;
});

PcCase.displayName = "PcCase";

PcCase.metadata = {
  name: "PcCase",
  category: "stroke/gaming",
  tags: ["pc", "case", "icon"],
  description: "PcCase icon from stroke/gaming category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PcCase;
