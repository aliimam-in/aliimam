import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GoogleMaps: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GoogleMaps(
  {
    color = "currentColor",
    fill,
    size = 20,
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
      viewBox="0 0 24 25"
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
        d="M14.74 0.399093C13.8819 0.145125 12.9459 0 11.9903 0C9.24055 0 6.76384 1.161 5.1062 2.9932L9.35755 6.31292L14.74 0.399093Z"
        fill="#1a73e8"
      />
      <path
        d="M5.10618 2.99316C3.79957 4.44441 3 6.33103 3 8.36278C3 9.94101 3.33153 11.2109 3.89707 12.3537L9.35753 6.31289L5.10618 2.99316Z"
        fill="#ea4335"
      />
      <path
        d="M12.0098 5.17002C13.9209 5.17002 15.4616 6.60313 15.4616 8.38091C15.4616 9.16095 15.1495 9.88658 14.6425 10.4489C14.6425 10.4489 17.3532 7.4376 20.0054 4.51696C18.9133 2.55778 17.0217 1.07025 14.74 0.399048L9.35754 6.31288C10.0011 5.62354 10.9372 5.17002 12.0098 5.17002Z"
        fill="#4285f4"
      />
      <path
        d="M12.0098 11.5736C10.0986 11.5736 8.55798 10.1405 8.55798 8.36275C8.55798 7.58271 8.85051 6.85708 9.35755 6.31287L3.89709 12.3537C4.83317 14.2766 6.3933 15.8367 7.99244 17.7777L14.6425 10.4308C13.9989 11.1383 13.0629 11.5736 12.0098 11.5736Z"
        fill="#fbbc04"
      />
      <path
        d="M14.5255 19.8095C17.5287 15.4376 21.0195 13.4603 21.0195 8.38091C21.0195 6.98409 20.649 5.67797 20.0054 4.51697L7.99243 17.7777C8.49947 18.3945 9.02602 19.102 9.53306 19.8276C11.3662 22.458 10.8592 24.0181 12.0293 24.0181C13.1994 24.0181 12.6923 22.4399 14.5255 19.8095Z"
        fill="#34a853"
      />
    </svg>
  );
});

GoogleMaps.displayName = "GoogleMaps";

GoogleMaps.metadata = {
  name: "GoogleMaps",
  category: "icon/google",
  tags: ["google", "maps", "icon"],
  description: "GoogleMaps icon from icon/google category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GoogleMaps;
