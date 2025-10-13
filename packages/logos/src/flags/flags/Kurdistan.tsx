import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Kurdistan: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Kurdistan(
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
      viewBox="0 0 32 32"
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
      <path d="M31 11H1V21H31V11Z" fill="#fff" />
      <path
        d="M5 4H27C29.2077 4 31 5.7923 31 8V12H1V8C1 5.7923 2.7923 4 5 4Z"
        fill="#ed1b1e"
      />
      <path
        d="M27 28L5 28C2.7923 28 1 26.2077 1 24V20L31 20V24C31 26.2077 29.2077 28 27 28Z"
        fill="#248f41"
      />
      <path
        d="M16 9.35181L16.4982 12.7318L17.9706 9.64871L17.4504 13.0255L19.7661 10.5134L18.2737 13.5868L21.2269 11.8689L18.8949 14.3658L22.2233 13.5947L19.2589 15.2934L22.6667 15.5376L19.3334 16.287L22.5178 17.5248L19.1117 17.2584L21.7898 19.3799L18.6135 18.1213L20.5473 20.9379L17.8831 18.799L18.9008 22.0605L16.9854 19.2314L16.9965 22.6479L16.0001 19.3799L15.0037 22.6479L15.0148 19.2314L13.0994 22.0605L14.1171 18.799L11.4529 20.9379L13.3867 18.1213L10.2104 19.3799L12.8885 17.2584L9.4824 17.5248L12.6668 16.2869L9.3335 15.5375L12.7413 15.2933L9.7769 13.5946L13.1053 14.3657L10.7733 11.8688L13.7265 13.5867L12.2341 10.5134L14.5498 13.0255L14.0296 9.64871L15.502 12.7318L16 9.35181Z"
        fill="#f3bf45"
      />
    </svg>
  );
});

Kurdistan.displayName = "Kurdistan";

Kurdistan.metadata = {
  name: "Kurdistan",
  category: "flags/flags",
  tags: ["kurdistan", "icon"],
  description: "Kurdistan icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Kurdistan;
