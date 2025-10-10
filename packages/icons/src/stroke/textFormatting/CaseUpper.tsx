import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CaseUpperProps extends IconProps {
  type?: "stroke";
}

export const CaseUpper: IconComponent<CaseUpperProps> = React.forwardRef<
  SVGSVGElement,
  CaseUpperProps
>(function CaseUpper(
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
          d="M15 11H19.5C20.163 11 20.799 11.263 21.268 11.732 21.737 12.201 22 12.837 22 13.5 22 14.163 21.737 14.799 21.268 15.268 20.799 15.737 20.163 16 19.5 16H15.5C15.367 16 15.24 15.947 15.146 15.854 15.053 15.76 15 15.633 15 15.5V6.5C15 6.367 15.053 6.24 15.146 6.146 15.24 6.053 15.367 6 15.5 6H18.5C19.163 6 19.799 6.263 20.268 6.732 20.737 7.201 21 7.837 21 8.5 21 9.163 20.737 9.799 20.268 10.268 19.799 10.737 19.163 11 18.5 11M2 16 6.039 6.31C6.077 6.219 6.141 6.141 6.223 6.086 6.305 6.032 6.402 6.002 6.501 6.002 6.599 6.002 6.696 6.032 6.778 6.086 6.86 6.141 6.924 6.219 6.962 6.31L11 16M3.304 13H9.696"
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
          d="M15 11H19.5C20.163 11 20.799 11.263 21.268 11.732 21.737 12.201 22 12.837 22 13.5 22 14.163 21.737 14.799 21.268 15.268 20.799 15.737 20.163 16 19.5 16H15.5C15.367 16 15.24 15.947 15.146 15.854 15.053 15.76 15 15.633 15 15.5V6.5C15 6.367 15.053 6.24 15.146 6.146 15.24 6.053 15.367 6 15.5 6H18.5C19.163 6 19.799 6.263 20.268 6.732 20.737 7.201 21 7.837 21 8.5 21 9.163 20.737 9.799 20.268 10.268 19.799 10.737 19.163 11 18.5 11M2 16 6.039 6.31C6.077 6.219 6.141 6.141 6.223 6.086 6.305 6.032 6.402 6.002 6.501 6.002 6.599 6.002 6.696 6.032 6.778 6.086 6.86 6.141 6.924 6.219 6.962 6.31L11 16M3.304 13H9.696"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CaseUpper doesn't support ${type}`);
  return null;
});

CaseUpper.displayName = "CaseUpper";

CaseUpper.metadata = {
  name: "CaseUpper",
  category: "stroke/textFormatting",
  tags: ["case", "upper", "icon"],
  description: "CaseUpper icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CaseUpper;
