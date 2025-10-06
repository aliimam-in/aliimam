import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tickets: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Tickets(
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
        d="M4.5 8 15.08 2.94C15.2 2.883 15.33 2.85 15.463 2.843 15.596 2.837 15.729 2.857 15.854 2.902 15.978 2.948 16.093 3.018 16.191 3.108 16.288 3.198 16.367 3.307 16.422 3.428L18.5 8M6 10V8M6 14V15M6 19V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 8H4C2.89543 8 2 8.89543 2 10V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V10C22 8.89543 21.1046 8 20 8Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Tickets.displayName = "Tickets";

Tickets.metadata = {
  name: "Tickets",
  category: "stroke/accountsAccess",
  tags: ["tickets", "icon"],
  description: "Tickets icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tickets;
