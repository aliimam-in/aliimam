import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const C: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function C(
    {
      color = "currentColor",
      fill,
      size,
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
        viewBox="0 0 15 16"
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
          d="M14.9801 7.80214C14.9801 7.17457 14.9291 6.71661 14.8189 6.2417H7.65271V9.07423H11.8591C11.7743 9.77815 11.3164 10.8382 10.2987 11.5506L10.2844 11.6454L12.5502 13.4007L12.7072 13.4164C14.1489 12.0849 14.9801 10.1258 14.9801 7.80214Z"
          fill="#4285f4"
        />
        <path
          d="M7.65264 15.2652C9.71342 15.2652 11.4435 14.5867 12.7071 13.4164L10.2986 11.5506C9.65408 12.0001 8.78903 12.3138 7.65264 12.3138C5.63423 12.3138 3.92114 10.9824 3.31047 9.14209L3.22096 9.14969L0.864918 10.9731L0.834106 11.0587C2.08924 13.552 4.66739 15.2652 7.65264 15.2652Z"
          fill="#34a853"
        />
        <path
          d="M3.31051 9.14226C3.14938 8.66735 3.05613 8.15847 3.05613 7.63269C3.05613 7.10685 3.14938 6.59802 3.30203 6.12311L3.29777 6.02196L0.912202 4.16931L0.83415 4.20644C0.316848 5.2411 0.0200195 6.40298 0.0200195 7.63269C0.0200195 8.86239 0.316848 10.0242 0.83415 11.0589L3.31051 9.14226Z"
          fill="#fbbc05"
        />
        <path
          d="M7.65264 2.95128C9.08586 2.95128 10.0526 3.57037 10.6039 4.08773L12.758 1.98449C11.4351 0.754788 9.71342 0 7.65264 0C4.66739 0 2.08924 1.7131 0.834106 4.20641L3.30199 6.12308C3.92114 4.28277 5.63423 2.95128 7.65264 2.95128Z"
          fill="#eb4335"
        />
      </svg>
    );
  },
);

C.displayName = "C";

C.metadata = {
  name: "C",
  category: "icon/design",
  tags: ["icon"],
  description: "C icon from icon/design category",
  type: ["stroke", "solid"],
} as IconMetadata;

export default C;
