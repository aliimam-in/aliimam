import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Erfg: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Erfg(
    {
      color = "currentColor",
      fill,
      size,
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
        <path d="M7.5 1L15 14H0L7.5 1Z" fill="currentColor" />
      </svg>
    );
  },
);

Erfg.displayName = "Erfg";

Erfg.metadata = {
  name: "Erfg",
  category: "wordmark/ai",
  tags: ["erfg", "icon"],
  description: "Erfg icon from wordmark/ai category",
  type: ["stroke", "solid"],
} as IconMetadata;

export default Erfg;
