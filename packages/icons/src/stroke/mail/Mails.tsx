import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mails: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Mails(
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
          d="M17 19C17 19.53 16.789 20.039 16.414 20.414 16.039 20.789 15.53 21 15 21H4C3.47 21 2.961 20.789 2.586 20.414 2.211 20.039 2 19.53 2 19V11C2 10.649 2.092 10.304 2.268 10 2.444 9.696 2.696 9.444 3 9.268M22 5.5 15.581 9.679C15.259 9.886 14.883 9.996 14.5 9.996 14.117 9.996 13.742 9.886 13.419 9.679L7 5.5"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 3H9C7.89543 3 7 3.89543 7 5V13C7 14.1046 7.89543 15 9 15H20C21.1046 15 22 14.1046 22 13V5C22 3.89543 21.1046 3 20 3Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Mails.displayName = "Mails";

Mails.metadata = {
  name: "Mails",
  category: "stroke/mail",
  tags: ["mails", "icon"],
  description: "Mails icon from stroke/mail category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mails;
