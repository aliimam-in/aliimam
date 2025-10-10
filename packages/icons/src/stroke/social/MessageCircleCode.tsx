import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MessageCircleCodeProps extends IconProps {
  type?: "stroke";
}

export const MessageCircleCode: IconComponent<MessageCircleCodeProps> =
  React.forwardRef<SVGSVGElement, MessageCircleCodeProps>(
    function MessageCircleCode(
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
        type = "stroke",
        ...props
      },
      forwardedRef,
    ) {
      if (type === "stroke") {
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
              d="M2.99194 16.342C3.13897 16.7129 3.17171 17.1193 3.08594 17.509L2.02094 20.799C1.98662 20.9658 1.99549 21.1387 2.04671 21.3011C2.09793 21.4636 2.1898 21.6103 2.3136 21.7273C2.43741 21.8443 2.58904 21.9277 2.75413 21.9697C2.91923 22.0116 3.0923 22.0107 3.25694 21.967L6.66994 20.969C7.03765 20.8961 7.41846 20.9279 7.76894 21.061C9.90432 22.0582 12.3233 22.2692 14.5991 21.6567C16.8749 21.0442 18.8612 19.6477 20.2076 17.7134C21.5541 15.7791 22.1741 13.4314 21.9582 11.0845C21.7424 8.73769 20.7046 6.54247 19.028 4.88619C17.3514 3.22992 15.1436 2.21904 12.7943 2.0319C10.445 1.84475 8.10507 2.49338 6.18738 3.86334C4.26968 5.23329 2.89747 7.23654 2.31283 9.51964C1.72819 11.8027 1.9687 14.219 2.99194 16.342Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      if (type === "stroke") {
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
      }

      console.error(`MessageCircleCode doesn't support ${type}`);
      return null;
    },
  );

MessageCircleCode.displayName = "MessageCircleCode";

MessageCircleCode.metadata = {
  name: "MessageCircleCode",
  category: "stroke/social",
  tags: ["message", "circle", "code", "icon"],
  description: "MessageCircleCode icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageCircleCode;
