import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PhoneOffProps extends IconProps {
  type?: "stroke";
}

export const PhoneOff: IconComponent<PhoneOffProps> = React.forwardRef<
  SVGSVGElement,
  PhoneOffProps
>(function PhoneOff(
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
          d="M10.1 13.9C11.189 14.989 12.45 15.89 13.832 16.568 14.039 16.663 14.271 16.685 14.492 16.629 14.712 16.574 14.907 16.446 15.045 16.265L15.4 15.8C15.586 15.552 15.828 15.35 16.106 15.211 16.383 15.072 16.69 15 17 15H20C20.53 15 21.039 15.211 21.414 15.586 21.789 15.961 22 16.47 22 17V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22 17.636 22 15.296 21.534 13.112 20.63 10.928 19.725 8.943 18.399 7.272 16.728M22 2 2 22M4.76 13.582C2.956 10.712 1.999 7.39 2 4 2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H7C7.53 2 8.039 2.211 8.414 2.586 8.789 2.961 9 3.47 9 4V7C9 7.31 8.928 7.617 8.789 7.894 8.65 8.172 8.448 8.414 8.2 8.6L7.732 8.951C7.548 9.091 7.419 9.291 7.366 9.515 7.313 9.74 7.339 9.976 7.44 10.184 7.518 10.343 7.6 10.501 7.684 10.657"
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
          d="M10.1 13.9C11.189 14.989 12.45 15.89 13.832 16.568 14.039 16.663 14.271 16.685 14.492 16.629 14.712 16.574 14.907 16.446 15.045 16.265L15.4 15.8C15.586 15.552 15.828 15.35 16.106 15.211 16.383 15.072 16.69 15 17 15H20C20.53 15 21.039 15.211 21.414 15.586 21.789 15.961 22 16.47 22 17V20C22 20.53 21.789 21.039 21.414 21.414 21.039 21.789 20.53 22 20 22 17.636 22 15.296 21.534 13.112 20.63 10.928 19.725 8.943 18.399 7.272 16.728M22 2 2 22M4.76 13.582C2.956 10.712 1.999 7.39 2 4 2 3.47 2.211 2.961 2.586 2.586 2.961 2.211 3.47 2 4 2H7C7.53 2 8.039 2.211 8.414 2.586 8.789 2.961 9 3.47 9 4V7C9 7.31 8.928 7.617 8.789 7.894 8.65 8.172 8.448 8.414 8.2 8.6L7.732 8.951C7.548 9.091 7.419 9.291 7.366 9.515 7.313 9.74 7.339 9.976 7.44 10.184 7.518 10.343 7.6 10.501 7.684 10.657"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`PhoneOff doesn't support ${type}`);
  return null;
});

PhoneOff.displayName = "PhoneOff";

PhoneOff.metadata = {
  name: "PhoneOff",
  category: "stroke/connectivity",
  tags: ["phone", "off", "icon"],
  description: "PhoneOff icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PhoneOff;
