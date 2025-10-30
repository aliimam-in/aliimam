import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Abstract108: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Abstract108(
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
      viewBox="0 0 23 23"
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
        d="M18.2394 5.93619L17.0638 4.76064L11.5 10.3226L5.93802 4.76064L4.76063 5.93619L10.3226 11.5L4.76063 17.062L5.93802 18.2394L11.5 12.6756L17.0638 18.2394L18.2394 17.062L12.6756 11.5L18.2394 5.93619ZM19.3492 17.062L17.0638 19.3474L11.5 13.7836L5.93802 19.3474L3.65262 17.062L9.2146 11.5L3.65262 5.93619L5.93802 3.65079L11.5 9.21277L17.0638 3.65079L19.3492 5.93619L13.7872 11.5L19.3492 17.062ZM21.892 5.57476L17.4252 1.10984L11.5 7.03325L5.57659 1.10984L1.10984 5.57476L7.03325 11.5L1.10984 17.4234L5.57659 21.8902L11.5 15.9667L17.4252 21.8902L21.892 17.4234L15.9667 11.5L21.892 5.57476ZM23 17.4234L17.4252 23L11.5 17.0748L5.57659 23L0 17.4234L5.92524 11.5L0 5.57476L5.57659 0L11.5 5.92342L17.4252 0L23 5.57476L17.0748 11.5L23 17.4234Z"
        fill="#1d1d1b"
      />
    </svg>
  );
});

Abstract108.displayName = "Abstract108";

Abstract108.metadata = {
  name: "Abstract108",
  category: "shapes/abstract",
  tags: ["abstract", "108", "icon"],
  description: "Abstract108 icon from shapes/abstract category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Abstract108;
