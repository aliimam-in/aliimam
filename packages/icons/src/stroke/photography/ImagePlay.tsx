import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ImagePlayProps extends IconProps {
  type?: "stroke";
}

export const ImagePlay: IconComponent<ImagePlayProps> = React.forwardRef<
  SVGSVGElement,
  ImagePlayProps
>(function ImagePlay(
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
          d="M15 15.003C14.9995 14.8256 15.0462 14.6511 15.1353 14.4977C15.2245 14.3442 15.3528 14.2173 15.5073 14.1298C15.6617 14.0424 15.8366 13.9976 16.0141 14.0001C16.1915 14.0026 16.3651 14.0523 16.517 14.144L21.514 17.141C21.6628 17.2297 21.786 17.3555 21.8715 17.506C21.9571 17.6566 22.002 17.8268 22.002 18C22.002 18.1732 21.9571 18.3434 21.8715 18.494C21.786 18.6446 21.6628 18.7704 21.514 18.859L16.517 21.856C16.365 21.9478 16.1913 21.9975 16.0138 21.9999C15.8363 22.0024 15.6613 21.9575 15.5068 21.87C15.3524 21.7824 15.224 21.6553 15.1349 21.5017C15.0459 21.3481 14.9993 21.1736 15 20.996V15.003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12.17V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H11M6 21 11 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
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
          d="M15 15.003C14.9995 14.8256 15.0462 14.6511 15.1353 14.4977C15.2245 14.3442 15.3528 14.2173 15.5073 14.1298C15.6617 14.0424 15.8366 13.9976 16.0141 14.0001C16.1915 14.0026 16.3651 14.0523 16.517 14.144L21.514 17.141C21.6628 17.2297 21.786 17.3555 21.8715 17.506C21.9571 17.6566 22.002 17.8268 22.002 18C22.002 18.1732 21.9571 18.3434 21.8715 18.494C21.786 18.6446 21.6628 18.7704 21.514 18.859L16.517 21.856C16.365 21.9478 16.1913 21.9975 16.0138 21.9999C15.8363 22.0024 15.6613 21.9575 15.5068 21.87C15.3524 21.7824 15.224 21.6553 15.1349 21.5017C15.0459 21.3481 14.9993 21.1736 15 20.996V15.003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12.17V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H11M6 21 11 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
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
          d="M15 15.003C14.9995 14.8256 15.0462 14.6511 15.1353 14.4977C15.2245 14.3442 15.3528 14.2173 15.5073 14.1298C15.6617 14.0424 15.8366 13.9976 16.0141 14.0001C16.1915 14.0026 16.3651 14.0523 16.517 14.144L21.514 17.141C21.6628 17.2297 21.786 17.3555 21.8715 17.506C21.9571 17.6566 22.002 17.8268 22.002 18C22.002 18.1732 21.9571 18.3434 21.8715 18.494C21.786 18.6446 21.6628 18.7704 21.514 18.859L16.517 21.856C16.365 21.9478 16.1913 21.9975 16.0138 21.9999C15.8363 22.0024 15.6613 21.9575 15.5068 21.87C15.3524 21.7824 15.224 21.6553 15.1349 21.5017C15.0459 21.3481 14.9993 21.1736 15 20.996V15.003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12.17V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H11M6 21 11 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
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
          d="M15 15.003C14.9995 14.8255 15.0462 14.6511 15.1353 14.4977C15.2245 14.3442 15.3528 14.2172 15.5073 14.1298C15.6617 14.0423 15.8366 13.9976 16.0141 14.0001C16.1915 14.0026 16.3651 14.0522 16.517 14.144L21.514 17.141C21.6628 17.2297 21.786 17.3554 21.8715 17.506C21.9571 17.6566 22.002 17.8268 22.002 18C22.002 18.1732 21.9571 18.3434 21.8715 18.494C21.786 18.6445 21.6628 18.7703 21.514 18.859L16.517 21.856C16.365 21.9478 16.1913 21.9975 16.0138 21.9999C15.8363 22.0024 15.6613 21.9575 15.5068 21.8699C15.3524 21.7824 15.224 21.6553 15.1349 21.5017C15.0459 21.3481 14.9993 21.1735 15 20.996V15.003Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12.17V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V19C3 19.53 3.211 20.039 3.586 20.414 3.961 20.789 4.47 21 5 21H11M6 21 11 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ImagePlay doesn't support ${type}`);
  return null;
});

ImagePlay.displayName = "ImagePlay";

ImagePlay.metadata = {
  name: "ImagePlay",
  category: "stroke/photography",
  tags: ["image", "play", "icon"],
  description: "ImagePlay icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ImagePlay;
