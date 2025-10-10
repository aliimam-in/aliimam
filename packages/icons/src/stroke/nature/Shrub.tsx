import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Shrub: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Shrub(
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
          d="M12 22V16.828C12 16.298 11.789 15.789 11.414 15.414L9.5 13.5M14.5 14.5 12 17"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.9999 8.8C18.1624 9.46723 19.068 10.5045 19.5723 11.7464C20.0766 12.9883 20.1505 14.3633 19.7823 15.6521C19.4141 16.9409 18.6249 18.0693 17.5406 18.8574C16.4564 19.6454 15.1394 20.0476 13.7999 20H9.9999C8.62885 19.9069 7.32257 19.3817 6.26869 18.4998C5.21481 17.6178 4.46756 16.4246 4.13426 15.0914C3.80097 13.7582 3.89878 12.3537 4.41365 11.0796C4.92852 9.80549 5.83395 8.72734 6.9999 8C6.9999 6.67392 7.52669 5.40215 8.46437 4.46447C9.40205 3.52678 10.6738 3 11.9999 3C13.326 3 14.5978 3.52678 15.5354 4.46447C16.4731 5.40215 16.9999 6.67392 16.9999 8V8.8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Shrub.displayName = "Shrub";

Shrub.metadata = {
  name: "Shrub",
  category: "stroke/nature",
  tags: ["shrub", "icon"],
  description: "Shrub icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Shrub;
