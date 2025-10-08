import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HeartCrack: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function HeartCrack(
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
        d="M12.409 5.82397C11.707 6.61597 11.259 7.31997 10.994 7.98997L13.147 10.146C13.2407 10.2397 13.2934 10.3669 13.2934 10.4995C13.2934 10.6321 13.2407 10.7592 13.147 10.853L10.854 13.146C10.7603 13.2397 10.7076 13.3669 10.7076 13.4995C10.7076 13.6321 10.7603 13.7592 10.854 13.853L12 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.508 20.313C13.3217 20.5271 13.0919 20.699 12.834 20.8173C12.5762 20.9357 12.296 20.9979 12.0123 20.9997C11.7285 21.0015 11.4476 20.9429 11.1883 20.8278C10.9289 20.7127 10.697 20.5437 10.508 20.332L5 15C3.5 13.5 2 11.8 2 9.50005C1.99982 8.38716 2.33725 7.3004 2.96771 6.38333C3.59817 5.46625 4.49201 4.76201 5.53114 4.36362C6.57028 3.96524 7.70582 3.89146 8.78777 4.15203C9.86972 4.4126 10.8472 4.99526 11.591 5.82305C11.7019 5.92665 11.848 5.98436 11.9998 5.98455C12.1516 5.98473 12.2978 5.92738 12.409 5.82405C13.1528 4.99633 14.1301 4.41369 15.212 4.15309C16.2938 3.89249 17.4293 3.96619 18.4684 4.36445C19.5075 4.7627 20.4013 5.46679 21.0319 6.38371C21.6624 7.30063 22 8.38725 22 9.50005C22 11.79 20.5 13.5 19 15L13.508 20.313Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

HeartCrack.displayName = "HeartCrack";

HeartCrack.metadata = {
  name: "HeartCrack",
  category: "stroke/emoji",
  tags: ["heart", "crack", "icon"],
  description: "HeartCrack icon from stroke/emoji category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HeartCrack;
