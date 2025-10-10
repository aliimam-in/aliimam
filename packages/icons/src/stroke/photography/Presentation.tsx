import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface PresentationProps extends IconProps {
  type?: "stroke";
}

export const Presentation: IconComponent<PresentationProps> = React.forwardRef<
  SVGSVGElement,
  PresentationProps
>(function Presentation(
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
          d="M2 3H22M21 3V14C21 14.53 20.789 15.039 20.414 15.414 20.039 15.789 19.53 16 19 16H5C4.47 16 3.961 15.789 3.586 15.414 3.211 15.039 3 14.53 3 14V3M7 21 12 16 17 21"
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
          d="M2 3H22M21 3V14C21 14.53 20.789 15.039 20.414 15.414 20.039 15.789 19.53 16 19 16H5C4.47 16 3.961 15.789 3.586 15.414 3.211 15.039 3 14.53 3 14V3M7 21 12 16 17 21"
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
          d="M2 3H22M21 3V14C21 14.53 20.789 15.039 20.414 15.414 20.039 15.789 19.53 16 19 16H5C4.47 16 3.961 15.789 3.586 15.414 3.211 15.039 3 14.53 3 14V3M7 21 12 16 17 21"
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
          d="M2 3H22M21 3V14C21 14.53 20.789 15.039 20.414 15.414 20.039 15.789 19.53 16 19 16H5C4.47 16 3.961 15.789 3.586 15.414 3.211 15.039 3 14.53 3 14V3M7 21 12 16 17 21"
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
          d="M2 3H22M21 3V14C21 14.53 20.789 15.039 20.414 15.414 20.039 15.789 19.53 16 19 16H5C4.47 16 3.961 15.789 3.586 15.414 3.211 15.039 3 14.53 3 14V3M7 21 12 16 17 21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Presentation doesn't support ${type}`);
  return null;
});

Presentation.displayName = "Presentation";

Presentation.metadata = {
  name: "Presentation",
  category: "stroke/photography",
  tags: ["presentation", "icon"],
  description: "Presentation icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Presentation;
