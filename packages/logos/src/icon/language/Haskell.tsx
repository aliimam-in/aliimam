import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Haskell: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Haskell(
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
        d="M4.5 21.5H0.5L6.5 12.5L0.5 3.5H4.5L10.5 12.5L4.5 21.5Z"
        fill="#453a62"
      />
      <path
        d="M10 3.5H6L12 12.5L6 21.5H10L14.08 15.38L18 21.5H22L10 3.5Z"
        fill="#5e5086"
      />
      <path
        d="M17.169 12H23.5V9H15.169L17.169 12ZM20.169 16.5H23.5V13.5H18.169L20.169 16.5Z"
        fill="#8f4e8b"
      />
    </svg>
  );
});

Haskell.displayName = "Haskell";

Haskell.metadata = {
  name: "Haskell",
  category: "icon/language",
  tags: ["haskell", "icon"],
  description: "Haskell icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Haskell;
