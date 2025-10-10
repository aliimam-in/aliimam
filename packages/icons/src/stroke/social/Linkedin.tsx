import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Linkedin: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Linkedin(
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
        d="M16 8C17.591 8 19.117 8.632 20.243 9.757 21.368 10.883 22 12.409 22 14V21H18V14C18 13.47 17.789 12.961 17.414 12.586 17.039 12.211 16.53 12 16 12 15.47 12 14.961 12.211 14.586 12.586 14.211 12.961 14 13.47 14 14V21H10V14C10 12.409 10.632 10.883 11.757 9.757 12.883 8.632 14.409 8 16 8ZM6 9H2V21H6V9ZM4 6C5.105 6 6 5.105 6 4 6 2.895 5.105 2 4 2 2.895 2 2 2.895 2 4 2 5.105 2.895 6 4 6Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Linkedin.displayName = "Linkedin";

Linkedin.metadata = {
  name: "Linkedin",
  category: "stroke/social",
  tags: ["linkedin", "icon"],
  description: "Linkedin icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Linkedin;
