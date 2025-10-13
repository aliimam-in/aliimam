import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Mauritania: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Mauritania(
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
      <path d="M1 9H31V23H1V9Z" fill="#4ca863" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V10H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V22L31 22V24C31 26.208 29.208 28 27 28Z"
        fill="#c02f27"
      />
      <path
        d="M13.953 13.393H15.511L16 11.927L16.489 13.393H18.047L16.764 14.33L17.283 15.817L16 14.9L14.717 15.817L15.236 14.33L13.953 13.393Z"
        fill="#f8d749"
      />
      <path
        d="M8.36301 12.6399C9.05701 16.1249 13.039 18.4849 17.257 17.9109C20.531 17.4659 23.098 15.3449 23.637 12.6399C23.637 16.7449 20.218 20.0729 16 20.0729C11.782 20.0729 8.36301 16.7449 8.36301 12.6399Z"
        fill="#f8d749"
      />
    </svg>
  );
});

Mauritania.displayName = "Mauritania";

Mauritania.metadata = {
  name: "Mauritania",
  category: "flags/flags",
  tags: ["mauritania", "icon"],
  description: "Mauritania icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Mauritania;
