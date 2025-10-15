import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FrenchGuiana: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FrenchGuiana(
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
      <path
        d="M2.316 5.05298C1.513 5.78498 1 6.82898 1 7.99998V24C1 26.209 2.791 28 5 28H27C28.037 28 28.974 27.595 29.684 26.947L2.316 5.05298Z"
        fill="#f7df4b"
      />
      <path
        d="M29.684 26.947C30.487 26.215 31 25.171 31 24V8C31 5.791 29.209 4 27 4H4.99998C3.96298 4 3.02598 4.405 2.31598 5.053L29.684 26.947Z"
        fill="#3c883a"
      />
      <path
        d="M17.673 16.4569L20.381 14.4899H17.034L16 11.3069L14.966 14.4899H11.619L14.327 16.4569L13.292 19.6399L16 17.6729L18.708 19.6399L17.673 16.4569Z"
        fill="#c92d25"
      />
    </svg>
  );
});

FrenchGuiana.displayName = "FrenchGuiana";

FrenchGuiana.metadata = {
  name: "FrenchGuiana",
  category: "symbols/flags",
  tags: ["french", "guiana", "icon"],
  description: "FrenchGuiana icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FrenchGuiana;
