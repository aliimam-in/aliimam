import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ArrowDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ArrowDown(
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
      <path
        d="M11.8535 8.14649C12.0488 8.34175 12.0488 8.65826 11.8535 8.85352L7.85351 12.8535C7.65825 13.0488 7.34174 13.0488 7.14648 12.8535L3.14648 8.85352C2.95121 8.65826 2.95121 8.34175 3.14648 8.14649C3.34174 7.95123 3.65825 7.95123 3.85351 8.14649L6.99999 11.293L6.99999 2.50001C6.99999 2.22387 7.22385 2.00001 7.49999 2.00001C7.77613 2.00001 7.99999 2.22387 7.99999 2.50001L7.99999 11.293L11.1465 8.14649C11.3417 7.95123 11.6582 7.95123 11.8535 8.14649Z"
        fill="#000"
      />
    </svg>
  );
});

ArrowDown.displayName = "ArrowDown";

ArrowDown.metadata = {
  name: "ArrowDown",
  category: "stroke/arrows",
  tags: ["arrow", "down", "icon"],
  description: "ArrowDown icon from stroke/arrows category",
  type: ["stroke", "solid"],
} as IconMetadata;

export default ArrowDown;
