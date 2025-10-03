import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Kanban: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Kanban(
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
          d="M5 3V17M12 3V11M19 3V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Kanban.displayName = "Kanban";

Kanban.metadata = {
  name: "Kanban",
  category: "stroke/charts",
  tags: ["kanban", "icon"],
  description: "Kanban icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Kanban;
