import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CircleDotDashedProps extends IconProps {
  type?: "stroke";
}

export const CircleDotDashed: IconComponent<CircleDotDashedProps> =
  React.forwardRef<SVGSVGElement, CircleDotDashedProps>(
    function CircleDotDashed(
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
              d="M10.1 2.18C11.355 1.935 12.645 1.935 13.9 2.18M17.6 3.71C18.662 4.428 19.576 5.345 20.29 6.41M21.82 10.1C22.064 11.355 22.064 12.645 21.82 13.9M20.29 17.6C19.572 18.662 18.655 19.576 17.59 20.29M13.9 21.82C12.645 22.064 11.355 22.064 10.1 21.82M6.4 20.29C5.338 19.572 4.424 18.655 3.71 17.59M2.18 13.9C1.935 12.645 1.935 11.355 2.18 10.1M3.71 6.4C4.428 5.338 5.345 4.424 6.41 3.71M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13Z"
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
              d="M10.1 2.18C11.355 1.935 12.645 1.935 13.9 2.18M17.6 3.71C18.662 4.428 19.576 5.345 20.29 6.41M21.82 10.1C22.065 11.355 22.065 12.645 21.82 13.9M20.29 17.6C19.572 18.662 18.655 19.576 17.59 20.29M13.9 21.82C12.645 22.064 11.355 22.064 10.1 21.82M6.4 20.29C5.338 19.572 4.424 18.655 3.71 17.59M2.18 13.9C1.935 12.645 1.935 11.355 2.18 10.1M3.71 6.4C4.428 5.338 5.345 4.424 6.41 3.71M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`CircleDotDashed doesn't support ${type}`);
      return null;
    },
  );

CircleDotDashed.displayName = "CircleDotDashed";

CircleDotDashed.metadata = {
  name: "CircleDotDashed",
  category: "stroke/shapes",
  tags: ["circle", "dot", "dashed", "icon"],
  description: "CircleDotDashed icon from stroke/shapes category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleDotDashed;
