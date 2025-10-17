import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Terraform: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Terraform(
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
        d="M8.848 5.83333L14.118 8.83333V14.8333L8.848 11.8333V5.83333ZM14.73 8.83333V14.8333L20 11.8333V5.83333L14.73 8.83333ZM3 2.5V8.5L8.27 11.5V5.5L3 2.5ZM8.848 18.5L14.118 21.5V15.5L8.848 12.5V18.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

Terraform.displayName = "Terraform";

Terraform.metadata = {
  name: "Terraform",
  category: "icon/language",
  tags: ["terraform", "icon"],
  description: "Terraform icon from icon/language category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Terraform;
