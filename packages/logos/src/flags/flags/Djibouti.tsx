import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Djibouti: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Djibouti(
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
        d="M1 24C1 26.209 2.791 28 5 28H27C29.209 28 31 26.209 31 24V15H1V24Z"
        fill="#4fac3f"
      />
      <path
        d="M27 4H5C2.791 4 1 5.791 1 8V16H31V8C31 5.791 29.209 4 27 4Z"
        fill="#7cb2e3"
      />
      <path
        d="M2.433 27.0441L19 16.0001L2.433 4.95605C1.564 5.69005 1 6.77405 1 8.00005V24.0001C1 25.2271 1.564 26.3111 2.433 27.0441Z"
        fill="#fff"
      />
      <path
        d="M9.46701 16.5529L11.562 15.0299H8.97201L8.17201 12.5669L7.37101 15.0299H4.78101L6.87701 16.5529L6.07601 19.0159L8.17201 17.4939L10.267 19.0159L9.46701 16.5529Z"
        fill="#c62d25"
      />
    </svg>
  );
});

Djibouti.displayName = "Djibouti";

Djibouti.metadata = {
  name: "Djibouti",
  category: "flags/flags",
  tags: ["djibouti", "icon"],
  description: "Djibouti icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Djibouti;
