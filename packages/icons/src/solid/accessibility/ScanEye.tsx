import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ScanEyeProps extends IconProps {
  type?: "solid" | "stroke";
}

export const ScanEye: IconComponent<ScanEyeProps> = React.forwardRef<
  SVGSVGElement,
  ScanEyeProps
>(function ScanEye(
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
  if (type === "solid") {
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
          d="M1.5 7V5C1.5 4.072 1.869 3.182 2.525 2.525 3.182 1.869 4.072 1.5 5 1.5H7C7.828 1.5 8.5 2.172 8.5 3 8.5 3.828 7.828 4.5 7 4.5H5C4.867 4.5 4.74 4.553 4.646 4.646 4.553 4.74 4.5 4.867 4.5 5V7C4.5 7.828 3.828 8.5 3 8.5 2.172 8.5 1.5 7.828 1.5 7ZM19.5 7V5C19.5 4.867 19.447 4.74 19.354 4.646 19.283 4.576 19.194 4.529 19.098 4.51L19 4.5H17C16.172 4.5 15.5 3.828 15.5 3 15.5 2.172 16.172 1.5 17 1.5H19C19.928 1.5 20.818 1.869 21.475 2.525 22.131 3.182 22.5 4.072 22.5 5V7C22.5 7.828 21.828 8.5 21 8.5 20.172 8.5 19.5 7.828 19.5 7ZM19.5 19V17C19.5 16.172 20.172 15.5 21 15.5 21.828 15.5 22.5 16.172 22.5 17V19C22.5 19.928 22.131 20.818 21.475 21.475 20.818 22.131 19.928 22.5 19 22.5H17C16.172 22.5 15.5 21.828 15.5 21 15.5 20.172 16.172 19.5 17 19.5H19C19.133 19.5 19.26 19.447 19.354 19.354 19.447 19.26 19.5 19.133 19.5 19ZM1.5 19V17C1.5 16.172 2.172 15.5 3 15.5 3.828 15.5 4.5 16.172 4.5 17V19L4.51 19.098C4.529 19.194 4.576 19.283 4.646 19.354 4.74 19.447 4.867 19.5 5 19.5H7C7.828 19.5 8.5 20.172 8.5 21 8.5 21.828 7.828 22.5 7 22.5H5C4.072 22.5 3.182 22.131 2.525 21.475 1.869 20.818 1.5 19.928 1.5 19ZM12 5.504C13.788 5.504 15.535 6.037 17.019 7.034 18.41 7.969 19.511 9.273 20.2 10.796L20.333 11.104 20.36 11.175C20.547 11.709 20.547 12.291 20.36 12.825 20.352 12.849 20.342 12.873 20.333 12.897 19.657 14.552 18.503 15.969 17.019 16.966 15.535 17.963 13.788 18.496 12 18.496 10.212 18.496 8.464 17.963 6.98 16.966 5.496 15.969 4.342 14.552 3.667 12.897 3.657 12.873 3.648 12.849 3.639 12.825 3.453 12.291 3.453 11.709 3.639 11.175L3.667 11.104C4.342 9.448 5.496 8.031 6.98 7.034 8.464 6.037 10.212 5.504 12 5.504ZM12 9.5C10.619 9.5 9.5 10.619 9.5 12 9.5 13.381 10.619 14.5 12 14.5 13.38 14.5 14.5 13.381 14.5 12 14.5 10.619 13.38 9.5 12 9.5Z"
          fill="currentColor"
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
          d="M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.944 12.33C19.0187 12.1164 19.0187 11.8837 18.944 11.67C18.381 10.2905 17.4198 9.10985 16.183 8.27879C14.9463 7.44774 13.49 7.00391 12 7.00391C10.51 7.00391 9.05369 7.44774 7.81693 8.27879C6.58018 9.10985 5.619 10.2905 5.05599 11.67C4.9813 11.8837 4.9813 12.1164 5.05599 12.33C5.619 13.7096 6.58018 14.8902 7.81693 15.7213C9.05369 16.5523 10.51 16.9962 12 16.9962C13.49 16.9962 14.9463 16.5523 16.183 15.7213C17.4198 14.8902 18.381 13.7096 18.944 12.33Z"
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
          d="M3 7V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H7M17 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V7M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H17M7 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.944 12.33C19.0187 12.1164 19.0187 11.8837 18.944 11.67C18.381 10.2905 17.4198 9.10985 16.1831 8.27879C14.9463 7.44774 13.49 7.00391 12 7.00391C10.51 7.00391 9.0537 7.44774 7.81695 8.27879C6.58019 9.10985 5.61901 10.2905 5.056 11.67C4.98131 11.8837 4.98131 12.1164 5.056 12.33C5.61901 13.7096 6.58019 14.8902 7.81695 15.7213C9.0537 16.5523 10.51 16.9962 12 16.9962C13.49 16.9962 14.9463 16.5523 16.1831 15.7213C17.4198 14.8902 18.381 13.7096 18.944 12.33Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ScanEye doesn't support ${type}`);
  return null;
});

ScanEye.displayName = "ScanEye";

ScanEye.metadata = {
  name: "ScanEye",
  category: "solid/accessibility",
  tags: ["scan", "eye", "icon"],
  description: "ScanEye icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ScanEye;
