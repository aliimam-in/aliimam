import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FastApi: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FastApi(
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
      <g clipPath="url(#undefined-clip0_2066_409)">
        <path
          d="M12 0C5.37469 0 0 5.37469 0 12C0 18.6253 5.37469 24 12 24C18.6253 24 24 18.6253 24 12C24 5.37469 18.6253 0 12 0ZM11.3747 21.6192V14.0922H7.19053L13.2025 2.38078V9.90778H17.2306L11.3747 21.6192Z"
          fill="#009688"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_409">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

FastApi.displayName = "FastApi";

FastApi.metadata = {
  name: "FastApi",
  category: "icon/framework",
  tags: ["fast", "api", "icon"],
  description: "FastApi icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FastApi;
