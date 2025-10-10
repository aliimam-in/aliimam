import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Section: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Section(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M16 5C16 4.20435 15.5786 3.44129 14.8284 2.87868C14.0783 2.31607 13.0609 2 12 2C10.9391 2 9.92172 2.31607 9.17157 2.87868C8.42143 3.44129 8 4.20435 8 5C8 9 16 8 16 12C16 12.7956 15.5786 13.5587 14.8284 14.1213C14.0783 14.6839 13.0609 15 12 15C10.9391 15 9.92172 14.6839 9.17157 14.1213C8.42143 13.5587 8 12.7956 8 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 19C8 19.7956 8.42143 20.5587 9.17157 21.1213C9.92172 21.6839 10.9391 22 12 22C13.0609 22 14.0783 21.6839 14.8284 21.1213C15.5786 20.5587 16 19.7956 16 19C16 15 8 16 8 12C8 11.2044 8.42143 10.4413 9.17157 9.87868C9.92172 9.31607 10.9391 9 12 9C13.0609 9 14.0783 9.31607 14.8284 9.87868C15.5786 10.4413 16 11.2044 16 12"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Section.displayName = "Section";

Section.metadata = {
  name: "Section",
  category: "stroke/textFormatting",
  tags: ["section", "icon"],
  description: "Section icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Section;
