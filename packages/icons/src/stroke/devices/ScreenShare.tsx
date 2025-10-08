import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ScreenShareProps extends IconProps {
  type?: "stroke";
}

export const ScreenShare: IconComponent<ScreenShareProps> = React.forwardRef<
  SVGSVGElement,
  ScreenShareProps
>(function ScreenShare(
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
          d="M13 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V15C2 15.53 2.211 16.039 2.586 16.414 2.961 16.789 3.47 17 4 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V12M8 21H16M12 17V21M17 8 22 3M17 3H22V8"
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
          d="M13 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V15C2 15.53 2.211 16.039 2.586 16.414 2.961 16.789 3.47 17 4 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V12M8 21H16M12 17V21M17 8 22 3M17 3H22V8"
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
          d="M13 3H4C3.47 3 2.961 3.211 2.586 3.586 2.211 3.961 2 4.47 2 5V15C2 15.53 2.211 16.039 2.586 16.414 2.961 16.789 3.47 17 4 17H20C20.53 17 21.039 16.789 21.414 16.414 21.789 16.039 22 15.53 22 15V12M8 21H16M12 17V21M17 8 22 3M17 3H22V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`ScreenShare doesn't support ${type}`);
  return null;
});

ScreenShare.displayName = "ScreenShare";

ScreenShare.metadata = {
  name: "ScreenShare",
  category: "stroke/devices",
  tags: ["screen", "share", "icon"],
  description: "ScreenShare icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ScreenShare;
