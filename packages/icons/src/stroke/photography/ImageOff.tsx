import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ImageOffProps extends IconProps {
  type?: "stroke";
}

export const ImageOff: IconComponent<ImageOffProps> = React.forwardRef<
  SVGSVGElement,
  ImageOffProps
>(function ImageOff(
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
          d="M2 2 22 22M10.41 10.41C10.224 10.596 10.004 10.743 9.761 10.844 9.518 10.944 9.258 10.996 8.995 10.996 8.732 10.996 8.472 10.944 8.229 10.844 7.986 10.743 7.766 10.596 7.58 10.41 7.394 10.224 7.247 10.004 7.146 9.761 7.046 9.518 6.994 9.258 6.994 8.995 6.994 8.732 7.046 8.472 7.146 8.229 7.247 7.986 7.394 7.766 7.58 7.58M13.5 13.5 6 21M18 12 21 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.59 3.59C3.404 3.775 3.255 3.994 3.154 4.236 3.053 4.478 3.001 4.738 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H19C19.55 21 20.052 20.78 20.41 20.41M21 15V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H9"
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
          d="M2 2 22 22M10.41 10.41C10.224 10.596 10.004 10.743 9.761 10.844 9.518 10.944 9.258 10.996 8.995 10.996 8.732 10.996 8.472 10.944 8.229 10.844 7.986 10.743 7.766 10.596 7.58 10.41 7.394 10.224 7.247 10.004 7.146 9.761 7.046 9.518 6.994 9.258 6.994 8.995 6.994 8.732 7.046 8.472 7.146 8.229 7.247 7.986 7.394 7.766 7.58 7.58M13.5 13.5 6 21M18 12 21 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.59 3.59C3.404 3.775 3.255 3.994 3.154 4.236 3.053 4.478 3.001 4.738 3 5V19C3 19.531 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H19C19.55 21 20.052 20.78 20.41 20.41M21 15V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H9"
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
          d="M2 2 22 22M10.41 10.41C10.224 10.596 10.004 10.743 9.761 10.844 9.518 10.944 9.258 10.996 8.995 10.996 8.732 10.996 8.472 10.944 8.229 10.844 7.986 10.743 7.766 10.596 7.58 10.41 7.394 10.224 7.247 10.004 7.146 9.761 7.046 9.518 6.994 9.258 6.994 8.995 6.994 8.732 7.046 8.472 7.146 8.229 7.247 7.986 7.394 7.766 7.58 7.58M13.5 13.5 6 21M18 12 21 15"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.59 3.59C3.404 3.775 3.255 3.994 3.154 4.236 3.053 4.478 3.001 4.738 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H19C19.55 21 20.052 20.78 20.41 20.41M21 15V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ImageOff doesn't support ${type}`);
  return null;
});

ImageOff.displayName = "ImageOff";

ImageOff.metadata = {
  name: "ImageOff",
  category: "stroke/photography",
  tags: ["image", "off", "icon"],
  description: "ImageOff icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ImageOff;
