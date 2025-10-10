import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface UniversityProps extends IconProps {
  type?: "stroke";
}

export const University: IconComponent<UniversityProps> = React.forwardRef<
  SVGSVGElement,
  UniversityProps
>(function University(
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
          d="M14 21V18C14 17.47 13.789 16.961 13.414 16.586 13.039 16.211 12.53 16 12 16 11.47 16 10.961 16.211 10.586 16.586 10.211 16.961 10 17.47 10 18V21M18 12H18.01M18 16H18.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 7C22 6.735 21.895 6.48 21.707 6.293 21.52 6.105 21.265 6 21 6H19C18.591 6 18.192 5.875 17.857 5.641L13.143 2.36C12.808 2.126 12.409 2.001 12 2.001 11.591 2.001 11.193 2.126 10.857 2.359L6.143 5.64C5.808 5.874 5.409 6 5 6H3C2.735 6 2.48 6.105 2.293 6.293 2.105 6.48 2 6.735 2 7V19C2 19.53 2.211 20.039 2.586 20.414 2.961 20.789 3.47 21 4 21H20C20.53 21 21.039 20.789 21.414 20.414 21.789 20.039 22 19.53 22 19V7ZM6 12H6.01M6 16H6.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
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
          d="M14 21V18C14 17.47 13.789 16.961 13.414 16.586 13.039 16.211 12.53 16 12 16 11.47 16 10.961 16.211 10.586 16.586 10.211 16.961 10 17.47 10 18V21M18 12H18.01M18 16H18.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 7C22 6.735 21.895 6.48 21.707 6.293 21.52 6.105 21.265 6 21 6H19C18.591 6 18.192 5.875 17.857 5.641L13.143 2.36C12.808 2.126 12.409 2.001 12 2.001 11.591 2.001 11.193 2.126 10.857 2.359L6.143 5.64C5.808 5.874 5.409 6 5 6H3C2.735 6 2.48 6.105 2.293 6.293 2.105 6.48 2 6.735 2 7V19C2 19.531 2.211 20.039 2.586 20.414 2.961 20.789 3.47 21 4 21H20C20.53 21 21.039 20.789 21.414 20.414 21.789 20.039 22 19.531 22 19V7ZM6 12H6.01M6 16H6.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`University doesn't support ${type}`);
  return null;
});

University.displayName = "University";

University.metadata = {
  name: "University",
  category: "stroke/navigation",
  tags: ["university", "icon"],
  description: "University icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default University;
