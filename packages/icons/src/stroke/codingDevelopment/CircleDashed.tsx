import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleDashed: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleDashed(
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
        d="M10.1 2.182C11.355 1.939 12.645 1.939 13.9 2.182M13.9 21.818C12.645 22.061 11.355 22.061 10.1 21.818M17.609 3.721C18.67 4.44 19.584 5.357 20.299 6.421M2.182 13.9C1.939 12.645 1.939 11.355 2.182 10.1M20.279 17.609C19.56 18.671 18.643 19.584 17.579 20.299M21.818 10.1C22.061 11.355 22.061 12.645 21.818 13.9M3.721 6.391C4.44 5.33 5.357 4.416 6.421 3.701M6.391 20.279C5.329 19.56 4.416 18.643 3.701 17.579"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleDashed.displayName = "CircleDashed";

CircleDashed.metadata = {
  name: "CircleDashed",
  category: "stroke/codingDevelopment",
  tags: ["circle", "dashed", "icon"],
  description: "CircleDashed icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleDashed;
