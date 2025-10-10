import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FilmProps extends IconProps {
  type?: "stroke";
}

export const Film: IconComponent<FilmProps> = React.forwardRef<
  SVGSVGElement,
  FilmProps
>(function Film(
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
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM7 3V21M3 7.5H7M3 12H21M3 16.5H7M17 3V21M17 7.5H21M17 16.5H21"
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
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM7 3V21M3 7.5H7M3 12H21M3 16.5H7M17 3V21M17 7.5H21M17 16.5H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Film doesn't support ${type}`);
  return null;
});

Film.displayName = "Film";

Film.metadata = {
  name: "Film",
  category: "stroke/photography",
  tags: ["film", "icon"],
  description: "Film icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Film;
