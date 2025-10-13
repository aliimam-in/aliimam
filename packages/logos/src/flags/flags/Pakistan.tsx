import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Pakistan: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Pakistan(
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
        d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
        fill="#173e1b"
      />
      <path
        d="M10 4H5C2.791 4 1 5.791 1 8V24C1 26.209 2.791 28 5 28H10V4ZM26.268 19.09C23.576 21.483 19.453 21.241 17.059 18.548 14.666 15.856 14.908 11.733 17.601 9.339 17.714 9.239 17.83 9.143 17.947 9.052 15.077 9.969 12.999 12.657 12.999 15.831 12.999 19.761 16.185 22.947 20.115 22.947 22.993 22.947 25.472 21.238 26.593 18.779 26.489 18.885 26.381 18.989 26.268 19.09Z"
        fill="#fff"
      />
      <path
        d="M22.984 13.2821L23.153 14.9971L24.024 13.5101L25.708 13.8791L24.563 12.5911L25.434 11.1041L23.855 11.7951L22.71 10.5071L22.88 12.2221L21.301 12.9131L22.984 13.2821Z"
        fill="#fff"
      />
    </svg>
  );
});

Pakistan.displayName = "Pakistan";

Pakistan.metadata = {
  name: "Pakistan",
  category: "flags/flags",
  tags: ["pakistan", "icon"],
  description: "Pakistan icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Pakistan;
