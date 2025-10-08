import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessageCircleCode: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessageCircleCode(
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
        d="M10 9 7 12 10 15M14 15 17 12 14 9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.99194 16.3419C3.13897 16.7129 3.17171 17.1193 3.08594 17.5089L2.02094 20.7989C1.98662 20.9658 1.99549 21.1386 2.04671 21.3011C2.09793 21.4635 2.1898 21.6102 2.3136 21.7272C2.43741 21.8442 2.58904 21.9276 2.75413 21.9696C2.91923 22.0115 3.0923 22.0106 3.25694 21.9669L6.66994 20.9689C7.03765 20.896 7.41846 20.9279 7.76894 21.0609C9.90432 22.0582 12.3233 22.2691 14.5991 21.6567C16.8749 21.0442 18.8612 19.6476 20.2076 17.7133C21.5541 15.779 22.1741 13.4313 21.9582 11.0845C21.7424 8.73763 20.7046 6.54241 19.028 4.88613C17.3514 3.22986 15.1436 2.21898 12.7943 2.03183C10.445 1.84469 8.10507 2.49332 6.18738 3.86328C4.26968 5.23323 2.89747 7.23648 2.31283 9.51958C1.72819 11.8027 1.9687 14.2189 2.99194 16.3419Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageCircleCode.displayName = "MessageCircleCode";

MessageCircleCode.metadata = {
  name: "MessageCircleCode",
  category: "stroke/codingDevelopment",
  tags: ["message", "circle", "code", "icon"],
  description: "MessageCircleCode icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageCircleCode;
