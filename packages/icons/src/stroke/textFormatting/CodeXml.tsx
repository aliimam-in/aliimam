import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CodeXmlProps extends IconProps {
  type?: "stroke";
}

export const CodeXml: IconComponent<CodeXmlProps> = React.forwardRef<
  SVGSVGElement,
  CodeXmlProps
>(function CodeXml(
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
          d="M18 16 22 12 18 8M6 8 2 12 6 16M14.5 4 9.5 20"
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
          d="M18 16 22 12 18 8M6 8 2 12 6 16M14.5 4 9.5 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`CodeXml doesn't support ${type}`);
  return null;
});

CodeXml.displayName = "CodeXml";

CodeXml.metadata = {
  name: "CodeXml",
  category: "stroke/textFormatting",
  tags: ["code", "xml", "icon"],
  description: "CodeXml icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CodeXml;
