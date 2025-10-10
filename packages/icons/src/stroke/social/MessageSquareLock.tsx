import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessageSquareLock: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessageSquareLock(
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
        d="M22 8.5V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V21.286C2.00002 21.4264 2.04167 21.5637 2.11969 21.6804C2.1977 21.7971 2.30858 21.8881 2.43831 21.9419C2.56803 21.9956 2.71077 22.0097 2.84849 21.9823C2.9862 21.9549 3.1127 21.8873 3.212 21.788L5.414 19.586C5.78899 19.2109 6.29761 19.0001 6.828 19H10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15V13C20 12.47 19.789 11.961 19.414 11.586 19.039 11.211 18.53 11 18 11 17.47 11 16.961 11.211 16.586 11.586 16.211 11.961 16 12.47 16 13V15M21 15H15C14.448 15 14 15.448 14 16V19C14 19.552 14.448 20 15 20H21C21.552 20 22 19.552 22 19V16C22 15.448 21.552 15 21 15Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageSquareLock.displayName = "MessageSquareLock";

MessageSquareLock.metadata = {
  name: "MessageSquareLock",
  category: "stroke/social",
  tags: ["message", "square", "lock", "icon"],
  description: "MessageSquareLock icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageSquareLock;
