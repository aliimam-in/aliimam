import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface MessageSquareDotProps extends IconProps {
  type?: "stroke";
}

export const MessageSquareDot: IconComponent<MessageSquareDotProps> =
  React.forwardRef<SVGSVGElement, MessageSquareDotProps>(
    function MessageSquareDot(
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
              d="M12.7 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V21.286C2.00002 21.4264 2.04167 21.5637 2.11969 21.6804C2.1977 21.7971 2.30858 21.8881 2.43831 21.9419C2.56803 21.9956 2.71077 22.0097 2.84849 21.9823C2.9862 21.9549 3.1127 21.8873 3.212 21.788L5.414 19.586C5.78899 19.2109 6.29761 19.0001 6.828 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V12.3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 9C20.6569 9 22 7.65685 22 6C22 4.34315 20.6569 3 19 3C17.3431 3 16 4.34315 16 6C16 7.65685 17.3431 9 19 9Z"
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
              d="M12.7 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V21.286C2.00002 21.4264 2.04167 21.5637 2.11969 21.6804C2.1977 21.7971 2.30858 21.8881 2.43831 21.9419C2.56803 21.9956 2.71077 22.0097 2.84849 21.9823C2.9862 21.9549 3.1127 21.8873 3.212 21.788L5.414 19.586C5.78899 19.2109 6.29761 19.0001 6.828 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V12.3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 9C20.6569 9 22 7.65685 22 6C22 4.34315 20.6569 3 19 3C17.3431 3 16 4.34315 16 6C16 7.65685 17.3431 9 19 9Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`MessageSquareDot doesn't support ${type}`);
      return null;
    },
  );

MessageSquareDot.displayName = "MessageSquareDot";

MessageSquareDot.metadata = {
  name: "MessageSquareDot",
  category: "stroke/social",
  tags: ["message", "square", "dot", "icon"],
  description: "MessageSquareDot icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageSquareDot;
