import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Tags: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Tags(
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
          d="M13.172 2C13.702 2 14.211 2.211 14.586 2.586L21.296 9.296C21.521 9.519 21.7 9.785 21.821 10.077 21.943 10.37 22.006 10.683 22.006 11 22.006 11.317 21.943 11.631 21.821 11.923 21.7 12.215 21.521 12.481 21.296 12.704L16.704 17.296C16.481 17.521 16.215 17.7 15.923 17.821 15.631 17.943 15.317 18.006 15 18.006 14.683 18.006 14.37 17.943 14.077 17.821 13.785 17.7 13.519 17.521 13.296 17.296L6.586 10.586C6.211 10.211 6 9.702 6 9.172V3C6 2.735 6.105 2.48 6.293 2.293 6.48 2.105 6.735 2 7 2H13.172ZM2 7V13.172C2 13.702 2.211 14.211 2.586 14.586L9.296 21.296C9.711 21.715 10.266 21.966 10.855 22.001 11.443 22.037 12.024 21.854 12.487 21.489"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 7C10.7761 7 11 6.77614 11 6.5C11 6.22386 10.7761 6 10.5 6C10.2239 6 10 6.22386 10 6.5C10 6.77614 10.2239 7 10.5 7Z"
          fill="currentColor"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Tags.displayName = "Tags";

Tags.metadata = {
  name: "Tags",
  category: "stroke/accountsAccess",
  tags: ["tags", "icon"],
  description: "Tags icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Tags;
