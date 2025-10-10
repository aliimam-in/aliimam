import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ImageMinusProps extends IconProps {
  type?: "stroke";
}

export const ImageMinus: IconComponent<ImageMinusProps> = React.forwardRef<
  SVGSVGElement,
  ImageMinusProps
>(function ImageMinus(
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
          d="M21 9V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H12M16 5H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.105 11 11 10.105 11 9 11 7.895 10.105 7 9 7 7.895 7 7 7.895 7 9 7 10.105 7.895 11 9 11ZM21 15 17.914 11.914C17.539 11.539 17.03 11.328 16.5 11.328 15.97 11.328 15.461 11.539 15.086 11.914L6 21"
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
          d="M21 9V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H12M16 5H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.105 11 11 10.105 11 9 11 7.895 10.105 7 9 7 7.895 7 7 7.895 7 9 7 10.105 7.895 11 9 11ZM21 15 17.914 11.914C17.539 11.539 17.03 11.328 16.5 11.328 15.97 11.328 15.461 11.539 15.086 11.914L6 21"
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
          d="M21 9V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H12M16 5H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.105 11 11 10.105 11 9 11 7.895 10.105 7 9 7 7.895 7 7 7.895 7 9 7 10.105 7.895 11 9 11ZM21 15 17.914 11.914C17.539 11.539 17.03 11.328 16.5 11.328 15.97 11.328 15.461 11.539 15.086 11.914L6 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ImageMinus doesn't support ${type}`);
  return null;
});

ImageMinus.displayName = "ImageMinus";

ImageMinus.metadata = {
  name: "ImageMinus",
  category: "stroke/photography",
  tags: ["image", "minus", "icon"],
  description: "ImageMinus icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ImageMinus;
