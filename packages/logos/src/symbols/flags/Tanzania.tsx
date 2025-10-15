import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tanzania: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Tanzania(
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
      viewBox="0 0 32 32"
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
        d="M2.316 26.947L29.684 5.053C28.973 4.405 28.037 4 27 4H5C2.791 4 1 5.791 1 8V24C1 25.172 1.513 26.216 2.316 26.947Z"
        fill="#55b44b"
      />
      <path
        d="M29.684 5.05298L2.31599 26.947C3.02699 27.595 3.96299 28 4.99999 28H27C29.209 28 31 26.209 31 24V7.99998C31 6.82798 30.487 5.78398 29.684 5.05298Z"
        fill="#4aa2d9"
      />
      <path
        d="M27 4H25.397L1 23.518V24C1 26.209 2.791 28 5 28H6.603L31 8.482V8C31 5.791 29.209 4 27 4Z"
        fill="#f6d44a"
      />
      <path
        d="M27 4H26.998L1.07401 24.739C1.42101 26.594 3.04401 28 5.00001 28H5.00201L30.926 7.261C30.579 5.406 28.956 4 27 4Z"
        fill="currentColor"
      />
    </svg>
  );
});

Tanzania.displayName = "Tanzania";

Tanzania.metadata = {
  name: "Tanzania",
  category: "symbols/flags",
  tags: ["tanzania", "icon"],
  description: "Tanzania icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tanzania;
