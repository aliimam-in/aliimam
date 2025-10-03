import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PawPrint: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PawPrint(
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
        d="M11 6C12.105 6 13 5.105 13 4 13 2.895 12.105 2 11 2 9.895 2 9 2.895 9 4 9 5.105 9.895 6 11 6ZM18 10C19.105 10 20 9.105 20 8 20 6.895 19.105 6 18 6 16.895 6 16 6.895 16 8 16 9.105 16.895 10 18 10ZM20 18C21.105 18 22 17.105 22 16 22 14.895 21.105 14 20 14 18.895 14 18 14.895 18 16 18 17.105 18.895 18 20 18ZM9 10C9.657 10 10.307 10.129 10.913 10.381 11.52 10.632 12.071 11 12.536 11.465 13 11.929 13.368 12.48 13.619 13.087 13.871 13.693 14 14.343 14 15V18.5C14 19.337 13.7 20.145 13.155 20.78 12.61 21.414 11.855 21.832 11.029 21.959 10.202 22.085 9.357 21.911 8.647 21.468 7.938 21.026 7.41 20.343 7.16 19.545 6.733 18.168 5.833 17.267 4.46 16.84 3.662 16.59 2.98 16.063 2.537 15.354 2.095 14.645 1.92 13.8 2.046 12.974 2.172 12.147 2.589 11.393 3.223 10.848 3.856 10.302 4.664 10.002 5.5 10H9Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PawPrint.displayName = "PawPrint";

PawPrint.metadata = {
  name: "PawPrint",
  category: "stroke/animals",
  tags: ["paw", "print", "icon"],
  description: "PawPrint icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PawPrint;
