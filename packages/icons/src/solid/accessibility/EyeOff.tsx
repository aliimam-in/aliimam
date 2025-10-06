import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface EyeOffProps extends IconProps {
  type?: "solid" | "stroke";
}

export const EyeOff: IconComponent<EyeOffProps> = React.forwardRef<
  SVGSVGElement,
  EyeOffProps
>(function EyeOff(
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
        <g fill="currentColor" clipPath="url(#undefined-clip0_70_3502)">
          <path d="M10.555 3.586C13.21 3.27 15.895 3.831 18.201 5.184 20.362 6.452 22.079 8.352 23.125 10.621L23.325 11.08 23.344 11.129C23.553 11.691 23.553 12.308 23.344 12.869 23.338 12.885 23.332 12.902 23.325 12.919 22.906 13.934 22.353 14.889 21.679 15.756 21.172 16.411 20.229 16.53 19.575 16.022 18.92 15.514 18.801 14.572 19.309 13.918 19.767 13.327 20.151 12.682 20.454 12 19.671 10.232 18.354 8.752 16.683 7.772 14.943 6.751 12.915 6.327 10.911 6.566 10.088 6.664 9.342 6.076 9.244 5.253 9.146 4.431 9.733 3.685 10.555 3.586ZM9.482 9.568C9.674 9.37 9.991 9.365 10.189 9.557 10.388 9.749 10.394 10.065 10.202 10.264 10.194 10.272 10.187 10.28 10.18 10.288L13.525 13.979C13.598 13.922 13.669 13.863 13.736 13.799 13.935 13.607 14.251 13.612 14.443 13.811 14.635 14.009 14.63 14.326 14.432 14.518 13.771 15.155 12.887 15.508 11.97 15.5 11.052 15.492 10.174 15.124 9.525 14.475 8.876 13.826 8.508 12.948 8.5 12.03 8.492 11.113 8.845 10.229 9.482 9.568Z" />
          <path d="M5.74168 5.21995C6.45375 4.79675 7.37404 5.03044 7.79735 5.74241C8.22059 6.45456 7.98606 7.37483 7.27391 7.79807C5.6244 8.77846 4.32326 10.2472 3.54637 11.9973C4.05062 13.1349 4.77723 14.1607 5.68797 15.011C6.6577 15.9163 7.81055 16.6033 9.06883 17.0237C10.327 17.444 11.6609 17.588 12.98 17.4475C14.2991 17.3069 15.5729 16.8843 16.7143 16.2082C17.4271 15.786 18.3478 16.0218 18.77 16.7346C19.192 17.4472 18.9561 18.3671 18.2436 18.7893C16.732 19.6847 15.0453 20.2447 13.2983 20.4309C11.5514 20.6171 9.78493 20.4251 8.11863 19.8684C6.45227 19.3116 4.92435 18.4033 3.64012 17.2043C2.35604 16.0055 1.34501 14.5442 0.675275 12.9201C0.668514 12.9037 0.66192 12.887 0.655744 12.8703C0.447403 12.3091 0.447425 11.6914 0.655744 11.1301L0.675275 11.0803C1.6856 8.63019 3.46345 6.574 5.74168 5.21995Z" />
          <path d="M0.939454 0.939462C1.52524 0.353675 2.47476 0.353675 3.06055 0.939462L23.0605 20.9395C23.6463 21.5252 23.6463 22.4748 23.0605 23.0606C22.4748 23.6463 21.5252 23.6463 20.9395 23.0606L0.939454 3.06056C0.353668 2.47477 0.353668 1.52525 0.939454 0.939462Z" />
        </g>
        <defs>
          <clipPath id="undefined-clip0_70_3502">
            <path fill="#fff" d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
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
          d="M10.733 5.076C13.062 4.798 15.419 5.291 17.442 6.478 19.465 7.665 21.044 9.482 21.938 11.651 22.021 11.876 22.021 12.123 21.938 12.347 21.57 13.238 21.085 14.076 20.494 14.837M14.084 14.158C13.518 14.705 12.76 15.007 11.974 15 11.187 14.993 10.435 14.678 9.878 14.122 9.322 13.565 9.007 12.813 9 12.026 8.993 11.24 9.295 10.482 9.842 9.916"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.479 17.499C16.153 18.285 14.673 18.776 13.139 18.939 11.606 19.103 10.056 18.934 8.594 18.446 7.131 17.957 5.791 17.16 4.664 16.108 3.537 15.056 2.65 13.773 2.062 12.348 1.979 12.124 1.979 11.877 2.062 11.652 2.949 9.502 4.509 7.697 6.508 6.509M2 2 22 22"
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
          d="M10.733 5.076C13.062 4.798 15.419 5.291 17.442 6.478 19.465 7.665 21.044 9.482 21.938 11.651 22.021 11.876 22.021 12.123 21.938 12.347 21.571 13.238 21.085 14.076 20.494 14.837M14.084 14.158C13.518 14.705 12.76 15.007 11.974 15 11.187 14.993 10.435 14.678 9.879 14.122 9.322 13.565 9.007 12.813 9 12.026 8.993 11.24 9.296 10.482 9.842 9.916"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.479 17.499C16.153 18.285 14.673 18.776 13.139 18.939 11.606 19.103 10.056 18.934 8.594 18.446 7.131 17.957 5.791 17.16 4.664 16.108 3.537 15.056 2.65 13.773 2.062 12.348 1.979 12.124 1.979 11.877 2.062 11.652 2.949 9.502 4.509 7.697 6.508 6.509M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`EyeOff doesn't support ${type}`);
  return null;
});

EyeOff.displayName = "EyeOff";

EyeOff.metadata = {
  name: "EyeOff",
  category: "solid/accessibility",
  tags: ["eye", "off", "icon"],
  description: "EyeOff icon from solid/accessibility category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EyeOff;
