import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Erfg: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Erfg(
    {
      color = "currentColor",
      fill,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      variant = "stroke",
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}
      >
        <path d="M7.5 1L15 14H0L7.5 1Z" fill={color} />
      </svg>
    );
  },
);

Erfg.displayName = "Erfg";

Erfg.metadata = {
  name: "Erfg",
  category: "logos",
  tags: ["erfg", "brand", "company", "logo"],
  description: "Erfg icon from logos category",
  variants: ["stroke", "solid"],
} as IconMetadata;

export default Erfg;
