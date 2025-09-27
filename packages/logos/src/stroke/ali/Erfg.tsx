import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ErfgProps extends IconProps {
  type: "stroke" | "solid";
}

export const Erfg: IconComponent<ErfgProps> = React.forwardRef<
  SVGSVGElement,
  ErfgProps
>(function Erfg(
  {
    color = "currentColor",
    fill,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type,
    ...props
  },
  forwardedRef,
) {
  if (type === "stroke") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
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
        <path d="M7.5 1L15 14H0L7.5 1Z" fill={color} />
      </svg>
    );
  }

  if (type === "solid") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
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
        <path d="M7.5 1L15 14H0L7.5 1Z" fill={color} />
      </svg>
    );
  }

  console.error(`Erfg doesn't support ${type}`);
  return null;
});

Erfg.displayName = "Erfg";

Erfg.metadata = {
  name: "Erfg",
  category: "stroke/ali",
  tags: ["erfg", "icon"],
  description: "Erfg icon from stroke/ali category",
  type: ["stroke", "solid"],
} as IconMetadata;

export default Erfg;
