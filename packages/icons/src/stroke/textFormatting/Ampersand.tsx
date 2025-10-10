import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AmpersandProps extends IconProps {
  type?: "stroke";
}

export const Ampersand: IconComponent<AmpersandProps> = React.forwardRef<
  SVGSVGElement,
  AmpersandProps
>(function Ampersand(
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
          d="M17.5 12C17.5 16.4 13.9 20 9.5 20 8.307 20 7.162 19.526 6.318 18.682 5.474 17.838 5 16.694 5 15.5 5 9.5 13 11.5 13 7 13 6.204 12.684 5.441 12.121 4.879 11.559 4.316 10.796 4 10 4 9.204 4 8.441 4.316 7.879 4.879 7.316 5.441 7 6.204 7 7 7 10 9.5 15.5 19 20M16 12H19"
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
          d="M17.5 12C17.5 16.4 13.9 20 9.5 20 8.307 20 7.162 19.526 6.318 18.682 5.474 17.838 5 16.694 5 15.5 5 9.5 13 11.5 13 7 13 6.204 12.684 5.441 12.121 4.879 11.559 4.316 10.796 4 10 4 9.204 4 8.441 4.316 7.879 4.879 7.316 5.441 7 6.204 7 7 7 10 9.5 15.5 19 20M16 12H19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Ampersand doesn't support ${type}`);
  return null;
});

Ampersand.displayName = "Ampersand";

Ampersand.metadata = {
  name: "Ampersand",
  category: "stroke/textFormatting",
  tags: ["ampersand", "icon"],
  description: "Ampersand icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ampersand;
