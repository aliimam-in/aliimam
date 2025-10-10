import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RedoProps extends IconProps {
  type?: "stroke";
}

export const Redo: IconComponent<RedoProps> = React.forwardRef<
  SVGSVGElement,
  RedoProps
>(function Redo(
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
          d="M21 7V13H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 17C3 14.6131 3.94821 12.3239 5.63604 10.636C7.32387 8.94821 9.61305 8 12 8C14.2149 8.00226 16.3511 8.82116 18 10.3L21 13"
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
          d="M21 7V13H15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 17C3 14.6131 3.94821 12.3239 5.63604 10.636C7.32387 8.94821 9.61305 8 12 8C14.2149 8.00226 16.3511 8.82116 18 10.3L21 13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Redo doesn't support ${type}`);
  return null;
});

Redo.displayName = "Redo";

Redo.metadata = {
  name: "Redo",
  category: "stroke/textFormatting",
  tags: ["redo", "icon"],
  description: "Redo icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Redo;
