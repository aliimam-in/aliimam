import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ImagesProps extends IconProps {
  type?: "stroke";
}

export const Images: IconComponent<ImagesProps> = React.forwardRef<
  SVGSVGElement,
  ImagesProps
>(function Images(
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
          d="M22 11.0001L20.704 9.70406C20.4809 9.47911 20.2154 9.30056 19.923 9.17872C19.6305 9.05687 19.3168 8.99414 19 8.99414C18.6832 8.99414 18.3695 9.05687 18.077 9.17872C17.7846 9.30056 17.5191 9.47911 17.296 9.70406L11 16.0001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8Z"
          fill="currentColor"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 2H10C8.89543 2 8 2.89543 8 4V14C8 15.1046 8.89543 16 10 16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2Z"
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
          d="M22 11L20.704 9.704C20.4809 9.47905 20.2154 9.3005 19.923 9.17866C19.6305 9.05681 19.3168 8.99408 19 8.99408C18.6832 8.99408 18.3695 9.05681 18.077 9.17866C17.7846 9.3005 17.5191 9.47905 17.296 9.704L11 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8Z"
          fill="currentColor"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 2H10C8.89543 2 8 2.89543 8 4V14C8 15.1046 8.89543 16 10 16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2Z"
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
          d="M22 11L20.704 9.704C20.4809 9.47905 20.2154 9.3005 19.923 9.17866C19.6305 9.05681 19.3168 8.99408 19 8.99408C18.6832 8.99408 18.3695 9.05681 18.077 9.17866C17.7846 9.3005 17.5191 9.47905 17.296 9.704L11 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8Z"
          fill="currentColor"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 2H10C8.89543 2 8 2.89543 8 4V14C8 15.1046 8.89543 16 10 16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2Z"
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
          d="M22 11L20.704 9.704C20.4809 9.47905 20.2154 9.3005 19.923 9.17866C19.6305 9.05681 19.3168 8.99408 19 8.99408C18.6832 8.99408 18.3695 9.05681 18.077 9.17866C17.7846 9.3005 17.5191 9.47905 17.296 9.704L11 16"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H14C14.5304 22 15.0391 21.7893 15.4142 21.4142C15.7893 21.0391 16 20.5304 16 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 8C13.5523 8 14 7.55228 14 7C14 6.44772 13.5523 6 13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8Z"
          fill="currentColor"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 2H10C8.89543 2 8 2.89543 8 4V14C8 15.1046 8.89543 16 10 16H20C21.1046 16 22 15.1046 22 14V4C22 2.89543 21.1046 2 20 2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Images doesn't support ${type}`);
  return null;
});

Images.displayName = "Images";

Images.metadata = {
  name: "Images",
  category: "stroke/photography",
  tags: ["images", "icon"],
  description: "Images icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Images;
