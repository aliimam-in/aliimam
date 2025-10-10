import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MegaphoneProps extends IconProps {
  type?: "stroke";
}

export const Megaphone: IconComponent<MegaphoneProps> = React.forwardRef<
  SVGSVGElement,
  MegaphoneProps
>(function Megaphone(
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
          d="M11 6C14.0414 6.07835 17.0139 5.0875 19.4 3.2C19.5486 3.08857 19.7252 3.02072 19.9102 3.00404C20.0952 2.98736 20.2811 3.02252 20.4472 3.10557C20.6133 3.18863 20.753 3.31629 20.8507 3.47427C20.9483 3.63225 21 3.81429 21 4V16C21 16.1857 20.9483 16.3678 20.8507 16.5257C20.753 16.6837 20.6133 16.8114 20.4472 16.8944C20.2811 16.9775 20.0952 17.0126 19.9102 16.996C19.7252 16.9793 19.5486 16.9114 19.4 16.8C17.0139 14.9125 14.0414 13.9217 11 14H5C4.46957 14 3.96086 13.7893 3.58579 13.4142C3.21071 13.0391 3 12.5304 3 12V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 14C6 16.596 6.842 19.123 8.4 21.2 8.718 21.624 9.192 21.905 9.717 21.98 10.242 22.055 10.776 21.918 11.2 21.6 11.624 21.282 11.905 20.808 11.98 20.283 12.055 19.758 11.918 19.224 11.6 18.8 10.561 17.415 10 15.731 10 14M8 6V14"
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
          d="M11 6C14.0414 6.07835 17.0139 5.0875 19.4 3.2C19.5486 3.08857 19.7252 3.02072 19.9102 3.00404C20.0952 2.98736 20.2811 3.02252 20.4472 3.10557C20.6133 3.18863 20.753 3.31629 20.8507 3.47427C20.9483 3.63225 21 3.81429 21 4V16C21 16.1857 20.9483 16.3678 20.8507 16.5257C20.753 16.6837 20.6133 16.8114 20.4472 16.8944C20.2811 16.9775 20.0952 17.0126 19.9102 16.996C19.7252 16.9793 19.5486 16.9114 19.4 16.8C17.0139 14.9125 14.0414 13.9217 11 14H5C4.46957 14 3.96086 13.7893 3.58579 13.4142C3.21071 13.0391 3 12.5304 3 12V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 14C6 16.596 6.842 19.123 8.4 21.2 8.718 21.624 9.192 21.905 9.717 21.98 10.242 22.055 10.776 21.918 11.2 21.6 11.624 21.282 11.905 20.808 11.98 20.283 12.055 19.758 11.918 19.224 11.6 18.8 10.561 17.415 10 15.731 10 14M8 6V14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`Megaphone doesn't support ${type}`);
  return null;
});

Megaphone.displayName = "Megaphone";

Megaphone.metadata = {
  name: "Megaphone",
  category: "stroke/notification",
  tags: ["megaphone", "icon"],
  description: "Megaphone icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Megaphone;
