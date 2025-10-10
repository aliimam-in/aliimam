import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TicketPlus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TicketPlus(
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
        d="M2 9C2.796 9 3.559 9.316 4.121 9.879 4.684 10.441 5 11.204 5 12 5 12.796 4.684 13.559 4.121 14.121 3.559 14.684 2.796 15 2 15V17C2 17.53 2.211 18.039 2.586 18.414 2.961 18.789 3.47 19 4 19H20C20.53 19 21.039 18.789 21.414 18.414 21.789 18.039 22 17.53 22 17V15C21.204 15 20.441 14.684 19.879 14.121 19.316 13.559 19 12.796 19 12 19 11.204 19.316 10.441 19.879 9.879 20.441 9.316 21.204 9 22 9V7C22 6.47 21.789 5.961 21.414 5.586 21.039 5.211 20.53 5 20 5H4C3.47 5 2.961 5.211 2.586 5.586 2.211 5.961 2 6.47 2 7V9ZM9 12H15M12 9V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TicketPlus.displayName = "TicketPlus";

TicketPlus.metadata = {
  name: "TicketPlus",
  category: "stroke/transportation",
  tags: ["ticket", "plus", "icon"],
  description: "TicketPlus icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TicketPlus;
