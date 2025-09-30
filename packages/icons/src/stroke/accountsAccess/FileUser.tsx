import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FileUser: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FileUser(
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
        d="M14 2V6C14 6.53 14.211 7.039 14.586 7.414 14.961 7.789 15.47 8 16 8H20M15 18C15 17.204 14.684 16.441 14.121 15.879 13.559 15.316 12.796 15 12 15 11.204 15 10.441 15.316 9.879 15.879 9.316 16.441 9 17.204 9 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.1046 15 14 14.1046 14 13C14 11.8954 13.1046 11 12 11C10.8954 11 10 11.8954 10 13C10 14.1046 10.8954 15 12 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

FileUser.displayName = "FileUser";

FileUser.metadata = {
  name: "FileUser",
  category: "stroke/accountsAccess",
  tags: ["file", "user", "icon"],
  description: "FileUser icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FileUser;
