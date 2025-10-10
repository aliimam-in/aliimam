import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ImageUpscaleProps extends IconProps {
  type?: "stroke";
}

export const ImageUpscale: IconComponent<ImageUpscaleProps> = React.forwardRef<
  SVGSVGElement,
  ImageUpscaleProps
>(function ImageUpscale(
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
          d="M16 3H21V8M17 21H19C19.53 21 20.039 20.789 20.414 20.414 20.789 20.039 21 19.53 21 19M21 12V15M21 3 16 8M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3M5 21 9.144 16.856C9.256 16.744 9.39 16.654 9.537 16.593 9.684 16.533 9.841 16.501 10 16.501 10.159 16.501 10.316 16.533 10.463 16.593 10.61 16.654 10.744 16.744 10.856 16.856L13 19M9 3H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11H4C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 20.5523 13 20V12C13 11.4477 12.5523 11 12 11Z"
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
          d="M16 3H21V8M17 21H19C19.53 21 20.039 20.789 20.414 20.414 20.789 20.039 21 19.53 21 19M21 12V15M21 3 16 8M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3M5 21 9.144 16.856C9.256 16.744 9.39 16.654 9.537 16.593 9.684 16.533 9.841 16.501 10 16.501 10.159 16.501 10.316 16.533 10.463 16.593 10.61 16.654 10.744 16.744 10.856 16.856L13 19M9 3H12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11H4C3.44772 11 3 11.4477 3 12V20C3 20.5523 3.44772 21 4 21H12C12.5523 21 13 20.5523 13 20V12C13 11.4477 12.5523 11 12 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ImageUpscale doesn't support ${type}`);
  return null;
});

ImageUpscale.displayName = "ImageUpscale";

ImageUpscale.metadata = {
  name: "ImageUpscale",
  category: "stroke/photography",
  tags: ["image", "upscale", "icon"],
  description: "ImageUpscale icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ImageUpscale;
