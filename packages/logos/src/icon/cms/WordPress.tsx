import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WordPress: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WordPress(
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
      <g fill="#21759b" clipPath="url(#undefined-clip0_2062_2279)">
        <path d="M1.706 12C1.706 16.074 4.074 19.596 7.508 21.265L2.597 7.81C2.026 9.09 1.706 10.507 1.706 12ZM18.95 11.48C18.95 10.208 18.493 9.327 18.101 8.641 17.579 7.793 17.09 7.075 17.09 6.227 17.09 5.281 17.808 4.4 18.819 4.4 18.864 4.4 18.908 4.406 18.952 4.408 17.121 2.73 14.681 1.706 12 1.706 8.404 1.706 5.24 3.551 3.399 6.346 3.641 6.353 3.868 6.358 4.062 6.358 5.138 6.358 6.805 6.227 6.805 6.227 7.36 6.195 7.425 7.01 6.871 7.075 6.871 7.075 6.313 7.141 5.693 7.174L9.442 18.324 11.695 11.568 10.091 7.173C9.536 7.141 9.011 7.075 9.011 7.075 8.456 7.042 8.521 6.194 9.076 6.227 9.076 6.227 10.776 6.358 11.788 6.358 12.864 6.358 14.531 6.227 14.531 6.227 15.087 6.194 15.152 7.009 14.598 7.075 14.598 7.075 14.039 7.141 13.419 7.173L17.14 18.239 18.166 14.808C18.611 13.384 18.95 12.362 18.95 11.48Z" />
        <path d="M12.181 12.9 9.092 21.875C10.015 22.146 10.99 22.295 12 22.295 13.199 22.295 14.349 22.087 15.419 21.711 15.391 21.667 15.366 21.62 15.346 21.569L12.181 12.9ZM21.034 7.061C21.078 7.389 21.103 7.741 21.103 8.119 21.103 9.164 20.908 10.338 20.32 11.807L17.176 20.898C20.236 19.113 22.295 15.798 22.295 12 22.295 10.21 21.838 8.527 21.034 7.061Z" />
        <path d="M12.0004 0C5.38355 0 0 5.38302 0 11.9997C0 18.6172 5.38355 24 12.0004 24C18.617 24 24.0014 18.6172 24.0014 11.9997C24.0012 5.38302 18.617 0 12.0004 0ZM12.0004 23.45C5.68697 23.45 0.550245 18.3134 0.550245 11.9997C0.550245 5.68644 5.68678 0.550231 12.0004 0.550231C18.3136 0.550231 23.45 5.68644 23.45 11.9997C23.45 18.3134 18.3136 23.45 12.0004 23.45Z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2279">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

WordPress.displayName = "WordPress";

WordPress.metadata = {
  name: "WordPress",
  category: "icon/cms",
  tags: ["word", "press", "icon"],
  description: "WordPress icon from icon/cms category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WordPress;
