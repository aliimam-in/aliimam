import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract82: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract82(
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
      viewBox="0 0 23 21"
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
        d="M8.15578 0.891723C6.14286 2.0471 4.78299 4.21176 4.78299 6.68877C4.78299 6.75426 4.78635 6.81807 4.78803 6.88188L1.50759 0.891723H8.15578ZM11.9482 13.3624C13.1855 13.2818 14.3322 12.8653 15.2975 12.2037L11.9482 18.3198V13.3624ZM11.0534 13.3624V18.3198L7.70414 12.2037C8.66947 12.8653 9.81615 13.2818 11.0534 13.3624ZM11.0534 12.469C8.05169 12.2406 5.6795 9.73675 5.6795 6.69045C5.6795 3.64415 8.05169 1.14026 11.0534 0.911874V12.469ZM11.9482 0.911874C14.95 1.14026 17.3222 3.64415 17.3222 6.69045C17.3222 9.73675 14.95 12.2406 11.9482 12.469V0.911874ZM21.4924 0.891723L18.212 6.88188C18.2136 6.81807 18.217 6.75426 18.217 6.68877C18.217 4.21176 16.8571 2.0471 14.8442 0.891723H21.4924ZM0 0L11.5 21L23 0H0Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract82.displayName = "Abstract82";

Abstract82.metadata = {
  name: "Abstract82",
  category: "shapes/abstract",
  tags: ["abstract", "82", "icon"],
  description: "Abstract82 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract82;
