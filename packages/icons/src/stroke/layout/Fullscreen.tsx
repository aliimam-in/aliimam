import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FullscreenProps extends IconProps {
  type?: "stroke";
}

export const Fullscreen: IconComponent<FullscreenProps> = React.forwardRef<
  SVGSVGElement,
  FullscreenProps
>(function Fullscreen(
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
          d="M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M16 8H8C7.448 8 7 8.448 7 9V15C7 15.552 7.448 16 8 16H16C16.552 16 17 15.552 17 15V9C17 8.448 16.552 8 16 8Z"
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
          d="M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M16 8H8C7.448 8 7 8.448 7 9V15C7 15.552 7.448 16 8 16H16C16.552 16 17 15.552 17 15V9C17 8.448 16.552 8 16 8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Fullscreen doesn't support ${type}`);
  return null;
});

Fullscreen.displayName = "Fullscreen";

Fullscreen.metadata = {
  name: "Fullscreen",
  category: "stroke/layout",
  tags: ["fullscreen", "icon"],
  description: "Fullscreen icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Fullscreen;
