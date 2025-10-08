import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const View: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function View(
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
          d="M21 17V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V17M21 7V5C21 4.47 20.789 3.961 20.414 3.586 20.039 3.211 19.53 3 19 3H5C4.47 3 3.961 3.211 3.586 3.586 3.211 3.961 3 4.47 3 5V7M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.944 12.33C19.0187 12.1164 19.0187 11.8837 18.944 11.67C18.381 10.2905 17.4198 9.10985 16.1831 8.27879C14.9463 7.44774 13.4901 7.00391 12 7.00391C10.51 7.00391 9.05372 7.44774 7.81696 8.27879C6.58021 9.10985 5.61903 10.2905 5.05602 11.67C4.98133 11.8837 4.98133 12.1164 5.05602 12.33C5.61903 13.7096 6.58021 14.8902 7.81696 15.7213C9.05372 16.5523 10.51 16.9962 12 16.9962C13.4901 16.9962 14.9463 16.5523 16.1831 15.7213C17.4198 14.8902 18.381 13.7096 18.944 12.33Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

View.displayName = "View";

View.metadata = {
  name: "View",
  category: "stroke/design",
  tags: ["view", "icon"],
  description: "View icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default View;
