import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract13: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract13(
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
        d="M23.5352 10.1505V9.68571H17.5867L22.1219 5.15048L18.8495 1.8781L14.3143 6.41333V0H9.68571V6.41333L5.15047 1.8781L1.87809 5.15048L6.41333 9.68571H0V14.3143H6.41333L1.87809 18.8495L5.15047 22.1219L9.68571 17.5867V24H14.3143V17.5867L18.8495 22.1219L22.1219 18.8495L17.5867 14.3143H24V9.68571H23.5352V10.1505H23.0724V13.3848H15.3448L20.8076 18.8495L18.8495 20.8076L13.3867 15.3448V23.0705H10.6152V15.3448L5.15047 20.8076L3.19238 18.8495L8.65524 13.3848H0.929525V10.6133H8.65524L3.19238 5.15048L5.15047 3.19238L10.6152 8.65524V0.927621H13.3867V8.65524L18.8495 3.19238L20.8076 5.15048L15.3448 10.6133H23.5352V10.1505H23.0724H23.5352Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract13.displayName = "Abstract13";

Abstract13.metadata = {
  name: "Abstract13",
  category: "shapes/abstract",
  tags: ["abstract", "13", "icon"],
  description: "Abstract13 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract13;
