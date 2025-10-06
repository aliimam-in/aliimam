import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Workflow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Workflow(
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
        d="M9 3H5C3.895 3 3 3.895 3 5V9C3 10.105 3.895 11 5 11H9C10.105 11 11 10.105 11 9V5C11 3.895 10.105 3 9 3ZM7 11V15C7 15.53 7.211 16.039 7.586 16.414 7.961 16.789 8.47 17 9 17H13M19 13H15C13.895 13 13 13.895 13 15V19C13 20.105 13.895 21 15 21H19C20.105 21 21 20.105 21 19V15C21 13.895 20.105 13 19 13Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Workflow.displayName = "Workflow";

Workflow.metadata = {
  name: "Workflow",
  category: "stroke/codingDevelopment",
  tags: ["workflow", "icon"],
  description: "Workflow icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Workflow;
