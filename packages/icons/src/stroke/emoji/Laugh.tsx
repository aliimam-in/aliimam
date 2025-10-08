import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Laugh: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Laugh(
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
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 13C17.761 14.412 17.025 15.693 15.925 16.61 14.825 17.527 13.432 18.02 12 18 10.568 18.02 9.176 17.527 8.075 16.61 6.975 15.693 6.239 14.412 6 13H18ZM9 9H9.01M15 9H15.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Laugh.displayName = "Laugh";

Laugh.metadata = {
  name: "Laugh",
  category: "stroke/emoji",
  tags: ["laugh", "icon"],
  description: "Laugh icon from stroke/emoji category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Laugh;
