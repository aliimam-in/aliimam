import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FigmaProps extends IconProps {
  type?: "icon";
}

export const Figma: IconComponent<FigmaProps> = React.forwardRef<
  SVGSVGElement,
  FigmaProps
>(function Figma(
  {
    color = "currentColor",
    fill,
    size = 20,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    strokeDasharray,
    opacity,
    className,
    type = "icon",
    ...props
  },
  forwardedRef,
) {
  if (type === "icon") {
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
          d="M7.95061 24C10.1313 24 11.9012 22.208 11.9012 20V16H7.95061C5.76988 16 4 17.792 4 20C4 22.208 5.76988 24 7.95061 24Z"
          fill="#0acf83"
        />
        <path
          d="M4 12C4 9.79199 5.76988 8 7.95061 8H11.9012V16H7.95061C5.76988 16 4 14.208 4 12Z"
          fill="#a259ff"
        />
        <path
          d="M4 3.99999C4 1.792 5.76988 0 7.95061 0H11.9012V8.00001H7.95061C5.76988 8.00001 4 6.20799 4 3.99999Z"
          fill="#f24e1e"
        />
        <path
          d="M11.9012 0H15.8519C18.0326 0 19.8025 1.792 19.8025 3.99999C19.8025 6.20799 18.0326 8.00001 15.8519 8.00001H11.9012V0Z"
          fill="#ff7262"
        />
        <path
          d="M19.8025 12C19.8025 14.208 18.0326 16 15.8519 16C13.6711 16 11.9012 14.208 11.9012 12C11.9012 9.79199 13.6711 8 15.8519 8C18.0326 8 19.8025 9.79199 19.8025 12Z"
          fill="#1abcfe"
        />
      </svg>
    );
  }

  if (type === "icon") {
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
          d="M7.95061 24C10.1313 24 11.9012 22.208 11.9012 20V16H7.95061C5.76988 16 4 17.792 4 20C4 22.208 5.76988 24 7.95061 24Z"
          fill="#0acf83"
        />
        <path
          d="M4 12C4 9.79199 5.76988 8 7.95061 8H11.9012V16H7.95061C5.76988 16 4 14.208 4 12Z"
          fill="#a259ff"
        />
        <path
          d="M4 3.99999C4 1.792 5.76988 0 7.95061 0H11.9012V8.00001H7.95061C5.76988 8.00001 4 6.20799 4 3.99999Z"
          fill="#f24e1e"
        />
        <path
          d="M11.9012 0H15.8519C18.0326 0 19.8025 1.792 19.8025 3.99999C19.8025 6.20799 18.0326 8.00001 15.8519 8.00001H11.9012V0Z"
          fill="#ff7262"
        />
        <path
          d="M19.8025 12C19.8025 14.208 18.0326 16 15.8519 16C13.6711 16 11.9012 14.208 11.9012 12C11.9012 9.79199 13.6711 8 15.8519 8C18.0326 8 19.8025 9.79199 19.8025 12Z"
          fill="#1abcfe"
        />
      </svg>
    );
  }

  console.error(`Figma doesn't support ${type}`);
  return null;
});

Figma.displayName = "Figma";

Figma.metadata = {
  name: "Figma",
  category: "icon/software",
  tags: ["figma", "icon"],
  description: "Figma icon from icon/software category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Figma;
