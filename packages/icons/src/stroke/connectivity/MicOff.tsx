import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MicOffProps extends IconProps {
  type?: "stroke";
}

export const MicOff: IconComponent<MicOffProps> = React.forwardRef<
  SVGSVGElement,
  MicOffProps
>(function MicOff(
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
          d="M12 19V22M15 9.34V5C14.996 4.326 14.765 3.674 14.345 3.147 13.925 2.621 13.34 2.251 12.684 2.097 12.028 1.943 11.34 2.015 10.729 2.3 10.119 2.586 9.623 3.068 9.32 3.67M16.95 16.95C15.971 17.929 14.724 18.596 13.366 18.866 12.008 19.136 10.6 18.998 9.321 18.468 8.042 17.938 6.949 17.041 6.18 15.889 5.41 14.738 5 13.385 5 12V10M18.89 13.23C18.963 12.824 19 12.412 19 12V10M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9V12C9.00052 12.593 9.17675 13.1725 9.50643 13.6653C9.83611 14.1582 10.3045 14.5423 10.8523 14.7691C11.4002 14.996 12.0029 15.0554 12.5845 14.9399C13.1661 14.8243 13.7005 14.539 14.12 14.12"
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
          d="M12 19V22M15 9.34V5C14.996 4.326 14.765 3.674 14.345 3.147 13.925 2.621 13.34 2.251 12.684 2.097 12.028 1.943 11.34 2.015 10.729 2.3 10.119 2.586 9.623 3.068 9.32 3.67M16.95 16.95C15.971 17.929 14.724 18.596 13.366 18.866 12.008 19.136 10.6 18.998 9.321 18.468 8.042 17.938 6.949 17.041 6.18 15.889 5.41 14.738 5 13.385 5 12V10M18.89 13.23C18.963 12.824 19 12.412 19 12V10M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9V12C9.00052 12.593 9.17675 13.1725 9.50643 13.6653C9.83611 14.1582 10.3045 14.5423 10.8523 14.7691C11.4002 14.996 12.0029 15.0554 12.5845 14.9399C13.1661 14.8243 13.7005 14.539 14.12 14.12"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MicOff doesn't support ${type}`);
  return null;
});

MicOff.displayName = "MicOff";

MicOff.metadata = {
  name: "MicOff",
  category: "stroke/connectivity",
  tags: ["mic", "off", "icon"],
  description: "MicOff icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MicOff;
