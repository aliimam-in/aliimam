import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BinocularsProps extends IconProps {
  type?: "stroke";
}

export const Binoculars: IconComponent<BinocularsProps> = React.forwardRef<
  SVGSVGElement,
  BinocularsProps
>(function Binoculars(
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
          d="M10 10H14M19 7V4C19 3.735 18.895 3.48 18.707 3.293 18.52 3.105 18.265 3 18 3H16C15.735 3 15.48 3.105 15.293 3.293 15.105 3.48 15 3.735 15 4V7M20 21C20.53 21 21.039 20.789 21.414 20.414 21.789 20.039 22 19.53 22 19V15.149C22 13.759 20 12.187 20 10.32V8C20 7.735 19.895 7.48 19.707 7.293 19.52 7.105 19.265 7 19 7H15C14.735 7 14.48 7.105 14.293 7.293 14.105 7.48 14 7.735 14 8V19C14 19.53 14.211 20.039 14.586 20.414 14.961 20.789 15.47 21 16 21H20ZM22 16H2M4 21C3.47 21 2.961 20.789 2.586 20.414 2.211 20.039 2 19.53 2 19V15.149C2 13.759 4 12.187 4 10.32V8C4 7.735 4.105 7.48 4.293 7.293 4.48 7.105 4.735 7 5 7H9C9.265 7 9.52 7.105 9.707 7.293 9.895 7.48 10 7.735 10 8V19C10 19.53 9.789 20.039 9.414 20.414 9.039 20.789 8.53 21 8 21H4ZM9 7V4C9 3.735 8.895 3.48 8.707 3.293 8.52 3.105 8.265 3 8 3H6C5.735 3 5.48 3.105 5.293 3.293 5.105 3.48 5 3.735 5 4V7"
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
          d="M10 10H14M19 7V4C19 3.735 18.895 3.48 18.707 3.293 18.52 3.105 18.265 3 18 3H16C15.735 3 15.48 3.105 15.293 3.293 15.105 3.48 15 3.735 15 4V7M20 21C20.53 21 21.039 20.789 21.414 20.414 21.789 20.039 22 19.53 22 19V15.149C22 13.759 20 12.187 20 10.32V8C20 7.735 19.895 7.48 19.707 7.293 19.52 7.105 19.265 7 19 7H15C14.735 7 14.48 7.105 14.293 7.293 14.105 7.48 14 7.735 14 8V19C14 19.53 14.211 20.039 14.586 20.414 14.961 20.789 15.47 21 16 21H20ZM22 16H2M4 21C3.47 21 2.961 20.789 2.586 20.414 2.211 20.039 2 19.53 2 19V15.149C2 13.759 4 12.187 4 10.32V8C4 7.735 4.105 7.48 4.293 7.293 4.48 7.105 4.735 7 5 7H9C9.265 7 9.52 7.105 9.707 7.293 9.895 7.48 10 7.735 10 8V19C10 19.53 9.789 20.039 9.414 20.414 9.039 20.789 8.53 21 8 21H4ZM9 7V4C9 3.735 8.895 3.48 8.707 3.293 8.52 3.105 8.265 3 8 3H6C5.735 3 5.48 3.105 5.293 3.293 5.105 3.48 5 3.735 5 4V7"
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
          d="M10 10H14M19 7V4C19 3.735 18.895 3.48 18.707 3.293 18.52 3.105 18.265 3 18 3H16C15.735 3 15.48 3.105 15.293 3.293 15.105 3.48 15 3.735 15 4V7M20 21C20.53 21 21.039 20.789 21.414 20.414 21.789 20.039 22 19.53 22 19V15.149C22 13.759 20 12.187 20 10.32V8C20 7.735 19.895 7.48 19.707 7.293 19.52 7.105 19.265 7 19 7H15C14.735 7 14.48 7.105 14.293 7.293 14.105 7.48 14 7.735 14 8V19C14 19.53 14.211 20.039 14.586 20.414 14.961 20.789 15.47 21 16 21H20ZM22 16H2M4 21C3.47 21 2.961 20.789 2.586 20.414 2.211 20.039 2 19.53 2 19V15.149C2 13.759 4 12.187 4 10.32V8C4 7.735 4.105 7.48 4.293 7.293 4.48 7.105 4.735 7 5 7H9C9.265 7 9.52 7.105 9.707 7.293 9.895 7.48 10 7.735 10 8V19C10 19.53 9.789 20.039 9.414 20.414 9.039 20.789 8.53 21 8 21H4ZM9 7V4C9 3.735 8.895 3.48 8.707 3.293 8.52 3.105 8.265 3 8 3H6C5.735 3 5.48 3.105 5.293 3.293 5.105 3.48 5 3.735 5 4V7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Binoculars doesn't support ${type}`);
  return null;
});

Binoculars.displayName = "Binoculars";

Binoculars.metadata = {
  name: "Binoculars",
  category: "stroke/navigation",
  tags: ["binoculars", "icon"],
  description: "Binoculars icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Binoculars;
