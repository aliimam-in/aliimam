import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BriefcaseConveyorBeltProps extends IconProps {
  type?: "stroke";
}

export const BriefcaseConveyorBelt: IconComponent<BriefcaseConveyorBeltProps> =
  React.forwardRef<SVGSVGElement, BriefcaseConveyorBeltProps>(
    function BriefcaseConveyorBelt(
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
        type = "stroke",
        ...props
      },
      forwardedRef,
    ) {
      if (type === "stroke") {
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
              d="M10 20V22M14 20V22M18 20V22M21 20H3M6 20V22M8 16V4C8 3.47 8.211 2.961 8.586 2.586 8.961 2.211 9.47 2 10 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V16"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6H6C4.89543 6 4 6.89543 4 8V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V8C20 6.89543 19.1046 6 18 6Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      if (type === "stroke") {
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
              d="M10 20V22M14 20V22M18 20V22M21 20H3M6 20V22M8 16V4C8 3.47 8.211 2.961 8.586 2.586 8.961 2.211 9.47 2 10 2H14C14.53 2 15.039 2.211 15.414 2.586 15.789 2.961 16 3.47 16 4V16"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6H6C4.89543 6 4 6.89543 4 8V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V8C20 6.89543 19.1046 6 18 6Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BriefcaseConveyorBelt doesn't support ${type}`);
      return null;
    },
  );

BriefcaseConveyorBelt.displayName = "BriefcaseConveyorBelt";

BriefcaseConveyorBelt.metadata = {
  name: "BriefcaseConveyorBelt",
  category: "stroke/transportation",
  tags: ["briefcase", "conveyor", "belt", "icon"],
  description: "BriefcaseConveyorBelt icon from stroke/transportation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BriefcaseConveyorBelt;
