import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const MessageSquareOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function MessageSquareOff(
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
        d="M19 19H6.828C6.298 19 5.789 19.211 5.414 19.586L3.212 21.788C3.115 21.893 2.988 21.965 2.848 21.995 2.709 22.026 2.564 22.013 2.432 21.958 2.3 21.903 2.188 21.81 2.111 21.69 2.033 21.57 1.995 21.429 2 21.286V5C2 4.614 2.112 4.236 2.322 3.912 2.532 3.588 2.831 3.332 3.184 3.174M2 2 22 22M8.656 3H20C20.53 3 21.039 3.211 21.414 3.586 21.789 3.961 22 4.47 22 5V16.344"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

MessageSquareOff.displayName = "MessageSquareOff";

MessageSquareOff.metadata = {
  name: "MessageSquareOff",
  category: "stroke/social",
  tags: ["message", "square", "off", "icon"],
  description: "MessageSquareOff icon from stroke/social category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default MessageSquareOff;
