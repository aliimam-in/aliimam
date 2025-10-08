import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BugOffProps extends IconProps {
  type?: "stroke";
}

export const BugOff: IconComponent<BugOffProps> = React.forwardRef<
  SVGSVGElement,
  BugOffProps
>(function BugOff(
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
          d="M7.70009 7.69995C7.17114 8.07168 6.74017 8.56608 6.4441 9.1408C6.14803 9.71553 5.99568 10.3535 6.00009 11V14C5.9961 15.3112 6.42177 16.5877 7.21198 17.6341C8.0022 18.6805 9.11345 19.4392 10.3757 19.7942C11.638 20.1492 12.9819 20.0809 14.2017 19.5997C15.4215 19.1186 16.45 18.2511 17.1301 17.13"
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
          d="M7.7 7.69995C7.17105 8.07168 6.74008 8.56608 6.44401 9.1408C6.14794 9.71553 5.99559 10.3535 6 11V14C5.99601 15.3112 6.42168 16.5877 7.21189 17.6341C8.00211 18.6805 9.11336 19.4392 10.3757 19.7942C11.6379 20.1492 12.9818 20.0809 14.2016 19.5997C15.4214 19.1186 16.45 18.2511 17.13 17.13"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`BugOff doesn't support ${type}`);
  return null;
});

BugOff.displayName = "BugOff";

BugOff.metadata = {
  name: "BugOff",
  category: "stroke/codingDevelopment",
  tags: ["bug", "off", "icon"],
  description: "BugOff icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BugOff;
