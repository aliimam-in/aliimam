import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ZenBrowser: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ZenBrowser(
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
      <g
        fill="#202020"
        clipPath="url(#undefined-clip0_2062_2187)"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M12 16.6155C14.5489 16.6155 16.6155 14.5493 16.6155 12C16.6155 9.45115 14.5493 7.38452 12 7.38452C9.45115 7.38452 7.38452 9.45077 7.38452 12C7.38452 14.5489 9.45077 16.6155 12 16.6155ZM15.6923 12C15.6923 14.0393 14.0393 15.6923 12 15.6923C9.96077 15.6923 8.30777 14.0393 8.30777 12C8.30777 9.96077 9.96077 8.30777 12 8.30777C14.0393 8.30777 15.6923 9.96077 15.6923 12Z" />
        <path d="M19.9999 12C19.9999 16.4182 16.4186 19.9999 12 19.9999C7.58175 19.9999 4.00012 16.4186 4.00012 12C4.00012 7.58175 7.58137 4.00012 12 4.00012C16.4182 4.00012 19.9999 7.58137 19.9999 12ZM12 18.4612C15.5685 18.4612 18.4612 15.5685 18.4612 12C18.4612 8.4315 15.5689 5.53875 12 5.53875C8.43112 5.53875 5.53875 8.43112 5.53875 12C5.53875 15.5689 8.43112 18.4612 12 18.4612Z" />
        <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37262 24 0 18.6274 0 12C0 5.37262 5.37262 0 12 0C18.6274 0 24 5.37262 24 12ZM12 21.846C17.4379 21.846 21.846 17.4379 21.846 12C21.846 6.56212 17.4379 2.154 12 2.154C6.56212 2.154 2.154 6.56212 2.154 12C2.154 17.4379 6.56212 21.846 12 21.846Z" />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2187">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

ZenBrowser.displayName = "ZenBrowser";

ZenBrowser.metadata = {
  name: "ZenBrowser",
  category: "icon/browser",
  tags: ["zen", "browser", "icon"],
  description: "ZenBrowser icon from icon/browser category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ZenBrowser;
