import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Network: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Network(
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
        d="M21 16H17C16.448 16 16 16.448 16 17V21C16 21.552 16.448 22 17 22H21C21.552 22 22 21.552 22 21V17C22 16.448 21.552 16 21 16ZM7 16H3C2.448 16 2 16.448 2 17V21C2 21.552 2.448 22 3 22H7C7.552 22 8 21.552 8 21V17C8 16.448 7.552 16 7 16ZM14 2H10C9.448 2 9 2.448 9 3V7C9 7.552 9.448 8 10 8H14C14.552 8 15 7.552 15 7V3C15 2.448 14.552 2 14 2ZM5 16V13C5 12.735 5.105 12.48 5.293 12.293 5.48 12.105 5.735 12 6 12H18C18.265 12 18.52 12.105 18.707 12.293 18.895 12.48 19 12.735 19 13V16M12 12V8"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Network.displayName = "Network";

Network.metadata = {
  name: "Network",
  category: "stroke/codingDevelopment",
  tags: ["network", "icon"],
  description: "Network icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Network;
