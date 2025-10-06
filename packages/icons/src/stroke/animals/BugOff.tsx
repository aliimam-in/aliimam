import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const BugOff: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function BugOff(
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
      ...props
    },
    forwardedRef,
  ) {
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
          d="M12 20V12M14.12 3.88 16 2M15 7.13V6C15 5.405 14.822 4.823 14.49 4.329 14.158 3.835 13.686 3.451 13.135 3.225 12.584 3 11.978 2.944 11.395 3.064 10.812 3.184 10.277 3.475 9.86 3.9L8 2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12.34V11C18 9.939 17.579 8.922 16.828 8.172 16.078 7.421 15.061 7 14 7H12.7M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 5C20.999 5.982 20.636 6.93 19.982 7.662 19.327 8.394 18.426 8.86 17.45 8.97M22 13H18.66M3 21C2.999 19.971 3.394 18.982 4.104 18.237 4.813 17.492 5.782 17.049 6.81 17M6 13H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.69997 7.70001C7.17102 8.07174 6.74005 8.56614 6.44398 9.14087C6.14791 9.71559 5.99556 10.3535 5.99997 11V14C5.99598 15.3113 6.42165 16.5877 7.21186 17.6341C8.00208 18.6805 9.11333 19.4393 10.3756 19.7942C11.6379 20.1492 12.9817 20.0809 14.2015 19.5998C15.4213 19.1186 16.4499 18.2511 17.13 17.13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

BugOff.displayName = "BugOff";

BugOff.metadata = {
  name: "BugOff",
  category: "stroke/animals",
  tags: ["bug", "off", "icon"],
  description: "BugOff icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BugOff;
