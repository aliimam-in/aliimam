import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CircleArrowOutDownLeftProps extends IconProps {
  type?: "stroke";
}

export const CircleArrowOutDownLeft: IconComponent<CircleArrowOutDownLeftProps> =
  React.forwardRef<SVGSVGElement, CircleArrowOutDownLeftProps>(
    function CircleArrowOutDownLeft(
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
              d="M2 12C2 10.022 2.586 8.089 3.685 6.444 4.784 4.8 6.346 3.518 8.173 2.761 10 2.004 12.011 1.806 13.951 2.192 15.891 2.578 17.673 3.53 19.071 4.929 20.47 6.327 21.422 8.109 21.808 10.049 22.194 11.989 21.996 14 21.239 15.827 20.482 17.654 19.2 19.216 17.556 20.315 15.911 21.414 13.978 22 12 22M2 22 12 12M8 22H2V16"
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
              d="M2 12C2 10.022 2.586 8.089 3.685 6.444 4.784 4.8 6.346 3.518 8.173 2.761 10 2.004 12.011 1.806 13.951 2.192 15.891 2.578 17.673 3.53 19.071 4.929 20.47 6.327 21.422 8.109 21.808 10.049 22.194 11.989 21.996 14 21.239 15.827 20.482 17.654 19.2 19.216 17.556 20.315 15.911 21.414 13.978 22 12 22M2 22 12 12M8 22H2V16"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`CircleArrowOutDownLeft doesn't support ${type}`);
      return null;
    },
  );

CircleArrowOutDownLeft.displayName = "CircleArrowOutDownLeft";

CircleArrowOutDownLeft.metadata = {
  name: "CircleArrowOutDownLeft",
  category: "stroke/navigation",
  tags: ["circle", "arrow", "out", "down", "left", "icon"],
  description: "CircleArrowOutDownLeft icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleArrowOutDownLeft;
