import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CircleArrowOutUpLeftProps extends IconProps {
  type?: "stroke";
}

export const CircleArrowOutUpLeft: IconComponent<CircleArrowOutUpLeftProps> =
  React.forwardRef<SVGSVGElement, CircleArrowOutUpLeftProps>(
    function CircleArrowOutUpLeft(
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
              d="M2 8V2H8M2 2 12 12M12 2C13.978 2 15.911 2.586 17.556 3.685 19.2 4.784 20.482 6.346 21.239 8.173 21.996 10 22.194 12.011 21.808 13.951 21.422 15.891 20.47 17.673 19.071 19.071 17.673 20.47 15.891 21.422 13.951 21.808 12.011 22.194 10 21.996 8.173 21.239 6.346 20.482 4.784 19.2 3.685 17.556 2.586 15.911 2 13.978 2 12"
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
              d="M2 8V2H8M2 2 12 12M12 2C13.978 2 15.911 2.586 17.556 3.685 19.2 4.784 20.482 6.346 21.239 8.173 21.996 10 22.194 12.011 21.808 13.951 21.422 15.891 20.47 17.673 19.071 19.071 17.673 20.47 15.891 21.422 13.951 21.808 12.011 22.194 10 21.996 8.173 21.239 6.346 20.482 4.784 19.2 3.685 17.556 2.586 15.911 2 13.978 2 12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`CircleArrowOutUpLeft doesn't support ${type}`);
      return null;
    },
  );

CircleArrowOutUpLeft.displayName = "CircleArrowOutUpLeft";

CircleArrowOutUpLeft.metadata = {
  name: "CircleArrowOutUpLeft",
  category: "stroke/codingDevelopment",
  tags: ["circle", "arrow", "out", "up", "left", "icon"],
  description:
    "CircleArrowOutUpLeft icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleArrowOutUpLeft;
