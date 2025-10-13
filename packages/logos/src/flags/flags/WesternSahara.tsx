import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WesternSahara: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WesternSahara(
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
      <path d="M31 11H1V21H31V11Z" fill="#fff" />
      <path
        d="M5 4H27C29.2077 4 31 5.7923 31 8V12H1V8C1 5.7923 2.7923 4 5 4Z"
        fill="currentColor"
      />
      <path
        d="M27 28L5 28C2.7923 28 1 26.2077 1 24V20L31 20V24C31 26.2077 29.2077 28 27 28Z"
        fill="#027b3b"
      />
      <path
        d="M2.271 26.911 15 16 2.271 5.09C1.493 5.819 1 6.849 1 8V24C1 25.151 1.493 26.181 2.271 26.911ZM18.211 16C18.211 14.187 19.511 12.678 21.229 12.352 21.003 12.309 20.771 12.286 20.532 12.286 18.481 12.286 16.818 13.949 16.818 16 16.818 18.051 18.481 19.714 20.532 19.714 20.771 19.714 21.003 19.691 21.229 19.648 19.511 19.322 18.211 17.813 18.211 16Z"
        fill="#c50a14"
      />
      <path
        d="M19.5354 18.2491L21.1192 17.1169L22.6906 18.2662L22.1033 16.41L23.682 15.2706L21.7352 15.2556L21.1394 13.4021L20.5236 15.249L18.5767 15.2429L20.1429 16.3993L19.5354 18.2491Z"
        fill="#c50a14"
      />
    </svg>
  );
});

WesternSahara.displayName = "WesternSahara";

WesternSahara.metadata = {
  name: "WesternSahara",
  category: "flags/flags",
  tags: ["western", "sahara", "icon"],
  description: "WesternSahara icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WesternSahara;
