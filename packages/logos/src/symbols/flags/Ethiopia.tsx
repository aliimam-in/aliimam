import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ethiopia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Ethiopia(
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
      <path d="M1 11H31V21H1V11Z" fill="#f7df4b" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
        fill="#3c883a"
      />
      <path
        d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
        fill="#c92d25"
      />
      <path
        d="M16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z"
        fill="#1e44aa"
      />
      <path
        d="M16 10.909L15.777 11.595L16.697 14.426H15.47L15.332 14.85H19.265L19.849 14.426H17.143L16 10.908V10.909Z"
        fill="#f6dd4c"
      />
      <path
        d="M17.285 14.05 18.907 11.819 19.08 11.945 17.457 14.175 17.285 14.05ZM20.842 14.427H20.12L17.711 16.177 17.332 15.01H16.886L18.101 18.751 18.685 19.175 17.849 16.601 20.842 14.427Z"
        fill="#f6dd4c"
      />
      <path
        d="M20.809 17.674 18.186 16.822 18.252 16.62 20.875 17.472 20.809 17.674ZM18.992 20.119 18.769 19.433 16.36 17.683 17.352 16.962 17.214 16.538 14.032 18.85 13.809 19.536 15.999 17.945 18.991 20.119H18.992Z"
        fill="#f6dd4c"
      />
      <path
        d="M15.894 18.333H16.107V21.091H15.894V18.333ZM13.008 20.119 13.592 19.695 14.512 16.864 15.504 17.585 15.865 17.323 12.683 15.011H11.961L14.151 16.602 13.008 20.12V20.119Z"
        fill="#f6dd4c"
      />
      <path
        d="M11.191 17.674 11.125 17.472 13.748 16.62 13.814 16.822 11.191 17.674ZM11.158 14.427 11.742 14.851H14.719L14.34 16.018 14.701 16.28 15.916 12.539 15.693 11.853 14.857 14.427H11.158Z"
        fill="#f6dd4c"
      />
      <path
        d="M12.9224 11.9441L13.0947 11.8189L14.716 14.05L14.5437 14.1752L12.9224 11.9441Z"
        fill="#f6dd4c"
      />
    </svg>
  );
});

Ethiopia.displayName = "Ethiopia";

Ethiopia.metadata = {
  name: "Ethiopia",
  category: "symbols/flags",
  tags: ["ethiopia", "icon"],
  description: "Ethiopia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ethiopia;
