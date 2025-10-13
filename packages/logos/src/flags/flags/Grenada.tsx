import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Grenada: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Grenada(
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
        fill="#be2a2c"
      />
      <path d="M6 9H26V23H6V9Z" fill="#f6d44a" />
      <path d="M6 9 16 16 6 23V9ZM26 9 16 16 26 23V9Z" fill="#357960" />
      <path
        d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
        fill="#be2a2c"
      />
      <path
        d="M17 16.338 18.619 15.162H16.618L16 13.259 15.382 15.162H13.381L15 16.338 14.381 18.241 16 17.065 17.619 18.241 17 16.338ZM16.543 7.185 17.423 6.546H16.336L16 5.513 15.664 6.546H14.577L15.457 7.185 15.121 8.219 16 7.58 16.879 8.219 16.543 7.185ZM11.7 7.185 12.579 6.546H11.492L11.156 5.513 10.82 6.546H9.734L10.613 7.185 10.277 8.219 11.156 7.58 12.035 8.219 11.7 7.185ZM20.3 7.185 19.421 6.546H20.508L20.844 5.513 21.18 6.546H22.266L21.387 7.185 21.723 8.219 20.844 7.58 19.965 8.219 20.3 7.185ZM16.543 25.235 17.423 24.596H16.336L16 23.562 15.664 24.596H14.577L15.457 25.235 15.121 26.269 16 25.63 16.879 26.269 16.543 25.235ZM11.7 25.235 12.579 24.596H11.492L11.156 23.562 10.82 24.596H9.734L10.613 25.235 10.277 26.269 11.156 25.63 12.035 26.269 11.7 25.235ZM20.3 25.235 19.421 24.596H20.508L20.844 23.562 21.18 24.596H22.266L21.387 25.235 21.723 26.269 20.844 25.63 19.965 26.269 20.3 25.235Z"
        fill="#f6d44a"
      />
      <path
        d="M8.06494 16.131C8.40494 16.809 9.08094 17.557 9.68294 17.83C9.71194 17.152 9.49594 16.275 9.18694 15.573L8.06494 16.131Z"
        fill="#be2a2c"
      />
      <path
        d="M7.45494 13.8501C7.96094 14.9411 6.05794 17.5031 9.16394 18.1501C8.78694 17.6211 8.57994 16.7361 8.68294 16.0421C9.32794 16.3171 9.97494 16.9551 10.2289 17.5541C11.2999 14.5681 8.12094 14.8511 7.45494 13.8501Z"
        fill="#f6d44a"
      />
    </svg>
  );
});

Grenada.displayName = "Grenada";

Grenada.metadata = {
  name: "Grenada",
  category: "flags/flags",
  tags: ["grenada", "icon"],
  description: "Grenada icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Grenada;
