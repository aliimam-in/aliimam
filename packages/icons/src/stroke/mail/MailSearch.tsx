import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MailSearch: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MailSearch(
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
        d="M22 12.5V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 19.1 2.9 20 4 20H11.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 7 13.03 12.7C12.721 12.893 12.364 12.996 12 12.996 11.636 12.996 11.279 12.893 10.97 12.7L2 7M18 21C18.796 21 19.559 20.684 20.121 20.121 20.684 19.559 21 18.796 21 18 21 17.204 20.684 16.441 20.121 15.879 19.559 15.316 18.796 15 18 15 17.204 15 16.441 15.316 15.879 15.879 15.316 16.441 15 17.204 15 18 15 18.796 15.316 19.559 15.879 20.121 16.441 20.684 17.204 21 18 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 21C19.657 21 21 19.657 21 18 21 16.343 19.657 15 18 15 16.343 15 15 16.343 15 18 15 19.657 16.343 21 18 21ZM22 22 20.5 20.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MailSearch.displayName = "MailSearch";

MailSearch.metadata = {
  name: "MailSearch",
  category: "stroke/mail",
  tags: ["mail", "search", "icon"],
  description: "MailSearch icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MailSearch;
