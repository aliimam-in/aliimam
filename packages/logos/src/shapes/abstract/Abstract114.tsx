import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract114: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract114(
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
        d="M24 12.0009C22.2783 11.3622 20.1446 10.2717 18.8216 9.11883L19.3149 10.4852H13.5148V4.68321L14.8812 5.17837C13.7264 3.85543 12.6378 1.71982 11.9991 0C11.3622 1.72171 10.2717 3.85543 9.11883 5.17837L10.4852 4.6851V10.4852H4.6851L5.17837 9.11883C3.85543 10.2736 1.71982 11.3622 0 12.0009C1.72171 12.6378 3.85543 13.7283 5.17837 14.8812L4.6851 13.5148H10.4852V19.3149L9.11883 18.8216C10.2736 20.1446 11.3622 22.2802 11.9991 24C12.6378 22.2802 13.7283 20.1446 14.8812 18.8216L13.5148 19.3149V13.5148H19.3149L18.8216 14.8812C20.1446 13.7264 22.2802 12.6378 24 12.0009Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract114.displayName = "Abstract114";

Abstract114.metadata = {
  name: "Abstract114",
  category: "shapes/abstract",
  tags: ["abstract", "114", "icon"],
  description: "Abstract114 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract114;
