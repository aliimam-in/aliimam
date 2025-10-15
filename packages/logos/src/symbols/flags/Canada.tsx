import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Canada: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Canada(
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
        <path d="M8 4H24V28H8V4Z" fill="#fff" />
        <path
          d="M5 4H9V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4ZM27 28H23L23 4H27C29.208 4 31 5.792 31 8L31 24C31 26.208 29.208 28 27 28ZM16.275 22.167 16.137 19.526C16.13 19.366 16.254 19.23 16.414 19.222 16.435 19.222 16.456 19.222 16.477 19.226L19.106 19.688 18.751 18.709C18.721 18.629 18.746 18.539 18.812 18.486L21.692 16.154 21.043 15.851C20.952 15.808 20.908 15.705 20.939 15.609L21.508 13.858 19.849 14.21C19.756 14.229 19.663 14.181 19.626 14.094L19.305 13.338 18.01 14.727C17.934 14.807 17.809 14.81 17.729 14.734 17.68 14.687 17.658 14.619 17.671 14.552L18.295 11.332 17.294 11.91C17.199 11.966 17.077 11.934 17.022 11.839 17.02 11.835 17.018 11.831 17.016 11.827L16 9.832 14.984 11.827C14.935 11.925 14.815 11.965 14.717 11.916 14.713 11.914 14.709 11.912 14.705 11.91L13.704 11.332 14.328 14.552C14.349 14.66 14.278 14.764 14.17 14.785 14.103 14.798 14.035 14.776 13.988 14.727L12.693 13.338 12.372 14.094C12.335 14.181 12.241 14.23 12.149 14.21L10.49 13.858 11.059 15.609C11.09 15.704 11.046 15.808 10.955 15.851L10.306 16.154 13.186 18.486C13.252 18.54 13.277 18.63 13.247 18.709L12.892 19.688 15.521 19.226C15.679 19.199 15.83 19.305 15.857 19.463 15.861 19.484 15.862 19.505 15.861 19.526L15.723 22.167H16.275Z"
          fill="#c53a28"
        />
      </svg>
    );
  },
);

Canada.displayName = "Canada";

Canada.metadata = {
  name: "Canada",
  category: "symbols/flags",
  tags: ["canada", "icon"],
  description: "Canada icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Canada;
