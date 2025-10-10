import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface IdCardLanyardProps extends IconProps {
  type?: "stroke";
}

export const IdCardLanyard: IconComponent<IdCardLanyardProps> =
  React.forwardRef<SVGSVGElement, IdCardLanyardProps>(function IdCardLanyard(
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
            d="M13.5 8H10.5M15 2 14 4H17C17.53 4 18.039 4.211 18.414 4.586 18.789 4.961 19 5.47 19 6V20C19 20.53 18.789 21.039 18.414 21.414 18.039 21.789 17.53 22 17 22H7C6.47 22 5.961 21.789 5.586 21.414 5.211 21.039 5 20.53 5 20V6C5 5.47 5.211 4.961 5.586 4.586 5.961 4.211 6.47 4 7 4H10"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.899 22C16.669 20.87 16.056 19.855 15.163 19.125 14.27 18.396 13.153 17.997 12 17.997 10.847 17.997 9.729 18.396 8.836 19.125 7.943 19.855 7.33 20.87 7.1 22M9 2 12 8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
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
            d="M13.5 8H10.5M15 2 14 4H17C17.53 4 18.039 4.211 18.414 4.586 18.789 4.961 19 5.47 19 6V20C19 20.53 18.789 21.039 18.414 21.414 18.039 21.789 17.53 22 17 22H7C6.47 22 5.961 21.789 5.586 21.414 5.211 21.039 5 20.53 5 20V6C5 5.47 5.211 4.961 5.586 4.586 5.961 4.211 6.47 4 7 4H10"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.899 22C16.669 20.87 16.056 19.855 15.163 19.125 14.27 18.396 13.152 17.997 12 17.997 10.847 17.997 9.729 18.396 8.836 19.125 7.943 19.855 7.33 20.87 7.1 22M9 2 12 8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`IdCardLanyard doesn't support ${type}`);
    return null;
  });

IdCardLanyard.displayName = "IdCardLanyard";

IdCardLanyard.metadata = {
  name: "IdCardLanyard",
  category: "stroke/security",
  tags: ["id", "card", "lanyard", "icon"],
  description: "IdCardLanyard icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default IdCardLanyard;
