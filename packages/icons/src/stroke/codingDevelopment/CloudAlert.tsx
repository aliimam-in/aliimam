import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CloudAlert: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CloudAlert(
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
        d="M12 12V16M12 20H12.01M17 18H17.5C18.694 18 19.838 17.526 20.682 16.682 21.526 15.838 22 14.694 22 13.5 22 12.307 21.526 11.162 20.682 10.318 19.838 9.474 18.694 9 17.5 9H15.71C15.364 7.838 14.722 6.787 13.847 5.948 12.972 5.109 11.894 4.512 10.719 4.214 9.544 3.917 8.312 3.93 7.144 4.252 5.975 4.573 4.91 5.193 4.053 6.05 3.196 6.907 2.576 7.972 2.254 9.14 1.932 10.309 1.918 11.541 2.215 12.716 2.513 13.891 3.11 14.969 3.948 15.844 4.787 16.719 5.839 17.361 7 17.708"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CloudAlert.displayName = "CloudAlert";

CloudAlert.metadata = {
  name: "CloudAlert",
  category: "stroke/codingDevelopment",
  tags: ["cloud", "alert", "icon"],
  description: "CloudAlert icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CloudAlert;
