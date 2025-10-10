import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Droplets: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Droplets(
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
        d="M7 16.3C9.2 16.3 11 14.47 11 12.25C11 11.09 10.43 9.99005 9.29 9.06005C8.15 8.13005 7.29 6.75005 7 5.30005C6.71 6.75005 5.86 8.14005 4.71 9.06005C3.56 9.98005 3 11.1 3 12.25C3 14.47 4.8 16.3 7 16.3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5598 6.60002C13.2476 5.50114 13.7351 4.28906 13.9998 3.02002C14.4998 5.52002 15.9998 7.92002 17.9998 9.52002C19.9998 11.12 20.9998 13.02 20.9998 15.02C21.0056 16.4023 20.6007 17.7552 19.8366 18.9071C19.0726 20.059 17.9837 20.9582 16.708 21.4905C15.4323 22.0229 14.0273 22.1644 12.671 21.8973C11.3148 21.6302 10.0684 20.9664 9.08984 19.99"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Droplets.displayName = "Droplets";

Droplets.metadata = {
  name: "Droplets",
  category: "stroke/weather",
  tags: ["droplets", "icon"],
  description: "Droplets icon from stroke/weather category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Droplets;
