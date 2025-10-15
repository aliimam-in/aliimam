import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Honduras: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Honduras(
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
      <path d="M1 11H31V21H1V11Z" fill="#fff" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28ZM9.28 12.768 8.978 13.697H8.001L8.791 14.271 8.49 15.2 9.28 14.626 10.07 15.2 9.768 14.271 10.558 13.697H9.581L9.28 12.768ZM9.581 17.729 9.28 16.8 8.978 17.729H8.001L8.791 18.303 8.49 19.232 9.28 18.658 10.07 19.232 9.768 18.303 10.558 17.729H9.581ZM16.302 15.713 16 14.784 15.698 15.713H14.722L15.512 16.287 15.21 17.216 16 16.642 16.79 17.216 16.488 16.287 17.278 15.713H16.302ZM22.232 14.271 21.93 15.2 22.72 14.626 23.51 15.2 23.209 14.271 23.999 13.697H23.022L22.72 12.768 22.419 13.697H21.442L22.232 14.271ZM23.022 17.729 22.72 16.8 22.419 17.729H21.442L22.232 18.303 21.93 19.232 22.72 18.658 23.51 19.232 23.209 18.303 23.999 17.729H23.022Z"
        fill="#55bbe0"
      />
    </svg>
  );
});

Honduras.displayName = "Honduras";

Honduras.metadata = {
  name: "Honduras",
  category: "symbols/flags",
  tags: ["honduras", "icon"],
  description: "Honduras icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Honduras;
