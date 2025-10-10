import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DoorOpenProps extends IconProps {
  type?: "stroke";
}

export const DoorOpen: IconComponent<DoorOpenProps> = React.forwardRef<
  SVGSVGElement,
  DoorOpenProps
>(function DoorOpen(
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
          d="M11 20H2M11 4.562V20.719C11 20.871 11.035 21.021 11.101 21.157 11.168 21.294 11.265 21.413 11.385 21.507 11.504 21.6 11.644 21.665 11.792 21.697 11.941 21.728 12.095 21.726 12.242 21.689L19 20V5.562C19 5.116 18.851 4.683 18.576 4.331 18.302 3.98 17.918 3.73 17.485 3.622L13.485 2.622C13.19 2.548 12.883 2.543 12.585 2.606 12.288 2.669 12.009 2.799 11.77 2.985 11.53 3.172 11.336 3.411 11.203 3.684 11.07 3.957 11 4.258 11 4.562ZM11 4H8C7.47 4 6.961 4.211 6.586 4.586 6.211 4.961 6 5.47 6 6V20M14 12H14.01M22 20H19"
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
          d="M11 20H2M11 4.562V20.719C11 20.871 11.035 21.021 11.101 21.157 11.168 21.294 11.265 21.413 11.385 21.507 11.504 21.6 11.644 21.665 11.792 21.697 11.941 21.728 12.095 21.726 12.242 21.689L19 20V5.562C19 5.116 18.851 4.683 18.576 4.331 18.302 3.98 17.918 3.73 17.485 3.622L13.485 2.622C13.19 2.548 12.883 2.543 12.585 2.606 12.288 2.669 12.009 2.799 11.77 2.985 11.53 3.172 11.336 3.411 11.203 3.684 11.07 3.957 11 4.258 11 4.562ZM11 4H8C7.47 4 6.961 4.211 6.586 4.586 6.211 4.961 6 5.47 6 6V20M14 12H14.01M22 20H19"
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
          d="M11 20H2M11 4.562V20.719C11 20.871 11.035 21.021 11.101 21.157 11.168 21.294 11.265 21.413 11.385 21.507 11.504 21.6 11.644 21.665 11.792 21.697 11.941 21.728 12.095 21.726 12.242 21.689L19 20V5.562C19 5.116 18.851 4.683 18.576 4.331 18.302 3.98 17.918 3.73 17.485 3.622L13.485 2.622C13.19 2.548 12.883 2.543 12.585 2.606 12.288 2.669 12.009 2.799 11.77 2.985 11.53 3.172 11.336 3.411 11.203 3.684 11.07 3.957 11 4.258 11 4.562ZM11 4H8C7.47 4 6.961 4.211 6.586 4.586 6.211 4.961 6 5.47 6 6V20M14 12H14.01M22 20H19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`DoorOpen doesn't support ${type}`);
  return null;
});

DoorOpen.displayName = "DoorOpen";

DoorOpen.metadata = {
  name: "DoorOpen",
  category: "stroke/security",
  tags: ["door", "open", "icon"],
  description: "DoorOpen icon from stroke/security category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DoorOpen;
