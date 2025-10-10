import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TreeDeciduous: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TreeDeciduous(
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
        d="M8 19C7.142 19.002 6.306 18.728 5.616 18.218 4.925 17.709 4.417 16.991 4.166 16.171 3.915 15.35 3.934 14.471 4.221 13.662 4.508 12.853 5.048 12.159 5.76 11.68 5.321 11.131 5.057 10.463 5.003 9.763 4.949 9.062 5.107 8.361 5.456 7.752 5.806 7.142 6.331 6.652 6.963 6.345 7.595 6.038 8.305 5.928 9 6.03V6C9 5.204 9.316 4.441 9.879 3.879 10.441 3.316 11.204 3 12 3 12.796 3 13.559 3.316 14.121 3.879 14.684 4.441 15 5.204 15 6V6.04C15.695 5.938 16.405 6.048 17.037 6.355 17.669 6.662 18.194 7.152 18.544 7.762 18.893 8.371 19.051 9.072 18.997 9.773 18.943 10.473 18.679 11.141 18.24 11.69 18.948 12.17 19.483 12.865 19.767 13.671 20.051 14.478 20.069 15.354 19.819 16.172 19.568 16.99 19.062 17.706 18.375 18.214 17.687 18.723 16.855 18.999 16 19H8ZM12 19V22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TreeDeciduous.displayName = "TreeDeciduous";

TreeDeciduous.metadata = {
  name: "TreeDeciduous",
  category: "stroke/nature",
  tags: ["tree", "deciduous", "icon"],
  description: "TreeDeciduous icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TreeDeciduous;
