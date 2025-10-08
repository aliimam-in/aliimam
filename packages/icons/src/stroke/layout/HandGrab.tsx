import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HandGrabProps extends IconProps {
  type?: "stroke";
}

export const HandGrab: IconComponent<HandGrabProps> = React.forwardRef<
  SVGSVGElement,
  HandGrabProps
>(function HandGrab(
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
          d="M18 11.5V9C18 8.47 17.789 7.961 17.414 7.586 17.039 7.211 16.53 7 16 7 15.47 7 14.961 7.211 14.586 7.586 14.211 7.961 14 8.47 14 9V10.4M14 10V8C14 7.47 13.789 6.961 13.414 6.586 13.039 6.211 12.53 6 12 6 11.47 6 10.961 6.211 10.586 6.586 10.211 6.961 10 7.47 10 8V10M10 9.9V9C10 8.47 9.789 7.961 9.414 7.586 9.039 7.211 8.53 7 8 7 7.47 7 6.961 7.211 6.586 7.586 6.211 7.961 6 8.47 6 9V14M6 14C6 13.47 5.789 12.961 5.414 12.586 5.039 12.211 4.53 12 4 12 3.47 12 2.961 12.211 2.586 12.586 2.211 12.961 2 13.47 2 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 11C18 10.4696 18.2107 9.96086 18.5858 9.58579C18.9609 9.21071 19.4696 9 20 9C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V14C22 16.1217 21.1571 18.1566 19.6569 19.6569C18.1566 21.1571 16.1217 22 14 22H10C7.87827 22 5.84344 21.1571 4.34315 19.6569C2.84285 18.1566 2 16.1217 2 14C2 13.4696 2.21071 12.9609 2.58579 12.5858C2.96086 12.2107 3.46957 12 4 12C4.53043 12 5.03914 12.2107 5.41421 12.5858C5.78929 12.9609 6 13.4696 6 14"
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
          d="M18 11.5V9C18 8.47 17.789 7.961 17.414 7.586 17.039 7.211 16.53 7 16 7 15.47 7 14.961 7.211 14.586 7.586 14.211 7.961 14 8.47 14 9V10.4M14 10V8C14 7.47 13.789 6.961 13.414 6.586 13.039 6.211 12.53 6 12 6 11.47 6 10.961 6.211 10.586 6.586 10.211 6.961 10 7.47 10 8V10M10 9.9V9C10 8.47 9.789 7.961 9.414 7.586 9.039 7.211 8.53 7 8 7 7.47 7 6.961 7.211 6.586 7.586 6.211 7.961 6 8.47 6 9V14M6 14C6 13.47 5.789 12.961 5.414 12.586 5.039 12.211 4.53 12 4 12 3.47 12 2.961 12.211 2.586 12.586 2.211 12.961 2 13.47 2 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 11C18 10.4696 18.2107 9.96086 18.5858 9.58579C18.9609 9.21071 19.4696 9 20 9C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V14C22 16.1217 21.1571 18.1566 19.6569 19.6569C18.1566 21.1571 16.1217 22 14 22H10C7.87827 22 5.84344 21.1571 4.34315 19.6569C2.84285 18.1566 2 16.1217 2 14C2 13.4696 2.21071 12.9609 2.58579 12.5858C2.96086 12.2107 3.46957 12 4 12C4.53043 12 5.03914 12.2107 5.41421 12.5858C5.78929 12.9609 6 13.4696 6 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`HandGrab doesn't support ${type}`);
  return null;
});

HandGrab.displayName = "HandGrab";

HandGrab.metadata = {
  name: "HandGrab",
  category: "stroke/layout",
  tags: ["hand", "grab", "icon"],
  description: "HandGrab icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HandGrab;
