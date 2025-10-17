import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Flutter: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Flutter(
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
      <g clipPath="url(#undefined-clip0_2066_393)">
        <path
          d="M13.7266 0L2 11.9621L5.63672 15.5962L20.9258 0H13.7266ZM13.6523 10.9779L7.34375 17.4132L10.9805 21.1987L14.6172 17.489L20.9258 10.9779H13.6523Z"
          fill="#47c5fb"
        />
        <path
          d="M10.9805 21.1988L13.7266 24.0001H20.9258L14.6172 17.489L10.9805 21.1988Z"
          fill="#00569e"
        />
        <path
          d="M7.34375 17.4132L10.9062 13.7792L14.6172 17.489L10.9805 21.1987L7.34375 17.4132Z"
          fill="#00b5f8"
        />
      </g>
      <defs>
        <clipPath id="undefined-clip0_2066_393">
          <path fill="#fff" transform="translate(2)" d="M0 0H19V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

Flutter.displayName = "Flutter";

Flutter.metadata = {
  name: "Flutter",
  category: "icon/framework",
  tags: ["flutter", "icon"],
  description: "Flutter icon from icon/framework category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Flutter;
