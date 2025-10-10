import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FingerprintProps extends IconProps {
  type?: "stroke";
}

export const Fingerprint: IconComponent<FingerprintProps> = React.forwardRef<
  SVGSVGElement,
  FingerprintProps
>(function Fingerprint(
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
          d="M12 10C11.47 10 10.961 10.211 10.586 10.586 10.211 10.961 10 11.47 10 12 10 13.02 9.9 14.51 9.74 16M14 13.12C14 15.5 14 19.5 13 22M17.29 21.02C17.41 20.42 17.72 18.72 17.79 18M2 12C2 9.901 2.66 7.856 3.888 6.153 5.115 4.45 6.847 3.177 8.838 2.513 10.829 1.849 12.978 1.829 14.982 2.455 16.985 3.081 18.741 4.321 20 6M2 16H2.01M21.8 16C22 14 21.931 10.646 21.8 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 19.5C5.5 18 6 15 6 12 5.999 11.319 6.114 10.643 6.34 10M8.65 22C8.86 21.34 9.1 20.68 9.22 20M9 6.8C9.912 6.273 10.947 5.996 12.001 5.996 13.055 5.996 14.089 6.274 15.002 6.801 15.914 7.328 16.671 8.086 17.198 8.999 17.724 9.911 18.001 10.946 18 12V14"
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
          d="M12 10C11.47 10 10.961 10.211 10.586 10.586 10.211 10.961 10 11.47 10 12 10 13.02 9.9 14.51 9.74 16M14 13.12C14 15.5 14 19.5 13 22M17.29 21.02C17.41 20.42 17.72 18.72 17.79 18M2 12C2 9.901 2.66 7.856 3.888 6.153 5.115 4.45 6.847 3.177 8.838 2.513 10.829 1.849 12.978 1.829 14.982 2.455 16.985 3.081 18.741 4.321 20 6M2 16H2.01M21.8 16C22 14 21.931 10.646 21.8 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 19.5C5.5 18 6 15 6 12 5.999 11.319 6.114 10.643 6.34 10M8.65 22C8.86 21.34 9.1 20.68 9.22 20M9 6.8C9.912 6.273 10.947 5.996 12.001 5.996 13.055 5.996 14.089 6.274 15.002 6.801 15.914 7.328 16.671 8.086 17.198 8.999 17.724 9.911 18.001 10.946 18 12V14"
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
          d="M12 10C11.47 10 10.961 10.211 10.586 10.586 10.211 10.961 10 11.47 10 12 10 13.02 9.9 14.51 9.74 16M14 13.12C14 15.5 14 19.5 13 22M17.29 21.02C17.41 20.42 17.72 18.72 17.79 18M2 12C2 9.901 2.66 7.856 3.888 6.153 5.115 4.45 6.847 3.177 8.838 2.513 10.829 1.849 12.978 1.829 14.982 2.455 16.985 3.081 18.741 4.321 20 6M2 16H2.01M21.8 16C22 14 21.931 10.646 21.8 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 19.5C5.5 18 6 15 6 12 5.999 11.319 6.114 10.643 6.34 10M8.65 22C8.86 21.34 9.1 20.68 9.22 20M9 6.8C9.912 6.273 10.947 5.996 12.001 5.996 13.055 5.996 14.089 6.274 15.002 6.801 15.914 7.328 16.671 8.086 17.198 8.999 17.724 9.911 18.001 10.946 18 12V14"
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
          d="M12 10C11.47 10 10.961 10.211 10.586 10.586 10.211 10.961 10 11.47 10 12 10 13.02 9.9 14.51 9.74 16M14 13.12C14 15.5 14 19.5 13 22M17.29 21.02C17.41 20.42 17.72 18.72 17.79 18M2 12C2 9.901 2.66 7.856 3.888 6.153 5.115 4.45 6.847 3.177 8.838 2.513 10.829 1.849 12.978 1.829 14.982 2.455 16.985 3.081 18.741 4.321 20 6M2 16H2.01M21.8 16C22 14 21.931 10.646 21.8 10"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 19.5C5.5 18 6 15 6 12 5.999 11.319 6.114 10.643 6.34 10M8.65 22C8.86 21.34 9.1 20.68 9.22 20M9 6.8C9.912 6.273 10.947 5.996 12.001 5.996 13.055 5.996 14.089 6.274 15.002 6.801 15.914 7.328 16.671 8.086 17.198 8.999 17.724 9.911 18.001 10.946 18 12V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Fingerprint doesn't support ${type}`);
  return null;
});

Fingerprint.displayName = "Fingerprint";

Fingerprint.metadata = {
  name: "Fingerprint",
  category: "stroke/security",
  tags: ["fingerprint", "icon"],
  description: "Fingerprint icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Fingerprint;
