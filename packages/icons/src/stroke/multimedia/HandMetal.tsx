import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface HandMetalProps extends IconProps {
  type?: "stroke";
}

export const HandMetal: IconComponent<HandMetalProps> = React.forwardRef<
  SVGSVGElement,
  HandMetalProps
>(function HandMetal(
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
          d="M18 12.5V10C18 9.47 17.789 8.961 17.414 8.586 17.039 8.211 16.53 8 16 8 15.47 8 14.961 8.211 14.586 8.586 14.211 8.961 14 9.47 14 10V11.4M14 11V9C14 8.47 13.789 7.961 13.414 7.586 13.039 7.211 12.53 7 12 7 11.47 7 10.961 7.211 10.586 7.586 10.211 7.961 10 8.47 10 9V11M10 10.5V5C10 4.47 9.789 3.961 9.414 3.586 9.039 3.211 8.53 3 8 3 7.47 3 6.961 3.211 6.586 3.586 6.211 3.961 6 4.47 6 5V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.0001 15L5.2401 13.24C4.86027 12.8946 4.36215 12.7085 3.84888 12.7202C3.3356 12.7319 2.8465 12.9406 2.48282 13.303C2.11915 13.6653 1.90876 14.1537 1.89523 14.6669C1.88169 15.1802 2.06604 15.6789 2.4101 16.06L6.0101 19.66C7.5001 21.14 9.2001 22 12.0001 22H14.0001C16.1218 22 18.1567 21.1571 19.657 19.6569C21.1572 18.1566 22.0001 16.1217 22.0001 14V7C22.0001 6.46957 21.7894 5.96086 21.4143 5.58579C21.0392 5.21071 20.5305 5 20.0001 5C19.4697 5 18.961 5.21071 18.5859 5.58579C18.2108 5.96086 18.0001 6.46957 18.0001 7V12"
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
          d="M18 12.5V10C18 9.47 17.789 8.961 17.414 8.586 17.039 8.211 16.53 8 16 8 15.47 8 14.961 8.211 14.586 8.586 14.211 8.961 14 9.47 14 10V11.4M14 11V9C14 8.47 13.789 7.961 13.414 7.586 13.039 7.211 12.53 7 12 7 11.47 7 10.961 7.211 10.586 7.586 10.211 7.961 10 8.47 10 9V11M10 10.5V5C10 4.47 9.789 3.961 9.414 3.586 9.039 3.211 8.53 3 8 3 7.47 3 6.961 3.211 6.586 3.586 6.211 3.961 6 4.47 6 5V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 15L5.24 13.24C4.86016 12.8946 4.36204 12.7085 3.84877 12.7202C3.3355 12.7319 2.84639 12.9406 2.48272 13.303C2.11904 13.6653 1.90866 14.1537 1.89512 14.6669C1.88158 15.1802 2.06593 15.6789 2.41 16.06L6.01 19.66C7.5 21.14 9.2 22 12 22H14C16.1217 22 18.1566 21.1571 19.6569 19.6569C21.1571 18.1566 22 16.1217 22 14V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5C19.4696 5 18.9609 5.21071 18.5858 5.58579C18.2107 5.96086 18 6.46957 18 7V12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`HandMetal doesn't support ${type}`);
  return null;
});

HandMetal.displayName = "HandMetal";

HandMetal.metadata = {
  name: "HandMetal",
  category: "stroke/multimedia",
  tags: ["hand", "metal", "icon"],
  description: "HandMetal icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HandMetal;
