import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const UnitedArabEmira: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function UnitedArabEmira(
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
        d="M5 4H11V28H5C2.792 28 1 26.208 1 24V8C1 5.792 2.792 4 5 4Z"
        fill="#ea3323"
      />
      <path
        d="M10 20V28H27C29.209 28 31 26.209 31 24V20H10Z"
        fill="currentColor"
      />
      <path d="M10 11H31V21H10V11Z" fill="#fff" />
      <path d="M27 4H10V12H31V8C31 5.791 29.209 4 27 4Z" fill="#317234" />
    </svg>
  );
});

UnitedArabEmira.displayName = "UnitedArabEmira";

UnitedArabEmira.metadata = {
  name: "UnitedArabEmira",
  category: "symbols/flags",
  tags: ["united", "arab", "emira", "icon"],
  description: "UnitedArabEmira icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default UnitedArabEmira;
