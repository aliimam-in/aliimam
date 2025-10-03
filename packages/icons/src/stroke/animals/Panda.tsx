import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Panda: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Panda(
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
          d="M11.25 17.25H12.75L12 18 11.25 17.25ZM15 12 17 14M18 6.5C18 6.367 17.947 6.24 17.854 6.146 17.76 6.053 17.633 6 17.5 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.69 9.67001C21.14 9.21926 21.4892 8.67811 21.7146 8.08233C21.9399 7.48656 22.0362 6.84974 21.997 6.21398C21.9579 5.57822 21.7842 4.95802 21.4875 4.39438C21.1908 3.83074 20.7779 3.33651 20.2759 2.94437C19.774 2.55223 19.1945 2.27111 18.5758 2.11962C17.9571 1.96812 17.3134 1.94969 16.687 2.06554C16.0607 2.1814 15.4661 2.4289 14.9425 2.79168C14.419 3.15447 13.9784 3.62426 13.65 4.17001C12.5609 3.95048 11.439 3.95048 10.35 4.17001C10.0215 3.62426 9.58093 3.15447 9.05738 2.79168C8.53382 2.4289 7.93922 2.1814 7.31289 2.06554C6.68655 1.94969 6.04276 1.96812 5.42408 2.11962C4.8054 2.27111 4.22593 2.55223 3.72399 2.94437C3.22205 3.33651 2.80908 3.83074 2.51238 4.39438C2.21568 4.95802 2.04203 5.57822 2.00289 6.21398C1.96375 6.84974 2.06003 7.48656 2.28535 8.08233C2.51067 8.67811 2.8599 9.21926 3.30995 9.67001C2.48995 11.2 1.99995 12.88 1.99995 14.5C1.99995 19.47 6.47995 22 12 22C17.52 22 22 19.47 22 14.5C22 12.88 21.52 11.2 20.7 9.67001"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6.5C5.999 6.434 6.012 6.369 6.037 6.308 6.062 6.247 6.098 6.192 6.145 6.145 6.192 6.098 6.247 6.062 6.308 6.037 6.369 6.012 6.434 5.999 6.5 6M9 12 7 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Panda.displayName = "Panda";

Panda.metadata = {
  name: "Panda",
  category: "stroke/animals",
  tags: ["panda", "icon"],
  description: "Panda icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Panda;
