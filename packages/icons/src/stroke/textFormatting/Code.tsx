import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CodeProps extends IconProps {
  type?: "stroke";
}

export const Code: IconComponent<CodeProps> = React.forwardRef<
  SVGSVGElement,
  CodeProps
>(function Code(
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
          d="M16 18 22 12 16 6M8 6 2 12 8 18"
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
          d="M16 18 22 12 16 6M8 6 2 12 8 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Code doesn't support ${type}`);
  return null;
});

Code.displayName = "Code";

Code.metadata = {
  name: "Code",
  category: "stroke/textFormatting",
  tags: ["code", "icon"],
  description: "Code icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Code;
