import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const FrenchPolynesia: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function FrenchPolynesia(
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
      <path d="M31 10H1V22H31V10Z" fill="#fff" />
      <path
        d="M5 4H27C29.208 4 31 5.792 31 8V11H1V8C1 5.792 2.792 4 5 4ZM27 28 5 28C2.792 28 1 26.208 1 24V21L31 21V24C31 26.208 29.208 28 27 28Z"
        fill="#cf0922"
      />
      <path
        d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
        fill="#f0a03c"
      />
      <path
        d="M12.5548 18C13.2477 19.1906 14.5232 20 16 20C17.4768 20 18.7523 19.1906 19.4452 18H12.5548Z"
        fill="#1a3c95"
      />
      <path
        d="M16.8631 15.9157V13.6066C16.8631 13.593 16.8575 13.58 16.8477 13.5707C16.8379 13.5614 16.8243 13.5567 16.811 13.5571C16.413 13.577 16.0648 13.146 16.0419 12.7761C16.0195 12.414 16.2838 12.1857 16.7672 12.1497C16.7924 12.1478 16.8122 12.1272 16.8131 12.1019C16.814 12.0766 16.7956 12.0547 16.7705 12.0512C15.4231 11.8591 15.1147 12.2477 15.1147 12.5923C15.1147 12.599 15.1147 12.6001 15.1147 12.6067L15.1273 15.5218L16.8631 15.9157Z"
        fill="#5a1314"
      />
      <path d="M18.2706 16.1765H13.8471V18.0118H18.2706V16.1765Z" fill="#fff" />
      <path
        d="M15.559 17.525C13.39 18.913 14.3 16.452 13.921 14.936 14.043 14.883 14.142 14.675 13.957 14.63 13.882 14.6 13.9 14.586 13.964 14.552 14.305 14.396 13.695 14.265 13.975 14.152 14.217 13.966 13.514 14.007 13.462 14.079 13.645 14.337 13.273 14.374 13.578 14.607 13.286 14.672 13.473 17.268 13.433 17.648 13.511 19.208 15.518 19.029 15.559 17.525ZM16.441 17.525C18.61 18.913 17.7 16.452 18.079 14.936 17.957 14.883 17.859 14.675 18.043 14.63 18.119 14.6 18.1 14.586 18.036 14.552 17.695 14.396 18.305 14.265 18.025 14.152 17.783 13.966 18.486 14.007 18.538 14.079 18.355 14.337 18.727 14.374 18.422 14.607 18.714 14.672 18.527 17.268 18.568 17.648 18.489 19.208 16.482 19.029 16.441 17.525Z"
        fill="#5a1314"
      />
    </svg>
  );
});

FrenchPolynesia.displayName = "FrenchPolynesia";

FrenchPolynesia.metadata = {
  name: "FrenchPolynesia",
  category: "symbols/flags",
  tags: ["french", "polynesia", "icon"],
  description: "FrenchPolynesia icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FrenchPolynesia;
