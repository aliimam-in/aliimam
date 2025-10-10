import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ProjectorProps extends IconProps {
  type?: "stroke";
}

export const Projector: IconComponent<ProjectorProps> = React.forwardRef<
  SVGSVGElement,
  ProjectorProps
>(function Projector(
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
          d="M5 7 3 5M9 6V3M13 7 15 5M9 16C10.657 16 12 14.657 12 13 12 11.343 10.657 10 9 10 7.343 10 6 11.343 6 13 6 14.657 7.343 16 9 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.83 12H20C20.53 12 21.039 12.211 21.414 12.586 21.789 12.961 22 13.47 22 14V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V14C2 13.47 2.211 12.961 2.586 12.586 2.961 12.211 3.47 12 4 12H6.17M16 16H18"
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
          d="M5 7 3 5M9 6V3M13 7 15 5M9 16C10.657 16 12 14.657 12 13 12 11.343 10.657 10 9 10 7.343 10 6 11.343 6 13 6 14.657 7.343 16 9 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.83 12H20C20.53 12 21.039 12.211 21.414 12.586 21.789 12.961 22 13.47 22 14V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V14C2 13.47 2.211 12.961 2.586 12.586 2.961 12.211 3.47 12 4 12H6.17M16 16H18"
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
          d="M5 7 3 5M9 6V3M13 7 15 5M9 16C10.657 16 12 14.657 12 13 12 11.343 10.657 10 9 10 7.343 10 6 11.343 6 13 6 14.657 7.343 16 9 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.83 12H20C20.53 12 21.039 12.211 21.414 12.586 21.789 12.961 22 13.47 22 14V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V14C2 13.47 2.211 12.961 2.586 12.586 2.961 12.211 3.47 12 4 12H6.17M16 16H18"
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
          d="M5 7 3 5M9 6V3M13 7 15 5M9 16C10.657 16 12 14.657 12 13 12 11.343 10.657 10 9 10 7.343 10 6 11.343 6 13 6 14.657 7.343 16 9 16Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.83 12H20C20.53 12 21.039 12.211 21.414 12.586 21.789 12.961 22 13.47 22 14V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H4C3.47 20 2.961 19.789 2.586 19.414 2.211 19.039 2 18.53 2 18V14C2 13.47 2.211 12.961 2.586 12.586 2.961 12.211 3.47 12 4 12H6.17M16 16H18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Projector doesn't support ${type}`);
  return null;
});

Projector.displayName = "Projector";

Projector.metadata = {
  name: "Projector",
  category: "stroke/photography",
  tags: ["projector", "icon"],
  description: "Projector icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Projector;
