import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Iran: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Iran(
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
        viewBox="0 0 32 32"
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
        <path d="M1 11H31V21H1V11Z" fill="#fff" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
          fill="#4d9e4a"
        />
        <path
          d="M27 28 5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28ZM18.061 16.805C18.451 15.606 18.082 14.291 17.127 13.468 18.165 15.004 17.791 17.079 16.302 18.16L16.406 15.6V13.585C16.245 13.508 16.105 13.391 16.001 13.245 15.897 13.39 15.758 13.507 15.596 13.585V15.6L15.7 18.16C14.211 17.079 13.836 15.004 14.875 13.468 13.919 14.29 13.551 15.606 13.941 16.805 14.204 17.614 14.766 18.242 15.464 18.608 15.037 18.764 14.581 18.835 14.122 18.812 14.661 18.987 15.213 19.007 15.73 18.898L15.734 19.006 16.001 19.373 16.268 19.006 16.272 18.898C16.789 19.007 17.341 18.987 17.88 18.812 17.421 18.834 16.965 18.763 16.538 18.608 17.237 18.242 17.798 17.614 18.061 16.805Z"
          fill="#c92a1d"
        />
        <path
          d="M19.077 14.634C18.722 14.02 18.134 13.576 17.446 13.404 18.959 14.542 19.264 16.691 18.126 18.205 18.124 18.208 18.122 18.21 18.12 18.213 19.372 17.489 19.801 15.887 19.077 14.635V14.634ZM14.554 13.404C13.866 13.576 13.277 14.02 12.923 14.634 12.199 15.886 12.628 17.488 13.88 18.212 13.878 18.209 13.876 18.207 13.874 18.204 12.736 16.691 13.041 14.541 14.554 13.403V13.404ZM15.311 13.215C15.534 13.372 15.843 13.318 16 13.095 16.157 13.318 16.466 13.372 16.689 13.215 16.876 13.083 16.949 12.84 16.864 12.627 16.816 12.881 16.572 13.048 16.318 13 16.184 12.975 16.068 12.893 16 12.775 15.932 12.893 15.816 12.975 15.682 13 15.428 13.048 15.184 12.881 15.136 12.627 15.051 12.84 15.123 13.083 15.311 13.215Z"
          fill="#c92a1d"
        />
      </svg>
    );
  },
);

Iran.displayName = "Iran";

Iran.metadata = {
  name: "Iran",
  category: "flags/flags",
  tags: ["iran", "icon"],
  description: "Iran icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Iran;
