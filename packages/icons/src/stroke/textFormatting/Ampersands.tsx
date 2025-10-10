import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface AmpersandsProps extends IconProps {
  type?: "stroke";
}

export const Ampersands: IconComponent<AmpersandsProps> = React.forwardRef<
  SVGSVGElement,
  AmpersandsProps
>(function Ampersands(
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
          d="M10 17C5 14 3 10 3 8 3 7.47 3.211 6.961 3.586 6.586 3.961 6.211 4.47 6 5 6 5.53 6 6.039 6.211 6.414 6.586 6.789 6.961 7 7.47 7 8 7 10.5 2 10.5 2 14 2 15.7 3.3 17 5 17 7.8 17 10 14.8 10 12M22 17C17 14 15 10 15 8 15 7.47 15.211 6.961 15.586 6.586 15.961 6.211 16.47 6 17 6 17.53 6 18.039 6.211 18.414 6.586 18.789 6.961 19 7.47 19 8 19 10.5 14 10.5 14 14 14 15.7 15.3 17 17 17 19.8 17 22 14.8 22 12"
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
          d="M10 17C5 14 3 10 3 8 3 7.47 3.211 6.961 3.586 6.586 3.961 6.211 4.47 6 5 6 5.53 6 6.039 6.211 6.414 6.586 6.789 6.961 7 7.47 7 8 7 10.5 2 10.5 2 14 2 15.7 3.3 17 5 17 7.8 17 10 14.8 10 12M22 17C17 14 15 10 15 8 15 7.47 15.211 6.961 15.586 6.586 15.961 6.211 16.47 6 17 6 17.53 6 18.039 6.211 18.414 6.586 18.789 6.961 19 7.47 19 8 19 10.5 14 10.5 14 14 14 15.7 15.3 17 17 17 19.8 17 22 14.8 22 12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Ampersands doesn't support ${type}`);
  return null;
});

Ampersands.displayName = "Ampersands";

Ampersands.metadata = {
  name: "Ampersands",
  category: "stroke/textFormatting",
  tags: ["ampersands", "icon"],
  description: "Ampersands icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ampersands;
