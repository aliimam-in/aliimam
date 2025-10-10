import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessageCircleDashed: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessageCircleDashed(
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
        d="M10.1 2.182C11.355 1.939 12.645 1.939 13.9 2.182M13.9 21.818C12.645 22.061 11.355 22.061 10.1 21.818M17.609 3.72C18.67 4.439 19.584 5.356 20.299 6.42M2.182 13.9C1.939 12.645 1.939 11.355 2.182 10.1M20.28 17.61C19.561 18.672 18.644 19.585 17.58 20.3M21.818 10.1C22.061 11.355 22.061 12.645 21.818 13.9M3.721 6.391C4.44 5.33 5.357 4.416 6.421 3.701M6.163 21.117 3.257 21.967C3.092 22.011 2.919 22.012 2.754 21.97 2.589 21.928 2.437 21.844 2.313 21.727 2.189 21.61 2.097 21.463 2.046 21.301 1.995 21.138 1.986 20.965 2.021 20.798L2.986 17.818"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageCircleDashed.displayName = "MessageCircleDashed";

MessageCircleDashed.metadata = {
  name: "MessageCircleDashed",
  category: "stroke/social",
  tags: ["message", "circle", "dashed", "icon"],
  description: "MessageCircleDashed icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageCircleDashed;
