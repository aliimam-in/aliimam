import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MegaphoneOffProps extends IconProps {
  type?: "stroke";
}

export const MegaphoneOff: IconComponent<MegaphoneOffProps> = React.forwardRef<
  SVGSVGElement,
  MegaphoneOffProps
>(function MegaphoneOff(
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
          d="M11.636 6C14.459 5.935 17.185 4.952 19.4 3.2 19.549 3.089 19.725 3.021 19.91 3.004 20.095 2.987 20.281 3.023 20.447 3.106 20.613 3.189 20.753 3.316 20.851 3.474 20.948 3.632 21 3.814 21 4V15.344M14.378 14.357C13.273 14.091 12.137 13.971 11 14H5C4.47 14 3.961 13.789 3.586 13.414 3.211 13.039 3 12.53 3 12V8C3 7.47 3.211 6.961 3.586 6.586 3.961 6.211 4.47 6 5 6H6M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 14C6 16.596 6.842 19.123 8.4 21.2 8.718 21.624 9.192 21.905 9.717 21.98 10.242 22.055 10.776 21.918 11.2 21.6 11.624 21.282 11.905 20.808 11.98 20.283 12.055 19.758 11.918 19.224 11.6 18.8 10.561 17.415 10 15.731 10 14M8 8V14"
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
          d="M11.636 6C14.459 5.935 17.185 4.952 19.4 3.2 19.549 3.089 19.725 3.021 19.91 3.004 20.095 2.987 20.281 3.023 20.447 3.106 20.613 3.189 20.753 3.316 20.851 3.474 20.948 3.632 21 3.814 21 4V15.344M14.378 14.357C13.273 14.091 12.137 13.971 11 14H5C4.47 14 3.961 13.789 3.586 13.414 3.211 13.039 3 12.53 3 12V8C3 7.47 3.211 6.961 3.586 6.586 3.961 6.211 4.47 6 5 6H6M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 14C6 16.596 6.842 19.123 8.4 21.2 8.718 21.624 9.192 21.905 9.717 21.98 10.242 22.055 10.776 21.918 11.2 21.6 11.624 21.282 11.905 20.808 11.98 20.283 12.055 19.758 11.918 19.224 11.6 18.8 10.561 17.415 10 15.731 10 14M8 8V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`MegaphoneOff doesn't support ${type}`);
  return null;
});

MegaphoneOff.displayName = "MegaphoneOff";

MegaphoneOff.metadata = {
  name: "MegaphoneOff",
  category: "stroke/notification",
  tags: ["megaphone", "off", "icon"],
  description: "MegaphoneOff icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MegaphoneOff;
