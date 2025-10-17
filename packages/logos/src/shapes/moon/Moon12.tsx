import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Moon12: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Moon12(
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
          d="M12.0604 12.2288C12.9288 15.0831 15.5818 17.16 18.72 17.16C20.5421 17.16 22.2007 16.4598 23.4413 15.3138C23.5779 15.1876 23.8034 15.246 23.8424 15.4278C23.9456 15.9088 24 16.408 24 16.92C24 20.8301 20.8302 23.9999 16.92 23.9999C13.0098 23.9999 9.84003 20.8301 9.84003 16.92C9.84003 15.0384 10.574 13.3284 11.7712 12.0604C8.91691 12.9288 6.84 15.5818 6.84 18.72C6.84 20.5421 7.54019 22.2007 8.68619 23.4413C8.81235 23.5779 8.75402 23.8034 8.57222 23.8424C8.09114 23.9456 7.59192 24 7.08001 24C3.16985 24 4.21129e-05 20.8302 4.17711e-05 16.92C4.14293e-05 13.0098 3.16985 9.84003 7.08001 9.84003C8.96152 9.84003 10.6716 10.574 11.9396 11.7712C11.0712 8.91691 8.41814 6.84 5.27998 6.84C3.45786 6.84 1.79929 7.54019 0.558649 8.68619C0.422068 8.81235 0.196537 8.75402 0.157536 8.57222C0.054329 8.09114 0 7.59192 0 7.08001C-3.96468e-07 3.16985 3.16981 4.17375e-05 7.07997 4.15665e-05C10.9901 4.13956e-05 14.1599 3.16985 14.1599 7.08001C14.1599 8.96153 13.426 10.6716 12.2288 11.9396C15.0831 11.0712 17.16 8.41814 17.16 5.27998C17.16 3.45787 16.4598 1.79929 15.3138 0.558649C15.1876 0.422068 15.246 0.196537 15.4277 0.157536C15.9088 0.0543291 16.408 0 16.92 0C20.8301 0 23.9999 3.16981 23.9999 7.07997C23.9999 10.9901 20.8301 14.1599 16.92 14.1599C15.0384 14.1599 13.3284 13.426 12.0604 12.2288Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

Moon12.displayName = "Moon12";

Moon12.metadata = {
  name: "Moon12",
  category: "shapes/moon",
  tags: ["moon", "12", "icon"],
  description: "Moon12 icon from shapes/moon category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Moon12;
