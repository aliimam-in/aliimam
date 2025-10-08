import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FrameProps extends IconProps {
  type?: "stroke";
}

export const Frame: IconComponent<FrameProps> = React.forwardRef<
  SVGSVGElement,
  FrameProps
>(function Frame(
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
          d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM8 12H16"
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
          d="M21 3H3C2.448 3 2 3.448 2 4V7C2 7.552 2.448 8 3 8H21C21.552 8 22 7.552 22 7V4C22 3.448 21.552 3 21 3ZM4 8V19C4 19.53 4.211 20.039 4.586 20.414 4.961 20.789 5.47 21 6 21H18C18.53 21 19.039 20.789 19.414 20.414 19.789 20.039 20 19.53 20 19V8M9.5 17 14.5 12M9.5 12 14.5 17"
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
          d="M9 13C9.552 13 10 12.552 10 12 10 11.448 9.552 11 9 11 8.448 11 8 11.448 8 12 8 12.552 8.448 13 9 13ZM9 6C9.552 6 10 5.552 10 5 10 4.448 9.552 4 9 4 8.448 4 8 4.448 8 5 8 5.552 8.448 6 9 6ZM9 20C9.552 20 10 19.552 10 19 10 18.448 9.552 18 9 18 8.448 18 8 18.448 8 19 8 19.552 8.448 20 9 20ZM15 13C15.552 13 16 12.552 16 12 16 11.448 15.552 11 15 11 14.448 11 14 11.448 14 12 14 12.552 14.448 13 15 13ZM15 6C15.552 6 16 5.552 16 5 16 4.448 15.552 4 15 4 14.448 4 14 4.448 14 5 14 5.552 14.448 6 15 6ZM15 20C15.552 20 16 19.552 16 19 16 18.448 15.552 18 15 18 14.448 18 14 18.448 14 19 14 19.552 14.448 20 15 20Z"
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
          d="M22 6H2M22 18H2M6 2V22M18 2V22"
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
          d="M4 22V4C4 3.84475 4.03614 3.69164 4.10557 3.55279C4.175 3.41393 4.2758 3.29315 4.4 3.2C5.43858 2.42107 6.70178 2 8 2C11 2 13 4 15.333 4C16.6663 4 17.6887 3.73333 18.4 3.2C18.5486 3.08857 18.7252 3.02072 18.9102 3.00404C19.0952 2.98736 19.2811 3.02252 19.4472 3.10557C19.6133 3.18863 19.753 3.31629 19.8507 3.47427C19.9483 3.63224 20 3.81429 20 4V14C20 14.1552 19.9639 14.3084 19.8944 14.4472C19.825 14.5861 19.7242 14.7069 19.6 14.8C18.5614 15.5789 17.2982 16 16 16C13 16 11 14 8 14C6.52412 14 5.10002 14.544 4 15.528"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Frame doesn't support ${type}`);
  return null;
});

Frame.displayName = "Frame";

Frame.metadata = {
  name: "Frame",
  category: "stroke/mathematics",
  tags: ["frame", "icon"],
  description: "Frame icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Frame;
