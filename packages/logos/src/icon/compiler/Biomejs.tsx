import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Biomejs: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Biomejs(
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
      <g clipPath="url(#undefined-clip0_2062_2610)">
        <path
          d="M11.9999 1L6.6543 10.3548C8.68268 9.72297 10.8648 9.6293 12.9802 10.1334L14.7868 10.5643L13.087 17.8465L11.2778 17.4157C9.05426 16.8857 6.91725 18.0659 6.01425 19.9486L4.34194 19.1311C5.61821 16.4679 8.62594 14.8554 11.7054 15.5894L12.5528 11.96C9.51758 11.2371 6.31875 11.9566 3.87337 13.9125C1.42822 15.8678 0 18.8486 0 21.9995L24 21.9998L11.9999 1Z"
          fill="#60a5fa"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2062_2610">
          <path fill="#fff" transform="translate(0 1)" d="M0 0H24V21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Biomejs.displayName = "Biomejs";

Biomejs.metadata = {
  name: "Biomejs",
  category: "icon/compiler",
  tags: ["biomejs", "icon"],
  description: "Biomejs icon from icon/compiler category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Biomejs;
