import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Church: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Church(
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
          d="M10 9H14M12 7V12M14 21V18C14 17.47 13.789 16.961 13.414 16.586 13.039 16.211 12.53 16 12 16 11.47 16 10.961 16.211 10.586 16.586 10.211 16.961 10 17.47 10 18V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9L21.52 11.147C21.6665 11.2362 21.7877 11.3616 21.8717 11.5112C21.9558 11.6608 22 11.8294 22 12.001V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V12.001C2.00003 11.8294 2.0442 11.6608 2.12826 11.5112C2.21232 11.3616 2.33345 11.2362 2.48 11.147L6 9"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 21V6.99999C5.99991 6.84978 6.03367 6.70147 6.09877 6.56609C6.16386 6.43071 6.25862 6.31173 6.376 6.21799L11.376 2.21899C11.5534 2.07738 11.7737 2.00034 12.0007 2.00052C12.2277 2.0007 12.4478 2.0781 12.625 2.21999L17.625 6.21999C17.7419 6.31362 17.8363 6.43232 17.9013 6.56732C17.9662 6.70233 17.9999 6.8502 18 6.99999V21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Church.displayName = "Church";

Church.metadata = {
  name: "Church",
  category: "stroke/buildings",
  tags: ["church", "icon"],
  description: "Church icon from stroke/buildings category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Church;
