import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface CompassProps extends IconProps {
  type?: "stroke";
}

export const Compass: IconComponent<CompassProps> = React.forwardRef<
  SVGSVGElement,
  CompassProps
>(function Compass(
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
          d="M16.2398 7.76001L14.4358 13.171C14.3376 13.4656 14.1722 13.7333 13.9526 13.9528C13.733 14.1724 13.4653 14.3378 13.1708 14.436L7.75977 16.24L9.56377 10.829C9.66195 10.5344 9.82737 10.2668 10.0469 10.0472C10.2665 9.82762 10.5342 9.66219 10.8288 9.56401L16.2398 7.76001Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
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
          d="M16.24 7.76001L14.436 13.171C14.3378 13.4656 14.1724 13.7333 13.9528 13.9528C13.7333 14.1724 13.4656 14.3378 13.171 14.436L7.76001 16.24L9.56401 10.829C9.66219 10.5344 9.82762 10.2668 10.0472 10.0472C10.2668 9.82762 10.5344 9.66219 10.829 9.56401L16.24 7.76001Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Compass doesn't support ${type}`);
  return null;
});

Compass.displayName = "Compass";

Compass.metadata = {
  name: "Compass",
  category: "stroke/travel",
  tags: ["compass", "icon"],
  description: "Compass icon from stroke/travel category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Compass;
